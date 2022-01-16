import { postTask, arryToObj } from "./serverApi";

export const taskPost = async (formVal) => {
  await postTask(formVal.task);
};

export const updateState = async (tasks, status) => {
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
  return state;
};
