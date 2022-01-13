import styled from "styled-components";
import Task from "./Task";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  border-radius: 5px;
  border: none;
  display: flex;
  min-width: 350px;
  flex-direction: column;

  background-color: #eee;
`;
const Title = styled.h3`
  padding: 8px;
  text-transform: capitalize;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;
const TaskList = styled.div`
  padding: 8px;
  background-color: ${(props) =>
    props.isDraggingOver ? "skyblue" : "#ffffff"};
  transition: background-color 0.5s;
  flex-grow: 1;
  min-height: 100px;
  border-radius: 5px;
  margin: 10px;
`;

const Column = ({ tasks, column, delTask }) => {
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
                <Task
                  key={task}
                  task={tasks[task]}
                  index={index}
                  delTask={(id) => delTask(id, column.id)}
                />
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
