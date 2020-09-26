// Arrays to keep track of each task's state


// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title,description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logTaskState : function(){
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    markComplete: function() {
      this.complete = true;
    }
  };
  return task;
};


const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

console.log(tasks);



task1.logTaskState();
task1.markComplete();
task1.logTaskState();


