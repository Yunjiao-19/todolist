import {generalist} from '../element/list'
//import {TodoList} from "../Model/TodoList";
//import {createAndDisplayTodo} from '../element/list'
function task(){
    document.body.innerHTML = ''
    const banner = document.createElement('div')
    const info = document.createElement('div')
    const name = document.createElement('div')
    const logout = document.createElement('div')
    const list = document.createElement('div')
    const button = document.createElement('button')
    const savedContent = localStorage.getItem('inputContent')
    //console.log(savedContent)


    button.innerText = 'Add New Task'
    button.className = 'addButton'

    button.addEventListener("click", () => {
        console.log('创建')
        generalist()
        // @ts-ignore
        //new TodoList()
    });

    name.className = 'name'
    name.innerText = 'TaskDo'

    info.innerText = 'Hi'
    info.append(savedContent)

    logout.innerText = 'Logout'

    banner.className = 'banner'
    banner.append(info)
    banner.append(name)
    banner.append(logout)

    list.className = 'list'
    list.append(button)
    // document.body.innerHTML = ''
    document.body.append(banner)
    document.body.append(list)
    //document.body.append(savedContent)

    // const taskarea = document.createElement('div')
    // const tasklist = gettask()
    //
    // taskarea.append(tasklist)
    // document.body.append(taskarea)


}


export {task}