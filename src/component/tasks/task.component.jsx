import "./task.css";

export const Task = ({ handleTaskCompleted, listTask, handleRemoveTask }) => {
  const handleSubmit = (e) => {
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
    <>
      <ul className="container-task">
        {listTask.map((v, i) => {
          return (
            <div key={i} style={{ margin: "auto" }}>
              <form
                className="list"
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingBottom: 5,
                  gap: "2em",
                }}
                onSubmit={handleSubmit}
              >
                <li
                  style={{ margin: "auto" }}
                  className={`bg-task ${
                    v.isChecked ? "completed" : "notCompleted"
                  }`}
                >
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "black",
                      textDecorationLine: v.isChecked ? "line-through" : "",
                    }}
                    className="task-content"
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
    </>
  );
};
