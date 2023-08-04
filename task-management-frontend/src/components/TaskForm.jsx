import { useFormik } from "formik";
import * as Yup from "yup";
import useServer from "../hooks/useServer";
import toast from "react-hot-toast";

const TaskForm = ({ refechTasks }) => {
  const { serverRequest } = useServer();
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const taskInfo = {
        title: values.title,
        description: values.description,
        status: "todo",
      };
      serverRequest.post("/add-task", taskInfo).then(({ data }) => {
        if (data.status === 200) {
          toast.success(data.message);
          refechTasks();
          resetForm();
        } else {
          toast.error("Someting went wrong!");
        }
      });
    },
  });

  return (
    <div className="w-100">
      <form
        className="mx-auto p-3 rounded-2 border"
        onSubmit={formik.handleSubmit}
      >
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
            className={`form-control ${
              formik.touched.description && formik.errors.description
                ? "is-invalid"
                : ""
            }`}
            onChange={formik.handleChange}
            value={formik.values.title}
            onBlur={formik.handleBlur}
          />
          {formik.errors.title && (
            <div className="invalid-feedback">{formik.errors.title}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            className={`form-control ${
              formik.touched.description && formik.errors.description
                ? "is-invalid"
                : ""
            }`}
            onChange={formik.handleChange}
            value={formik.values.description}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.errors.description && (
            <div className="invalid-feedback">{formik.errors.description}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
