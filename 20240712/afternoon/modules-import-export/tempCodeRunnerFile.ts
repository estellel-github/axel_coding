import { Task } from "./type";
import { displayTasks, removeTask, addTask } from "./todos";

const tasks: Task[] = [];

addTask("Sleep", tasks);
addTask("Eat", tasks);
addTask("Code", tasks);

displayTasks(tasks);
