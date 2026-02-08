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
                className="w-full flex items-center justify-between bg-white/70 backdrop-blur-md rounded-xl px-4 py-3 shadow-sm dark:bg-gray-700 "
              >
                <span className="text-gray-800 font-medium dark:text-white">
                  {element}
                </span>

                <div className="flex gap-2">
                  <button
                    className="px-2 py-1 text-sm flex items-center gap-1 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition"
                    onClick={() => editTask(index)}
                  >
                    <span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></span>
                    Edit
                  </button>
                  <button
                    className="px-2 py-1 text-sm flex items-center bg-red-400 text-white rounded-lg hover:bg-red-500 transition"
                    onClick={() => deleteTask(index)}
                  >
                   <span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    </span> Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
 
    </>
  );
}
