import { useQuery } from "react-query";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import useServer from "./hooks/useServer";

const App = () => {
  const { serverRequest } = useServer();

  const { data: tasks = [], isLoading: isTaskLoading } = useQuery({
    queryKey: ["tasks", serverRequest],
    queryFn: async () => {
      const res = await serverRequest.get("/tasks");
      return res.data;
    },
  });

  return (
    <main className="my-5 d-flex w-100 justify-content-center p-5 gap-5">
      <TaskForm />
      <TaskList tasks={tasks} isTaskLoading={isTaskLoading} />
    </main>
  );
};

export default App;
