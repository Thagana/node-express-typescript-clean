import http from 'http';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import helmet from 'helmet';
import express, { Router } from 'express';
import cookieParser from 'cookie-parser';
import { expressjwt } from 'express-jwt';
import configs from '../../configs/configs';
import { IService } from '../../interface/IService.interface';
import { ExampleRouter } from './routes/example.routes';

const app = express()

app.disable('x-powered-by');
app.use(helmet())
app.use(express.urlencoded({ extended: true }));
app.use(compression())
app.use(cookieParser())

app.use(cors())

export const appServerFactory = {
    init(service: IService): http.Server {
        app.use(express.static(path.join(__dirname, 'public')))
        app.use(expressjwt({
            secret: configs.SECRET_TOKEN,
            algorithms: ['HS256']
        }).unless({
            path: '/public/example'
        }))
        app.use('/public/example', ExampleRouter.init(service));
        return http.createServer(app);
    }
}
