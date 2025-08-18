import { useState } from "react";

function App() {
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
            <div>
                <h3 className="text-4xl font-semibold">To-Do List</h3>
            </div>
            <div className="p-3">
                <input
                    type="text"
                    id="taskName"
                    name="taskName"
                    placeholder="Type your task here..."
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="px-2 py-1 border-2 border-black"
                ></input>
                <button
                    onClick={() => addTask()}
                    className="px-3 py-1 border-2 border-black cursor-pointer hover:scale-105"
                >
                    Add
                </button>
            </div>

            <div>
                <h3>Task Lists</h3>
                {taskList.map((task, index) => (
                    <div key={index} className="border-2 border-black">
                        {task}
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
