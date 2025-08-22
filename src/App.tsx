import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
    const [taskList, refreshTaskList] = useState([
        { task: "Clean dishes", isCompleted: false },
        { task: "Organize furniture", isCompleted: false },
    ]);

    const addTask = (taskName: string) => {
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

    const deleteTask = (task: string) => {
        const updatedTaskList = taskList.filter((item) => item.task !== task);
        refreshTaskList(updatedTaskList);
    };

    return (
        <>
            <AddTask onAdd={addTask} />
            <TaskList
                taskList={taskList}
                onToggle={taskStatusToggle}
                onDelete={deleteTask}
            />
        </>
    );
}

export default App;
