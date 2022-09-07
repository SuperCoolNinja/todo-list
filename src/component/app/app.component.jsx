import { useEffect, useState } from "react";
import { Form } from "../form/form.component";
import { Task } from "../tasks/task.component";
import "./app.css";

export const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [reverseTask, setReverseTask] = useState([]);

  useEffect(() => {
    const copyTask = [...taskList];
    copyTask.sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
    setReverseTask(copyTask);
  }, [taskList]);

  //Update the tasklist :
  const handleAddTask = (task) => {
    if (task.content.length > 0 && task.content !== "")
      setTaskList([...taskList, task]);
  };

  const handleRemoveTask = (task, index) => {
    let copyTask = [...task];
    copyTask = copyTask.filter((_, i) => i !== index);
    setTaskList(copyTask);
  };

  const handleTaskCompleted = (task, i, bool) => {
    let copyTask = [...task];
    copyTask[i].isChecked = bool;
    setTaskList(copyTask);
  };

  return (
    <div>
      <h1 className="text-center font-semibold text-5xl py-28">Todo List</h1>
      <div className="container">
        <Form handleAddTask={handleAddTask} />
        <Task
          handleTaskCompleted={handleTaskCompleted}
          listTask={reverseTask}
          handleRemoveTask={handleRemoveTask}
        />
      </div>
    </div>
  );
};
