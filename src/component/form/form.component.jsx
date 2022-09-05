import "./form.css";
import { useState } from "react";

export const Form = ({ handleAddTask }) => {
  const [taskContent, setTaskContent] = useState({
    content: "",
    isChecked: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask(taskContent);
    setTaskContent((taskContent) => ({ content: ""}));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setTaskContent({ isChecked: false, content: value });
  };

  return (
    <div className="child">
      <form onSubmit={handleSubmit} className="formStyle">
        <input
          className="inputStyle"
          type="text"
          placeholder="Task to be done ..."
          value={taskContent.content}
          onChange={handleChange}
        />
        <div className="bg-btn">
          <button type="submit" name="add" className="add font-semibold">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};
