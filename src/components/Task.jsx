import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
const TaskItem = styled.div`
  padding: 10px;
  border: 1px solid #333;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.isDragDisabled ? "#aaa" : props.isDragging ? "#a4ff6f" : "#ffffff"};
  display: flex;
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: orange;
  border-radius: 2px;
  margin-right: 10px;
`;

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskItem
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <Handle {...provided.dragHandleProps} />
          {task.task}
        </TaskItem>
      )}
    </Draggable>
  );
};

export default Task;
