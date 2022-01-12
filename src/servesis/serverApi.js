import axios from "axios";

export const arryToObj = (arr, key) => {
  return arr.reduce((acc, curr) => ((acc[curr[key]] = curr), acc), {});
};

export const getStatus = async () => {
  const res = await axios({
    url: "https://task-maneger-app-back.herokuapp.com/status/list",
    method: "GET",
  });

  return res.data.map((item) => ({ ...item, id: String(item.id) }));
};

export const getTasks = async () => {
  const res = await axios({
    url: "https://task-maneger-app-back.herokuapp.com/tasks/list",
    method: "GET",
  });
  if (!res.data.msg) {
    return res.data.map((item) => ({
      ...item,
      id: String(item.id),
      StatusId: String(item.StatusId),
    }));
  }
  return [];
};

export const postTask = async (task, StatusId) => {
  await axios({
    url: "https://task-maneger-app-back.herokuapp.com/tasks",
    method: "POST",
    data: { task, StatusId },
  });
};

export const postStatus = async (title) => {
  return await axios({
    url: "https://task-maneger-app-back.herokuapp.com/status",
    method: "POST",
    data: { title },
  });
};
export const editStatus = async (id, StatusId) => {
  await axios({
    url: `https://task-maneger-app-back.herokuapp.com/tasks/${id}/editstatus`,
    method: "PUT",
    data: { StatusId },
  });
};
export const delTask = async (id) => {
  await axios({
    url: `https://task-maneger-app-back.herokuapp.com/tasks/${id}/delete`,
    method: "DELETE",
  });
};
