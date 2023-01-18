import {task} from "./task";
function login() {
    const frame = document.createElement('div')
    const input = document.createElement('input')
    const button = document.createElement('button')
    const intro = document.createElement('div')

    input.id = 'input-field'
    intro.className = 'intro'
    intro.innerHTML = 'Manage you task Checklist Easily'
    button.innerText = 'Lets Start'
    button.className = 'button'


    button.addEventListener("click", () => {
        console.log('跳转')
        localStorage.setItem('inputContent', input.value)
        task()
    });


    frame.className = 'log'
    frame.innerText = 'TaskDo'
    frame.append(intro)
    frame.append(input)
    frame.append(button)

    document.body.innerHTML = ''
    document.body.append(frame)
}

export {login}