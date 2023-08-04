import { useQuery } from "react-query";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import useServer from "./hooks/useServer";
import { Toaster } from 'react-hot-toast'
import NavBar from "./components/NavBar";

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
    <div>
      <NavBar/>
      <main className="mt-5 d-flex flex-column flex-md-row w-100 justify-content-center p-2 p-md-4  gap-5">
      <TaskForm refechTasks={refechTasks} />
      <TaskList
        tasks={tasks}
        isTaskLoading={isTaskLoading}
        refechTasks={refechTasks}
      />
      <Toaster />
    </main>
    </div>
  );
};

export default App;
