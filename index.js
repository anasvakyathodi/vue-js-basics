const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const listEl = document.querySelector('.task-list');

buttonEl.addEventListener('click',(e)=>{
    e.preventDefault()
    const node = document.createElement('li')
    const textNode = document.createTextNode(inputEl.value)
    if(inputEl.value){
        node.appendChild(textNode)
        listEl.appendChild(node)
        inputEl.value = ''
    }
})


inputEl.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     buttonEl.click()
    }
  });