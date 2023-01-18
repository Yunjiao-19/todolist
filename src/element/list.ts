
     interface Todo {
         id: number;
         task: string;
     }

     function createTodo(task: string): Todo {
         let todo: Todo = {
             id: Date.now(),
             task: task
         };
         return todo;
     }

     function generalist() {
         let input = document.createElement("input");
         let button = document.createElement("button");
         button.innerHTML = "Create";
         let list = document.createElement("ul");

         list.className = 'list'
         button.className = 'button3'
         input.className = 'input'

         button.addEventListener("click", () => {
             let task = input.value;
             let newTodo = createTodo(task);
             let todoElement = document.createElement("li");
             todoElement.innerHTML = newTodo.task;
             todoElement.setAttribute("data-id", newTodo.id.toString());
             list.appendChild(todoElement);

             todoElement.addEventListener("click", (event) => {
                 let target = event.target as HTMLLIElement;
                 let id = target.getAttribute("data-id");
                 list.removeChild(target);
             });
         });

         document.body.appendChild(input);
         document.body.appendChild(button);
         document.body.appendChild(list);





 }

export {generalist}

