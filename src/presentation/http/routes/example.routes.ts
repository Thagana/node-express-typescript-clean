import express , { Request, Response } from 'express';
import { IService } from '../../../interface/IService.interface';

const router = express.Router({ mergeParams: true });

export class ExampleRouter {
    public static init(service: IService) {
        router.get('/', async (request: Request, response: Response) => {
            const example = service.exampleService.exampleMethod();
            return response.status(200).json({ data: example })
        })
        return router;
    }
}