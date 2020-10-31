import React from "react";
import "./../styles/App.css";

function ListHeader(props) {
  const [task, setTask] = React.useState("");
  const handleClick = () => {
    setTask("");
    if (task) {
      props.handleClick(task);
    }
  };
  return (
    <>
      <textarea
        id="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></textarea>
      <button id="btn" onClick={handleClick}>
        Add
      </button>
    </>
  );
}

export default ListHeader;
