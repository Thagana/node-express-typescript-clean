import { ITodoRepository } from "../../domain/todo/todo.repository";
import dataStore from "../infrastructure/db/entities/Todo";

export interface ITodoRepositoryFactory {
  init(): ITodoRepository;
}

export const todoRepositoryFactory: ITodoRepositoryFactory = {
  init() {
    function getAllTodo() {
      return [];
    }
    async function createTodo(description: string): Promise<boolean> {
      return new Promise((resolve, reject) => {
        dataStore
          .create({
            description: description,
          })
          .then((results) => {
            if (results) {
              resolve(true);
            } else {
              reject(false);
            }
          })
          .catch((error) => {
            console.error(error);
            reject(false);
          });
      });
    }
    return {
      getAllTodo,
      createTodo,
    };
  },
};
