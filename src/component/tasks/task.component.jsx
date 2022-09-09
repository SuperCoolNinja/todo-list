import styles from "./task.module.css";

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
            className={`${styles.completed}`}
            name="completed"
            onClick={(e) => handleOnCompleted(e, i)}
          >
            ✔
          </button>

          <button
            type="submit"
            className={`${styles.drop}`}
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
          className={`${styles.drop}`}
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
      <ul className={`${styles.container}`}>
        {listTask.map((v, i) => {
          return (
            <div key={i} style={{ margin: "auto" }}>
              <form
                className={`${styles.list}`}
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
                  className={` ${styles.bg} ${
                    v.isChecked ? `${styles.completed}` : `${styles.notCompleted}`
                  }`}
                >
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "black",
                      textDecorationLine: v.isChecked ? "line-through" : "",
                    }}
                    className={`${styles.taskContent}`}
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
