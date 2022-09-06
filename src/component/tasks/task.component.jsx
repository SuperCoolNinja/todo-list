import "./task.css";

export const Task = ({ handleTaskCompleted, listTask, handleRemoveTask }) => {
  const handleSubmit = (e, i) => {
    e.preventDefault();
  };

  const handleOnDelete = (e, i) => {
    e.preventDefault();
    handleRemoveTask(listTask, i);
  };

  const handleOnCompleted = (e, i) => {
    e.preventDefault();
    handleTaskCompleted(listTask, i, true);
  };

  const ShowAllButton = ({ isChecked, i }) => {
    if (!isChecked) {
      return (
        <>
          <button
            type="submit"
            className="completed-task"
            name="completed"
            onClick={(e) => handleOnCompleted(e, i)}
          >
            ✔
          </button>

          <button
            type="submit"
            className="drop-task"
            name="drop"
            onClick={(e) => handleOnDelete(e, i)}
          >
            ✖
          </button>
        </>
      );
    }

    return (
      <>
        <button
          type="submit"
          className="drop-task"
          name="drop"
          onClick={(e) => handleOnDelete(e, i)}
        >
          ✖
        </button>
      </>
    );
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

                <ShowAllButton isChecked={v.isChecked} i={i} />
              </form>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
