import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

import { Meteors } from "@/components/ui/meteors";

import ToDoList from "./toDoList";
function App() {
  return (
    <>
      <ToDoList />
      <Meteors />
      <div className="fixed bottom-5 right-5">
        <AnimatedThemeToggler />
      </div>
      <div className="fixed bottom-10 right-10"></div>
    </>
  );
}

export default App;
