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
            <div className="flex py-2 justify-center items-center">
                <div className="p-3 space-x-3">
                    <input
                        type="text"
                        id="taskName"
                        name="taskName"
                        placeholder="Type your task here..."
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        className="px-3 py-1 border-2 border-black rounded-2xl bg-white focus:outline-none"
                    ></input>
                    <button
                        onClick={() => addTask()}
                        className="px-3 py-1 border-2 border-black rounded-2xl cursor-pointer hover:scale-110 duration-150 bg-green-300"
                    >
                        Add
                    </button>
                </div>
            </div>

            <div className="flex flex-col py-2 justify-center items-center space-y-3">
                <h3 className="text-2xl font-semibold">Task Lists</h3>
                {taskList.map((task, index) => (
                    <div
                        key={index}
                        className="w-[25vw] px-3 py-1 border-2 border-black bg-white shadow-[0_4px_2px_rgba(0,0,0,0.2)]"
                    >
                        <p>{task}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
