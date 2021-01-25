// business logic
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
let list = new To_Do_List();
let entryTasks = new List_Object("hop", "skip", "jump");
list.addTask(entryTasks);








// user logic