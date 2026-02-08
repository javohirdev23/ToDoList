import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { delay } from "framer-motion";
export default function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("todo-tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(tasks));
  }, [tasks]);
  function handleInputChange(evt) {
    setNewTask(evt.target.value);
    console.log(evt.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") return;
    setTasks((t) => [...t, newTask]);
    setNewTask("");
  }

  function editTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = prompt(updatedTasks[index]);
    setTasks(updatedTasks);
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);

    setTimeout(() => {
      setTasks(updatedTasks);
    });
  }

  return (
    <>
      <div className=" w-90 mx-auto felx flex-col bg-gray-500/20 rounded-2xl backdrop-blur-md mt-20 sm:w-100 ">
        <div className="p-5 pb-40 flex flex-col justify-center ">
          <h1 className="text-black font-bold text-2xl flex justify-center pb-10 dark:text-white ">
            ToDo List
          </h1>
          <div className=" flex gap-3">
            <input
              className="border border-gray-500 rounded-2xl p-2  w-90 "
              type="text"
              placeholder="Mashxulotni kiriting..."
              value={newTask}
              onChange={handleInputChange}
            />
            <button
              className="p-1 pl-5 pr-5 text-white font-bold bg-blue-400 rounded-2xl"
              onClick={addTask}
            >
              Add
            </button>
          </div>
          <ul className="flex flex-col gap-3 pt-6">
            {tasks.map((element, index) => (
              <li
                key={index}
                className="w-full flex items-center justify-between bg-white/70 backdrop-blur-md rounded-xl px-4 py-3 shadow-sm "
              >
                <span className="text-gray-800 font-medium dark:text-gray-500">
                  {element}
                </span>

                <div className="flex gap-2">
                  <button
                    className="px-3 py-1 text-sm bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
                    onClick={() => editTask(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 text-sm bg-red-400 text-white rounded-lg hover:bg-red-500 transition"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-100 mx-auto  flex justify-center mt-25 text-blue-300  text-bold text-[18px]">
        <h3>by Javohirweb</h3>
      
      </div>
    </>
  );
}
