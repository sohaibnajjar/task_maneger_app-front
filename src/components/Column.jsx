import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 10px;
  border: 1px solid #aaa;
  border-radius: 5px;
  display: flex;
  min-width: 250px;
  flex-direction: column;
  background-color: #fff;
`;
const Title = styled.h3`
  padding: 8px;
  text-transform: capitalize;
  text-align: center;
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) =>
    props.isDraggingOver ? "skyblue" : "#0370b9"};
  transition: background-color 0.5s;
  flex-grow: 1;
  min-height: 100px;
`;

const Column = ({ tasks, column }) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {column.taskIds.length ? (
              column.taskIds.map((task, index) => (
                <Task key={task} task={tasks[task]} index={index} />
              ))
            ) : (
              <div style={{ color: "#fff", textAlign: "center" }}>
                {column.id === "4" ? "" : "there is no tasks here"}
              </div>
            )}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
