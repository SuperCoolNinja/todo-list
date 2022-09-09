import "./form.css";
import { useState } from "react";

export const Form = ({ handleAddTask }) => {
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
    <div>
      <form onSubmit={handleSubmit} className="wrapper-form">
        <input
          className="inputStyle"
          type="text"
          placeholder="Task to be done ..."
          value={taskContent.content}
          onChange={handleChange}
        />
        <div className="bg-btn">
          <button
            type="submit"
            name="add"
            className="add font-semibold"
            onClick={handleAdd}
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};
