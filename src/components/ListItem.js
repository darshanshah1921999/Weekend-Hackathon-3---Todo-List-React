import React from "react";
import "./../styles/App.css";

function ListItem(props) {
  const [task, setTask] = React.useState("");
  const [isEdit, setIsEdit] = React.useState(false);
  const handleEditClick = () => {
    setIsEdit(!isEdit);
    setTask(props.value);
  };
  const handleDeleteClick = () => {
    props.handleDelete(props.id);
  };
  const handleSaveClick = () => {
    if (props.value !== task) {
      setIsEdit(!isEdit);
      props.handleSave(props.id, task);
    }
  };
  return (
    <div>
      {isEdit ? (
        <textarea
          className="editTask"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        ></textarea>
      ) : (
        <span className="list">{props.value}</span>
      )}

      {!isEdit ? (
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
      ) : (
        <button className="saveTask" onClick={handleSaveClick}>
          Save
        </button>
      )}
      <button className="delete" onClick={handleDeleteClick}>
        delete
      </button>
    </div>
  );
}

export default ListItem;
