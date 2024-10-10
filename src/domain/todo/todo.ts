export class Todo {
    constructor(public id: number, public description: string, public done: boolean) {
        this.id = id;
        this.description = description;
        this.done = done;
    }
} 