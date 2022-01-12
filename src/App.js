import { useState, useEffect } from "react";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Form from "./components/Form";
import {
  // postStatus,
  postTask,
  getStatus,
  arryToObj,
  getTasks,
  editStatus,
  delTask,
} from "./servesis/serverApi";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const App = () => {
  const [mainState, setMainState] = useState(null);
  const [statusList, setStatusList] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  const services = async () => {
    const status = await getStatus();
    const tasks = await getTasks();

    setStatusList(status);
    updateState(tasks, status);
  };

  useEffect(() => {
    setIsUpdated(false);
    services();
  }, [isUpdated]);

  const statusPost = async (formVal) => {
    const isExest = await statusList.find(
      (item) => item.title === formVal.title
    );
    if (!isExest) {
      // const res = await postStatus(formVal.title);
      // taskPost(res.data, formVal);
      // return;
      alert("there is bo table with this name");
    }
    taskPost(isExest, formVal);
  };

  const taskPost = async (datas, formVal) => {
    await postTask(formVal.task, datas.id);
  };

  const updateState = async (tasks, status) => {
    const columns = status.map((item) => {
      const ids = tasks
        .filter((task) => task.StatusId === item.id)
        .map((each) => each.id);
      return { ...item, taskIds: ids };
    });
    const objColumns = arryToObj(columns, "id");
    const objTasks = arryToObj(tasks, "id");

    const state = {
      columns: objColumns,
      tasks: objTasks,
    };
    setMainState(state);
  };

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
    if (destination.droppableId === "4") {
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = { ...start, taskIds: startTaskIds };
      const newState = {
        ...mainState,
        columns: {
          ...mainState.columns,
          [newStart.id]: newStart,
        },
      };
      setMainState(newState);
      delTask(draggableId);
      return;
    }
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

  return (
    <>
      <Form statusPost={statusPost} setIsUpdated={setIsUpdated} />
      {mainState && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Container>
            {statusList.map((column) => {
              return (
                <Column
                  key={column.id}
                  column={mainState.columns[column.id]}
                  tasks={mainState.tasks}
                />
              );
            })}
          </Container>
        </DragDropContext>
      )}
    </>
  );
};

export default App;
