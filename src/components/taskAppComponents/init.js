const init = {
  tasks: {
    "task-1": { id: "task-1", content: "take out the garbage 1" },
    "task-2": { id: "task-2", content: "take out the garbage 2" },
    "task-3": { id: "task-3", content: "take out the garbage 3" },
    "task-4": { id: "task-4", content: "take out the garbage 4" },
    "task-5": { id: "task-5", content: "take out the garbage 5" },
    "task-6": { id: "task-6", content: "take out the garbage 6" },
  },
  columns: {
    "to do": {
      id: "1",
      title: "to do",
      taskIds: ["task-1", "task-2", "task-4", "task-6"],
    },
    "in progress": {
      id: "2",
      title: "in progress",
      taskIds: ["task-3", "task-5"],
    },
    done: {
      id: "3",
      title: "done",
      taskIds: [],
    },
  },
  columnOrder: ["to do", "in progress", "done"],
};
export default init;
