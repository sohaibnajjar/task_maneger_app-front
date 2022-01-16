import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { DragHandleIcon } from "@chakra-ui/icons";
import DeleteConfirm from "./DeleteConfirm";
const TaskItem = styled.div`
  padding: 10px;
  border: 1px solid #333;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.isDragDisabled ? "#aaa" : props.isDragging ? "#a4ff6f" : "#ffffff"};
  display: flex;
  transition: 2s;
`;

const DragIcon = styled.div`
  margin-right: 10px;
  background-color: transparent;
  border: none;
`;

const Task = ({ task, index, delTask }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <TaskItem
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <DragIcon {...provided.dragHandleProps}>
            <DragHandleIcon />
          </DragIcon>
          {task.task}

          <DeleteConfirm delTask={delTask} task={task} />
        </TaskItem>
      )}
    </Draggable>
  );
};

export default Task;
