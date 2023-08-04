import { FaCheck, FaPlayCircle, FaTrashAlt } from "react-icons/fa";
import Loaders from "./Loaders";
import NoData from "./NoData";

const TaskList = ({ tasks, isTaskLoading }) => {
  return (
    <div className="w-100">
      {isTaskLoading ? (
        <div>
          <Loaders />
        </div>
      ) : tasks?.length <= 0 ? (
        <div>
          <NoData />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default TaskList;
