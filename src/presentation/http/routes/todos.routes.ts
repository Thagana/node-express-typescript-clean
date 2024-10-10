import express, { Request, Response } from "express";
import { IService } from "../../../interface/IService.interface";
import logger from "../../../utils/logger";

const router = express.Router({ mergeParams: true });

export class TodoRouter {
  public static init(service: IService) {
    router.get("/", async (request: Request, response: Response) => {
      /*  #swagger.path = '/todo'
          #swagger.tags = ['Todos']
          #swagger.summary = 'This is the route to get all todos'
      */
      try {
        const results = await service.todoService.getAllTodo();
        return response.status(200).json({ data: results });
      } catch (error) {
        logger.error(error);
        return response.status(400).json({
          success: false,
          message: "Something went wrong please try again [CODE: 101]",
        });
      }
    });
    router.post("/", async (request: Request, response: Response) => {
      /*  #swagger.path = '/todo'
          #swagger.tags = ['Todos']
          #swagger.summary = 'This is the route to create a todo'
      */
      try {
        const results = await service.todoService.createTodo(request.body.description);
        if (!results.success) {
          return response.status(400).json({
            success: false,
            message: results.message,
          });
        }
        return response.status(200).json(results);
      } catch (error) {
        logger.error(error);
        return response.status(400).json({
          success: false,
          message: "Something went wrong please try again [CODE: 101]",
        });
      }
    });
    return router;
  }
}
