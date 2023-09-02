/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { InputTask } from "./ToDoList.styled";
import { useState } from "react";
const CreateModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const [task, setTask] = useState();
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const onOkClick = () => {
    handleOk(task);
  };

  const onCancelClick = () => {
    handleCancel();
  };
  return (
    <>
      <Modal
        title="Write your new task"
        open={isModalOpen}
        onOk={onOkClick}
        onCancel={onCancelClick}
      >
        <InputTask onChange={handleChange} />
      </Modal>
    </>
  );
};
export default CreateModal;
