import { useState } from "react";
import {
  Button,
  Column,
  Container,
  DeleteIcon,
  DoneCol,
  PlusIcon,
  Task,
  Text,
  Title,
  ToDoCol,
} from "./ToDoList.styled";
import CreateModal from "./Modal";
import EditModal from "./EditModal";
// import { DragDropContext, Droppable } from "react-beautiful-dnd";
function ToDoList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [index, setIndex] = useState();
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")?.split(",") || []
  );
  const [isLoanding, setIsLoading] = useState(true);
  // Create modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (e) => {
    const newTask = tasks;
    if (e != undefined) {
      newTask.push(e);
    }
    setTasks(newTask);
    localStorage.setItem("tasks", tasks);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Edit modal
  const showEditModal = (e, index) => {
    setIndex(index);
    setIsEditModalOpen(true);
  };
  const handleEditOk = (e) => {
    const newTask = tasks;
    if (e != "") {
      newTask[index] = e;
    }
    setTasks(newTask);
    localStorage.setItem("tasks", tasks);
    setIsEditModalOpen(false);
  };
  const handleEditCancel = () => {
    setIsEditModalOpen(false);
  };

  const handleDelete = async (e, index) => {
    const newTask = await onDelete(e, index);
    setTasks(newTask);
    console.log(newTask);
    setIsLoading(true);
    newTask.length == 0
      ? localStorage.clear()
      : localStorage.setItem("tasks", newTask);
  };
  const onDelete = async (e, index) => {
    setIsLoading(false);
    const newTask = tasks;
    if (e && e.stopPropagation) e.stopPropagation();
    return newTask.filter((item) => item != newTask[index]);
  };
  return (
    // <DragDropContext droppableId="characters">
    <Container>
      <ToDoCol>
        <Column>
          <Title>To-do</Title>
          {isLoanding &&
            tasks?.map((task, index) => {
              return (
                <Task key={index} onClick={(e) => showEditModal(e, index)}>
                  <Text>{task}</Text>
                  <DeleteIcon onClick={(e) => handleDelete(e, index)} />
                </Task>
              );
            })}
        </Column>
        <Button onClick={showModal}>
          <PlusIcon />
          <Text>New task</Text>
        </Button>
      </ToDoCol>
      <DoneCol>
        <Column>
          <Title>Done</Title>
          <Task>
            <Text> Hello</Text>
          </Task>
          <Task>
            <Text> Hello</Text>
          </Task>
          <Task>
            <Text> Hello</Text>
          </Task>
        </Column>
      </DoneCol>
      {isModalOpen && (
        <CreateModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      )}
      {isEditModalOpen && (
        <EditModal
          isEditModalOpen={isEditModalOpen}
          tasks={tasks}
          handleEditOk={handleEditOk}
          handleEditCancel={handleEditCancel}
          index={index}
        />
      )}
    </Container>
    // </DragDropContext>
  );
}

export default ToDoList;
