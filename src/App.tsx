import { useState } from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

function App() {
    const taskNameTextLength = 76;
    const [taskList, refreshTaskList] = useState([
        { task: "Clean dishes", isCompleted: false },
        { task: "Organize furniture", isCompleted: false },
    ]);
    const [taskName, setTaskName] = useState("");

    const addTask = () => {
        if (taskName.trim() === "")
            return; /* TODO: Add notification response */

        const isDuplicate = taskList.some(
            ({ task }) => task.toLowerCase() === taskName.toLowerCase()
        );
        if (isDuplicate) return; /* TODO: Add notification response */

        refreshTaskList((prevTaskList) => [
            ...prevTaskList,
            { task: taskName, isCompleted: false },
        ]);
        setTaskName("");
    };

    const taskStatusToggle = (task: string) => {
        refreshTaskList((prevTaskList) =>
            prevTaskList.map((item) =>
                item.task === task
                    ? { ...item, isCompleted: !item.isCompleted }
                    : item
            )
        );
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

                    <div className="ml-2 text-sm text-gray-600">
                        {taskName.length} / {taskNameTextLength}
                    </div>
                </div>
            </div>

            <div className="flex flex-col py-2 justify-center items-center space-y-3">
                <h3 className="text-2xl font-semibold">Task Lists</h3>
                {taskList.map(({ task, isCompleted }, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center w-[25vw] px-3 py-2 border-2 border-black bg-white shadow-[0_4px_2px_rgba(0,0,0,0.2)]"
                    >
                        <button
                            onClick={() => taskStatusToggle(task)}
                            className="p-2 cursor-pointer rounded-2xl hover:scale-105 hover:bg-green-300 duration-150"
                        >
                            <FaCheck />
                        </button>
                        <p
                            className={`min-w-0 flex-1 ml-4 mr-2 [overflow-wrap:anywhere] ${
                                isCompleted ? "line-through text-gray-500" : ""
                            }`}
                        >
                            {task}
                        </p>
                        <div className="flex space-x-2">
                            <button className="p-2 cursor-pointer rounded-2xl hover:scale-105 hover:bg-green-300 duration-150">
                                <FaEdit />
                            </button>
                            <button className="p-2 cursor-pointer rounded-2xl hover:scale-105 hover:bg-green-300 duration-150">
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
