import { useState } from "react";

interface AddTaskProps {
    onAdd: (taskName: string) => void;
}

function AddTask({ onAdd }: AddTaskProps) {
    const taskNameTextLength = 76;
    const [taskName, setTaskName] = useState("");

    const handleAddTask = () => {
        onAdd(taskName);
        setTaskName("");
    };

    return (
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
                    onClick={handleAddTask}
                    className="px-3 py-1 border-2 border-black rounded-2xl cursor-pointer hover:scale-110 duration-150 bg-green-300"
                >
                    Add
                </button>

                <div className="ml-2 text-sm text-gray-600">
                    {taskName.length} / {taskNameTextLength}
                </div>
            </div>
        </div>
    );
}

export default AddTask;
