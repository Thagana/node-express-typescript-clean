import { IRepository } from "../../interface/IRepository.interface"
import getExampleDatabase from '../../data/infrastructure/db';

export interface IExampleRepositoryFactory {
    init(): IRepository
}

export const exampleRepositoryFactory: IExampleRepositoryFactory = {
    init() {
        function getExampleData() {
            // from database
            return getExampleDatabase()
        }
        return {
            getExampleData
        }
    }
}