import React from "react";
import "./../styles/App.css";
import ListItem from "./ListItem";
import ListHeader from "./ListHeader";

function App() {
  const [taskList, setTaskList] = React.useState([]);
  const onHandleClick = (task) => {
    let obj = {
      value: task,
      id: Math.floor(Math.random() * 9999999)
    };

    const copyTaskList = [...taskList, obj];
    // console.log(copyTaskList);
    taskList.map((task) => console.log(task));
    setTaskList(copyTaskList);
  };
  const onHandleDelete = (id) => {
    let copyTaskList = [...taskList];
    copyTaskList = copyTaskList.filter((task) => task.id !== id);
    setTaskList(copyTaskList);
  };
  const onHandleSave = (id, value) => {
    let copyTaskList = [...taskList];
    copyTaskList = copyTaskList.map((task) => {
      if (task.id === id) {
        task.value = value;
      }
      return task;
    });
    setTaskList(copyTaskList);
  };
  return (
    <div id="main">
      <ListHeader handleClick={(task) => onHandleClick(task)} />
      {taskList.map((task) => (
        <ListItem
          key={task.id}
          id={task.id}
          value={task.value}
          handleDelete={(id) => onHandleDelete(id)}
          handleSave={(id, value) => onHandleSave(id, value)}
        />
      ))}
    </div>
  );
}

export default App;
