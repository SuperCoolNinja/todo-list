import { useEffect, useState } from "react";
import { Formulaire } from "../form/form.component";
import {
  Color,
  Notifications,
} from "../notify/notifications/notifications.component";

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
    createNotification(Color.error, "Task deleted π");
  };

  const handleTaskCompleted = (task, i, bool) => {
    let copyTask = [...task];
    copyTask[i].isChecked = bool;
    copyTask.sort((a, b) => Number(a.isChecked) - Number(b.isChecked));
    setData(copyTask);
    createNotification(Color.success, "Task completed π");
  };

  return (
    <div>
      <h1 className="text-center font-semibold text-5xl py-28">Todoπ</h1>

      <Formulaire handleAddTask={handleAddTask} handleTaskCompleted = {handleTaskCompleted} handleRemoveTask={handleRemoveTask} data={data} />

      {notifications.map(({ id, color, content }) => (
        <Notifications key={id} autoClose={true} color={color}>
          {content}
        </Notifications>
      ))}
    </div>
  );
};
