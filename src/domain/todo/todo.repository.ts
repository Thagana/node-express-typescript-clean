export interface ITodoRepository {
    getAllTodo(): string[]
    createTodo(description: string): Promise<boolean>
}