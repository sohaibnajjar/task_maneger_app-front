import { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Column from "../taskAppComponents/Column";
import {
  getStatus,
  getTasks,
  editStatus,
  delTask,
} from "../taskAppServesis/serverApi";
import Modal from "../taskAppComponents/Modal";
import { updateState } from "../taskAppServesis/DataManipulation";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  min-width: 100vw;
  min-height: 100vh;
  background-image: url("https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 30px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const TaskApp = () => {
  const [mainState, setMainState] = useState(null);
  const [statusList, setStatusList] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  const services = async () => {
    const status = await getStatus();
    const tasks = await getTasks();
    const newState = await updateState(tasks, status);
    setStatusList(status);
    setMainState(newState);
  };

  useEffect(() => {
    setIsUpdated(false);
    services();
  }, [isUpdated]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const start = mainState.columns[source.droppableId];
    const end = mainState.columns[destination.droppableId];

    if (start === end) return;

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = { ...start, taskIds: startTaskIds };

    const endTaskIds = Array.from(end.taskIds);
    endTaskIds.splice(destination.index, 0, draggableId);
    const newEnd = { ...end, taskIds: endTaskIds };

    const newState = {
      ...mainState,
      columns: {
        ...mainState.columns,
        [newStart.id]: newStart,
        [newEnd.id]: newEnd,
      },
    };
    setMainState(newState);
    editStatus(draggableId, destination.droppableId);

    return;
  };

  const deleteTask = (taskId, columnId) => {
    const location = mainState.columns[columnId];
    const neededArry = location.taskIds.filter((item) => item !== taskId);

    const newStart = { ...location, taskIds: neededArry };
    const newState = {
      ...mainState,
      columns: {
        ...mainState.columns,
        [newStart.id]: newStart,
      },
    };
    setMainState(newState);
    delTask(taskId);
    return;
  };
  return (
    <MainContainer>
      {mainState && (
        <DragDropContext onDragEnd={onDragEnd}>
          <ColumnContainer>
            {statusList.map((column) => {
              return (
                <Column
                  key={column.id}
                  column={mainState.columns[column.id]}
                  tasks={mainState.tasks}
                  delTask={deleteTask}
                />
              );
            })}
          </ColumnContainer>
        </DragDropContext>
      )}
      <Modal setIsUpdated={setIsUpdated} />
    </MainContainer>
  );
};

export default TaskApp;
