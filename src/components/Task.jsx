import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { DeleteIcon, DragHandleIcon } from "@chakra-ui/icons";

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
const Button = styled.button`
  margin-left: auto;
  background-color: transparent;
  border: none;
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
          <Button onClick={() => delTask(task.id)}>
            <DeleteIcon w={5} h={5} color={"#ff3737"} cursor={"pointer"} />
          </Button>
        </TaskItem>
      )}
    </Draggable>
  );
};

export default Task;
