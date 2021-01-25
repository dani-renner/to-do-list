// business logic

let list = new To_Do_List();
let list2 = new To_Do_List();
let list3 = new To_Do_List();
let list4 = new To_Do_List();
let entryTasks = new List_Object("hop", "skip", "jump");
list.addTask(entryTasks);



function List_Object (tasks){
  this.tasks = [];
  //this.completion = false;
}
function To_Do_List() {
  this.userTasks = {};
  this.currentId = 0;
}
To_Do_List.prototype.addTask = function(task){
  task.id = this.assignId();
  this.userTasks[task.id] = task;
}
To_Do_List.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
To_Do_List.prototype.markCompletion = function(check){
}
// let list = new To_Do_List();
// let entryTasks = new List_Object("hop", "skip", "jump");
// list.addTask(entryTasks);
console.log(list);
console.log(list2);
console.log(list3);
console.log(list4);
console.log(entryTasks);

// user logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#item1").val();

    $(".userEntries").text(person1Input);
  });
}):
