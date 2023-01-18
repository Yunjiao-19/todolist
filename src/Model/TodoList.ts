class TodoList {
    private readonly input: HTMLElement;
    button: HTMLElement;
    private list: HTMLElement;
    private readonly todos: any[];
    constructor(inputId: string, buttonId: string, listId: string) {
        this.input = document.getElementById(inputId);
        this.button = document.getElementById(buttonId);
        this.list = document.getElementById(listId);
        this.todos = [];
    }

    addTodo() {
        let task: HTMLElement;
        // @ts-ignore
        task = this.input["value"];
        let todo = { task: task, completed: false };
        this.todos.push(todo);
        this.render();
    }

    removeTodo(index: number) {
        this.todos.splice(index, 1);
        this.render();
    }

    render() {
        this.list.innerHTML = "";
        for (let i = 0; i < this.todos.length; i++) {
            let todo = this.todos[i];
            let item = document.createElement("li");
            item.innerHTML = todo.task;
            item.addEventListener("click", () => {
                this.removeTodo(i);
            });
            this.list.appendChild(item);
        }
    }
}

let todoList = new TodoList("todo-input", "upload-button", "todo-list");

todoList.button.addEventListener("click", () => {
    todoList.addTodo();
});

export {TodoList}
