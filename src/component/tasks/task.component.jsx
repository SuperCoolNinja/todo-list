import "./task.css";

export const Task = ({ handleTaskCompleted, listTask, handleRemoveTask }) => {
  const handleSubmit = (e, i) => {
    e.preventDefault();

    const dropElement = e.target.elements["drop"];

    //delete task :
    if (dropElement) {
      handleRemoveTask(listTask, i);
    }
  };

  const handleCheckbox = (e, i) => {
    handleTaskCompleted(listTask, i, e.target.checked);
    e.target.checked = !e.target.checked;
  };

  return (
    <div>
      <h1>Task list :</h1>
      <ul className="container-task">
        {listTask.map((v, i) => {
          return (
            <div key={i}>
              <form
                className="list flex items-center gap-5 pb-5"
                onSubmit={(e) => handleSubmit(e, i)}
              >
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={v.isChecked ? true : false}
                  onChange={(e) => handleCheckbox(e, i)}
                />
                <li
                  className={`bg-task ${
                    v.isChecked ? "completed" : "notCompleted"
                  }`}
                >
                  <p
                    className={`task-content text-black text-sm ${
                      v.isChecked ? "line-through" : ""
                    } `}
                  >
                    {v.content}
                  </p>
                </li>
                <button type="submit" className="drop-task" name="drop">
                  🗑
                </button>
              </form>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
