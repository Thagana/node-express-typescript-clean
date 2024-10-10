import http from "http";
import cors from "cors";
import compression from "compression";
import path from "path";
import helmet from "helmet";
import express, { Router } from "express";
import cookieParser from "cookie-parser";
import { expressjwt } from "express-jwt";
import configs from "../../configs/configs";
import { IService } from "../../interface/IService.interface";
import { TodoRouter } from "./routes/todos.routes";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "../../../swagger_output.json";

const app = express();

app.disable("x-powerd-by");
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(compression());
app.use(cookieParser());

app.use(cors());

export const appServerFactory = {
  init(service: IService): http.Server {
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "../../views"));
    app.use(express.static(path.join(__dirname, "../../../temp")));
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerOutput));
    app.use(
        expressjwt({
          secret: configs.SECRET_TOKEN,
          algorithms: ["HS256"],
        }).unless({
          path: [
            "/docs",
          ],
        })
      );
    app.use("/todo", TodoRouter.init(service));
    return http.createServer(app);
  },
};
