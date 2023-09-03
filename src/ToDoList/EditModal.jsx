/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { InputTask } from "./ToDoList.styled";
import { useState } from "react";
const EditModal = ({
  isEditModalOpen,
  tasks,
  handleEditOk,
  handleEditCancel,
  index,
}) => {
  const [task, setTask] = useState(tasks[index].task);
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const onOKClick = () => {
    handleEditOk(task);
  };

  const onCancelClick = () => {
    handleEditCancel();
  };
  return (
    <>
      <Modal
        title="Edit your task"
        open={isEditModalOpen}
        onOk={onOKClick}
        onCancel={onCancelClick}
      >
        <InputTask onChange={handleChange} value={task} />
      </Modal>
    </>
  );
};
export default EditModal;
