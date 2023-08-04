const TaskForm = () => {
  return (
    <form className="mx-auto p-3 rounded-2 border " style={{ width: "300px" }}>
      <h2 className="fs-4 text-center text-uppercase ">Add Task</h2>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          className="form-control"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
