// console.log("STARTING PROJECT")
var Task = /** @class */ (function () {
    function Task(id, name) {
        this.id = id;
        this.name = name;
    }
    return Task;
}());
var count = 0;
HTMLElement;
var btn = document.getElementById("todo-save");
HTMLElement;
var inputTask = document.getElementById("todo-item");
HTMLElement;
var list = document.getElementById("todo-list");
var addTask = function () {
    console.log(inputTask.value);
    var newTask = new Task(count, inputTask.value);
    count++;
    var task = "<div class=\"todo-item\">" + newTask.value + "<button>v</button></div>";
    list.innerHTML += task;
};
// console.log(btn)
btn.addEventListener("click", function (event) {
    event.preventDefault();
    addTask();
});
var clearTask = function () {
    var delTask = document.getElementById("todo-delcom");
    var divTaskDone = document.getElementsByClassName("todo-item.cx");
    delTask.addEventListener("click", function () {
        if (divTaskDone) {
            divTaskDone.forEach(function (element) {
                console.log(element);
            });
        }
    });
};
var deletAll = function () {
    list.innerHTML = "";
};
