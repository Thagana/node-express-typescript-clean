// App module
import { appServerFactory } from './presentation/http/app';

// Repositories
import { todoRepositoryFactory } from './data/repositories/todo'

// Services Factories
import { todoServiceFactory } from './domain/todo/todo.service';

// Init repositories
const todoRepository = todoRepositoryFactory.init();


const todoService = todoServiceFactory.init({
    todoRepository: todoRepository
})

const app = appServerFactory.init({
    todoService
})

export default app;