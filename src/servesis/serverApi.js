import axios from "axios";

export const arryToObj = (arr, key) => {
  return arr.reduce((acc, curr) => ((acc[curr[key]] = curr), acc), {});
};

export const getStatus = async () => {
  const res = await axios({
    url: "http://localhost:3333/status/list",
    method: "GET",
  });

  return res.data.map((item) => ({ ...item, id: String(item.id) }));
};

export const getTasks = async () => {
  const res = await axios({
    url: "http://localhost:3333/tasks/list",
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
    url: "http://localhost:3333/tasks",
    method: "POST",
    data: { task, StatusId },
  });
};

export const postStatus = async (title) => {
  return await axios({
    url: "http://localhost:3333/status",
    method: "POST",
    data: { title },
  });
};
export const editStatus = async (id, StatusId) => {
  await axios({
    url: `http://localhost:3333/tasks/${id}/editstatus`,
    method: "PUT",
    data: { StatusId },
  });
};
export const delTask = async (id) => {
  await axios({
    url: `http://localhost:3333/tasks/${id}/delete`,
    method: "DELETE",
  });
};
