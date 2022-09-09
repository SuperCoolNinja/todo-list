import { useEffect, useState } from "react";
import { Form } from "../form/form.component";
import {
  Color,
  Notifications,
} from "../notify/notifications/notifications.component";
import "./app.css";

const getTaskSaved = () => {
  const list = localStorage.getItem("data");
  if (list) return JSON.parse(localStorage.getItem("data"));
  return [];
};

export const App = () => {
  const [data, setData] = useState(getTaskSaved());
  const [notifications, setNotifications] = useState([]);

  const createNotification = (color, content) =>
    setNotifications([
      ...notifications,
      { color, id: notifications.length, content },
    ]);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  //Update the tasklist :
  const handleAddTask = (task) => {
    if (task.content.length > 0 && task.content !== "") {
      setData([...data, task]);
    }
  };

  const handleRemoveTask = (task, index) => {
    let copyTask = [...task];
    copyTask = copyTask.filter((_, i) => i !== index);
    setData(copyTask);
    createNotification(Color.error, "Task deleted 👌");
  };

  const handleTaskCompleted = (task, i, bool) => {
    let copyTask = [...task];
    copyTask[i].isChecked = bool;
    copyTask.sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
    setData(copyTask);
    createNotification(Color.success, "Task completed 👍");
  };

  return (
    <div>
      <h1 className="title">Todo📝</h1>

      <Form
        handleAddTask={handleAddTask}
        handleTaskCompleted={handleTaskCompleted}
        handleRemoveTask={handleRemoveTask}
        data={data}
      />

      {notifications.map(({ id, color, content }) => (
        <Notifications key={id} autoClose={true} color={color}>
          {content}
        </Notifications>
      ))}
    </div>
  );
};
