//
//Goal : create methode to get incomplete methode
//
//1.getTask todo methode
//2.use filter to return just the incomplete tasks(arroe function)
//3.Test your work by running the script

const tasks = {
  tasks: [
    {
      text: "Grocery Shopping",
      completed: true,
    },
    {
      text: "clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],

  getTasktoDo: function () {
    const taskToDo =this.tasks.filter((task) => {
      return task.completed === false
    })
    return taskToDo
  },
}

console.log(tasks.getTasktoDo());
