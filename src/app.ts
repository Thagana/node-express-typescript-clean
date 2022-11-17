// App module
import { appServerFactory } from './presentation/http/app';

// Repositories / Interface
import { IExampleRepository } from './domain/example/example.repository';

// Repositories
import { exampleRepositoryFactory } from './data/repositories/example'

// Services Factories
import { exampleServiceFactory } from './domain/example/example.service';


// Init repositories
const exampleRepository: IExampleRepository = exampleRepositoryFactory.init();

const exampleService = exampleServiceFactory.init(exampleRepository)

const app = appServerFactory.init({
    exampleService
})

export default app;