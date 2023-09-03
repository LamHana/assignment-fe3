import { useEffect, useState } from "react";
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
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
function ToDoList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [index, setIndex] = useState();
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [done, setDone] = useState(
    JSON.parse(localStorage.getItem("done")) || []
  );
  const [isLoanding, setIsLoading] = useState(true);
  const [updateTask, setUpdateTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || tasks
  );
  const [updateDone, setUpdateDone] = useState(
    JSON.parse(localStorage.getItem("done")) || done
  );
  // Create modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (e) => {
    const newTask = tasks;
    if (e != undefined) {
      newTask.push({
        id: `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
        task: e,
      });
    }
    setTasks(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
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
      newTask[index].task = e;
    }
    setTasks(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
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
      : localStorage.setItem("tasks", JSON.stringify(newTask));
  };

  const onDelete = async (e, index) => {
    setIsLoading(false);
    const newTask = tasks;
    if (e && e.stopPropagation) e.stopPropagation();
    return newTask.filter((item) => item.task != newTask[index].task);
  };

  // Drag and Drop function

  const handleOnDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;

    console.log();
    // drop to another column
    if (result.destination.droppableId != "to-do") {
      // from to-do -> done :
      const items = Array.from(updateTask);
      const [reorderedItem] = items.splice(result.source.index, 1);
      if (result.source.droppableId == "done") {
        // from done -> done
        const doneItems = Array.from(done);
        const [reorderedDoneItem] = doneItems.splice(result.source.index, 1);
        doneItems.splice(result.destination.index, 0, reorderedDoneItem);
        setUpdateDone(doneItems);
      } else {
        const newDone = done;
        newDone.splice(result.destination.index, 0, reorderedItem);
        setDone(newDone);
        localStorage.setItem("done", JSON.stringify(newDone));
        setUpdateTask(items);
      }
    } else {
      if (result.source.droppableId == "done") {
        // form done -> to-do
        const doneItems = Array.from(done);
        const [reorderedDoneItem] = doneItems.splice(result.source.index, 1);
        const newTask = tasks;
        tasks.splice(result.destination.index, 0, reorderedDoneItem);
        setTasks(newTask);
        localStorage.setItem("tasks", JSON.stringify(newTask));
        setUpdateDone(doneItems);
      } else {
        const items = Array.from(updateTask); //from to-do -> to-do
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        setUpdateTask(items);
      }
    }
  };

  useEffect(() => {
    setTasks(updateTask);
    localStorage.setItem("tasks", JSON.stringify(updateTask));
  }, [updateTask]);

  useEffect(() => {
    setDone(updateDone);
    localStorage.setItem("done", JSON.stringify(updateDone));
  }, [updateDone]);
  return (
    <DragDropContext droppableId="to-do" onDragEnd={handleOnDragEnd}>
      <Container>
        <ToDoCol>
          <Droppable droppableId="to-do">
            {(provided) => (
              <Column
                className="to-do"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Title>To-do</Title>
                {isLoanding &&
                  tasks?.map((task, index) => {
                    return (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <Task
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            onClick={(e) => showEditModal(e, index)}
                          >
                            <Text>{task.task}</Text>
                            <DeleteIcon
                              onClick={(e) => handleDelete(e, index)}
                            />
                          </Task>
                        )}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
              </Column>
            )}
          </Droppable>
          <Button onClick={showModal}>
            <PlusIcon />
            <Text>New task</Text>
          </Button>
        </ToDoCol>
        <DoneCol>
          <Droppable droppableId="done">
            {(provided) => (
              <Column
                className="done"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                <Title>Done</Title>
                {done?.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <Task
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Text>{item.task}</Text>
                        </Task>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </Column>
            )}
          </Droppable>
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
    </DragDropContext>
  );
}

export default ToDoList;
