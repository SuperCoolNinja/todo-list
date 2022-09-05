import { useState } from "react";
import { Form } from "../form/form.component";
import { Task } from "../tasks/task.component";
import "./app.css";

export const App = () => {
  const [taskList, setTaskList] = useState([]);

  //Update the tasklist :
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
  };

  const handleRemoveTask = (task, index) => {
    let copyTask = task.slice();
    copyTask = copyTask.filter((v, i) => i !== index);
    setTaskList(copyTask);
  };

  const handleTaskCompleted = (task, i, bool) => {
    let copyTask = task.slice();
    copyTask[i].isChecked = bool;
    setTaskList(copyTask);
  };

  //Sort the element, so the task completed appear on last and not completed on top :
  const reversed = taskList.slice();
  reversed.sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
  return (
    <div>
      <h1 className="text-center font-semibold text-5xl py-28">Todo List</h1>
      <div className="container">
        <Form handleAddTask={handleAddTask} />
        <Task
          handleTaskCompleted={handleTaskCompleted}
          listTask={reversed}
          handleRemoveTask={handleRemoveTask}
        />
      </div>
    </div>
  );
};
