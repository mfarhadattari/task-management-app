import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <main className="my-5 d-flex w-100 justify-content-center p-5 gap-5">
      <TaskForm />
      <TaskList />
    </main>
  );
};

export default App;
