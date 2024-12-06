export class ElfWorkshop {
  // readability: the class name should be more explicit, like ElfTaskManager
  // best-practice: for the sake of immutability, the taskList should be a private property and should be accessed through a getter
  // best-practice: the taskList should be readonly and initialized in the constructor
  // best-practice: use underscore to indicate that the property is private
  taskList: string[] = [];

  // best practice: where is the constructor ? it should be used to initialize the taskList

  // we could avoid a primitive type for task and use a Task class or a structured object
  addTask(task: string): void {
    if (task !== "") {
      this.taskList.push(task);
    }
  }
  // typing:  completeTask() returns a string but it can also return null
  completeTask(): string {
    // question: no sorting, so the first task added is the first to be removed ?
    if (this.taskList.length > 0) {
      // with an other approach, we could return the first uncompleted task, without testing if the taskList is empty
      // functional: shift() removes the first element, a better approach with a non-primitive Task would be to filter uncompleted tasks and return the first one
      // then change its status to completed
      return this.taskList.shift();
    }
    return null; // functional/question:  why not return an empty string or an explicit message ?
  }
}
