import { IRepository } from '../../interface/IRepository.interface';

export interface IExample {
    exampleMethod(): string;
}

export interface IServiceFactory {
    init(repositories: IRepository): IExample;
}

export const exampleServiceFactory: IServiceFactory = {
    init(repositories: IRepository) {
        function exampleMethod() {
            return repositories.getExampleData()
        }
        return {
            exampleMethod
        }
    }
}