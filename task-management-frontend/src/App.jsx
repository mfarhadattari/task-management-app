import { useQuery } from "react-query";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import useServer from "./hooks/useServer";
import { Toaster } from 'react-hot-toast'

const App = () => {
  const { serverRequest } = useServer();

  // load all task here
  const {
    data: tasks = [],
    isLoading: isTaskLoading,
    refetch: refechTasks,
  } = useQuery({
    queryKey: ["tasks", serverRequest],
    queryFn: async () => {
      const res = await serverRequest.get("/tasks");
      return res.data;
    },
  });

  return (
    <main className="my-5 d-flex w-100 justify-content-center p-5 gap-5">
      <TaskForm refechTasks={refechTasks} />
      <TaskList
        tasks={tasks}
        isTaskLoading={isTaskLoading}
        refechTasks={refechTasks}
      />
      <Toaster />
    </main>
  );
};

export default App;
