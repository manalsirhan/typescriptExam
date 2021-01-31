{
    let arr = [];
    window.onload = () => {
        class Task {
            constructor(id, body, done) {
                this.id = id;
                this.body = body;
                this.done = done;
            }
        }
        let count;
        if (!localStorage.getItem("count")) {
            localStorage.setItem("count", "0");
            count = 0;
        }
        else
            count = Number(localStorage.getItem("count"));
        let btn = document.getElementById("todo-save");
        let inputTask = document.getElementById("todo-item");
        let list = document.getElementById("todo-list");
        if (localStorage.getItem("task")) {
            arr = JSON.parse(localStorage.getItem("task"));
            arr.forEach(({ id, body, done }) => taskToHtml(id, body, done));
        }
        function taskToHtml(id, body, done) {
            list.innerHTML += `
                <div class="todo-row">
                    <div class="todo-item ${(done) ? "done" : ""}" id=${id}>${body}</div>
                    <input type="button" 
                        onclick="toDone(${id})" 
                        class="todo-ok todo-wrap" value="v"/>
                </div>`;
        }
        function addTask() {
            let newTask = new Task(count, inputTask.value, false);
            arr.push(newTask);
            taskToHtml(count, inputTask.value, false);
            count++;
            localStorage.setItem("task", JSON.stringify(arr));
            localStorage.setItem("count", count);
            inputTask.value = "";
        }
        ;
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            addTask();
        });
        let delAllBtn = document.getElementById("todo-delall");
        delAllBtn.addEventListener("click", () => {
            list.innerHTML = "";
            arr = [];
            localStorage.setItem("count", "0");
            count = 0;
            localStorage.setItem("task", JSON.stringify(arr));
        });
        let deletCompBtn = document.getElementById("todo-delcom");
        deletCompBtn.addEventListener("click", () => {
            let newArr = [];
            list.innerHTML = "";
            arr = JSON.parse(localStorage.getItem("task"));
            arr.forEach(element => {
                if (!element.done) {
                    newArr.push(element);
                    taskToHtml(element.id, element.body, element.done);
                }
            });
            localStorage.setItem("task", JSON.stringify(newArr));
            arr = JSON.parse(localStorage.getItem("task"));
        });
    };
    function toDone(id) {
        console.log(id);
        document.getElementById(id).classList.add("done");
        arr.forEach(element => {
            if (element.id == id)
                element.done = true;
        });
        localStorage.setItem("task", JSON.stringify(arr));
    }
}
