import { FaCheck, FaTrashAlt } from "react-icons/fa";

const TaskList = () => {
  const tasks = [
    {
      _id: 1,
      title: "Task 1",
      description: "Complete the project proposal",
      status: "In Progress",
      createdAt: new Date("2023-08-04T09:00:00"),
    },
    {
      _id: 2,
      title: "Task 2",
      description: "Review the code changes",
      status: "Completed",
      createdAt: new Date("2023-08-03T15:30:00"),
    },
    {
      _id: 3,
      title: "Task 3",
      description: "Prepare presentation slides",
      status: "To Do",
      createdAt: new Date("2023-08-02T11:45:00"),
    },
    {
      _id: 4,
      title: "Task 4",
      description: "Test the new feature",
      status: "In Progress",
      createdAt: new Date("2023-08-04T14:20:00"),
    },
    {
      _id: 5,
      title: "Task 5",
      description: "Fix bugs reported by QA",
      status: "To Do",
      createdAt: new Date("2023-08-03T09:10:00"),
    },
    {
      _id: 6,
      title: "Task 6",
      description: "Write documentation",
      status: "Completed",
      createdAt: new Date("2023-08-01T17:00:00"),
    },
  ];

  return (
    <div className="w-100">
      <ol className="list-group list-group-numbered">
        {tasks.map((task) => (
          <li
            key={task._id}
            className="list-group-item d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{task.title}</div>
              <p>{task.description}</p>
            </div>
            <div className="d-flex flex-column align-items-end gap-3">
              <div className="badge bg-primary">{task.status}</div>
              <div className="d-flex  flex-column  gap-2">
                <button
                  type="button"
                  className="bg-danger text-white  tma-circle-btn"
                >
                  <FaTrashAlt />
                </button>
                <button
                  type="button"
                  className="bg-success text-white  tma-circle-btn"
                >
                  <FaCheck />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TaskList;
