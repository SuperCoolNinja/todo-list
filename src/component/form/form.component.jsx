import "./form.css";
import { useState } from "react";
import { Task } from "../tasks/task.component";

export const Form = ({ handleAddTask, handleTaskCompleted, handleRemoveTask, data }) => {
  const [taskContent, setTaskContent] = useState({
    content: "",
    isChecked: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAdd = () => {
    handleAddTask(taskContent);
    setTaskContent({ content: "" });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setTaskContent({ isChecked: false, content: value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          className="inputStyle"
          type="text"
          placeholder="Task to be done ✍"
          value={taskContent.content}
          onChange={handleChange}
        />
        <button
          type="submit"
          name="add"
          className="bg-btn add font-semibold"
          onClick={handleAdd}
        >
          ADD
        </button>
      </form>

      <Task
        handleTaskCompleted={handleTaskCompleted}
        listTask={data}
        handleRemoveTask={handleRemoveTask}
      />
    </div>
  );
};
