import { FaCheck, FaPlayCircle, FaTrashAlt } from "react-icons/fa";

const TaskList = () => {
  const tasks = [
    {
      _id: 1,
      title: "Task 1",
      description: "Complete the project proposal",
      status: "progress",
      createdAt: new Date("2023-08-04T09:00:00"),
    },
    {
      _id: 2,
      title: "Task 2",
      description: "Review the code changes",
      status: "completed",
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
      status: "progress",
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
      status: "completed",
      createdAt: new Date("2023-08-01T17:00:00"),
    },
  ];

  return (
    <div className="w-100">
      <ul className="list-group">
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
              <div
                className={`badge text-uppercase ${
                  task?.status === "completed"
                    ? "bg-success"
                    : task?.status === "progress"
                    ? "bg-info "
                    : "bg-warning"
                } `}
              >
                {task.status}
              </div>
              <div className="d-flex  flex-column  gap-2">
                <button
                  title="Delete this task!"
                  type="button"
                  className="bg-danger text-white  tma-circle-btn"
                >
                  <FaTrashAlt />
                </button>
                {task?.status === "progress" ? (
                  <button
                    title="Completed this task!"
                    type="button"
                    className="bg-success text-white  tma-circle-btn"
                  >
                    <FaCheck />
                  </button>
                ) : (
                  <button
                    title="Start this task!"
                    type="button"
                    className="bg-info  text-white  tma-circle-btn fs-4"
                  >
                    <FaPlayCircle />
                  </button>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
