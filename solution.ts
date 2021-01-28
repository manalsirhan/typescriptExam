// console.log("STARTING PROJECT")

class Task {
    id:number 
    name:string
   constructor(id,name){
       this.id=id
       this.name=name
   }
  
}

let count:number =0
HTMLElement;let btn:any=document.getElementById("todo-save")
HTMLElement; let inputTask:any=document.getElementById("todo-item")
HTMLElement; let list:any=document.getElementById("todo-list")

let addTask=()=>{
    console.log(inputTask.value)
    let newTask= new Task(count,inputTask.value)
    count++;
    let task=`<div class="todo-item">${newTask.value}<button>v</button></div>`
    list.innerHTML+=task
}
// console.log(btn)

btn.addEventListener("click",(event)=>{
    event.preventDefault()
   addTask()
})

let clearTask=()=>{
    let delTask=document.getElementById("todo-delcom")
    let divTaskDone=document.getElementsByClassName("todo-item.cx")
    delTask.addEventListener("click",()=>{
        if(divTaskDone){
        divTaskDone.forEach(element => {
            console.log(element)
        });
    }
    })
}

let deletAll=()=>{
    list.innerHTML=""
}