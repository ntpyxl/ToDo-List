import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function App() {
    const taskNameTextLength = 112;
    const [taskList, refreshTaskList] = useState([
        "Clean dishes",
        "Organize furniture",
    ]);
    const [taskName, setTaskName] = useState("");

    const addTask = () => {
        if (taskName.trim() === "") return;

        refreshTaskList((prevTaskList) => [...prevTaskList, taskName]);
        setTaskName("");
    };

    return (
        <>
            <div className="flex py-2 justify-center items-center">
                <div className="p-3 space-x-3">
                    <input
                        type="text"
                        id="taskName"
                        name="taskName"
                        placeholder="Type your task here..."
                        value={taskName}
                        maxLength={taskNameTextLength}
                        onChange={(e) => setTaskName(e.target.value)}
                        className="px-3 py-1 border-2 border-black rounded-2xl bg-white focus:outline-none"
                    ></input>
                    <button
                        onClick={() => addTask()}
                        className="px-3 py-1 border-2 border-black rounded-2xl cursor-pointer hover:scale-110 duration-150 bg-green-300"
                    >
                        Add
                    </button>
                    <div className="text-sm text-gray-600 mt-1">
                        {taskName.length} / {taskNameTextLength}
                    </div>
                </div>
            </div>

            <div className="flex flex-col py-2 justify-center items-center space-y-3">
                <h3 className="text-2xl font-semibold">Task Lists</h3>
                {taskList.map((task, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center w-[25vw] px-3 py-1 border-2 border-black bg-white shadow-[0_4px_2px_rgba(0,0,0,0.2)]"
                    >
                        <p className="flex-1 break-all min-w-0">{task}</p>
                        <div className="flex space-x-2">
                            <button className="p-2 cursor-pointer hover:scale-105 duration-150">
                                <FaEdit />
                            </button>
                            <button className="p-2 cursor-pointer hover:scale-105 duration-150">
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
