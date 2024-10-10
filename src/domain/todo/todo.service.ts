import { IRepository } from '../../interface/IRepository.interface';

export interface ITodoService {
    getAllTodo(): Promise<string[]>;
    createTodo(description: string): Promise<{
        success: boolean;
        message: string;
    }>;
}

export interface IServiceFactory {
    init(repositories: IRepository): ITodoService;
}

export const todoServiceFactory: IServiceFactory = {
    init(repositories: IRepository) {
        async function getAllTodo() {
            return repositories.todoRepository.getAllTodo()
        }
        async function createTodo(description: string) {
            try {
                const result = await repositories.todoRepository.createTodo(description);
                if (!result) {
                    return {
                        success: false,
                        message: 'Failed to create todo'
                    }
                }
                return {
                    success: true,
                    message: 'Todo created successfully',
                }
            } catch (error) {
                console.log(error);
                return {
                    success: false,
                    message: 'Failed to create todo'
                }
            }
        }
        return {
            getAllTodo,
            createTodo
        }
    }
}