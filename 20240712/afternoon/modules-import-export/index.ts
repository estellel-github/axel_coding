import { Task } from "./type";
import { addTask } from "./todos";

const tasks: Task[] = [];

addTask("Sleep", tasks);
addTask("Eat", tasks);
addTask("Code", tasks);

console.log(tasks);