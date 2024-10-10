import { Model, DataTypes } from '@sequelize/core';
import { Database } from "../";
import { Todo as TodoModel } from "../../../../domain/todo/todo";


type TodoCreationAttributes = Partial<Omit<TodoModel, 'id' | 'done'>>;

class Todo extends Model<TodoModel, TodoCreationAttributes> {
    public id!: number;
    public description!: string;
    public done!: boolean;
}

Todo.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
}, {
    tableName: "todo",
    sequelize: new Database().sequelize!,
    timestamps: false,
})

if(process.env.NODE_ENV === 'development') {
    Todo.sync();
}

export default Todo;