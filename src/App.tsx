import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import EditTaskModal from "./components/EditTaskModal";

function App() {
    const [taskList, refreshTaskList] = useState([
        { task: "Clean dishes", isCompleted: false },
        { task: "Organize furniture", isCompleted: false },
    ]);

    const [modalState, toggleModalState] = useState(false);
    const [taskNameEdit, changeTaskNameEdit] = useState("");

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

    const editTask = (task: string) => {
        toggleModalState(true);
        changeTaskNameEdit(task);
    };

    const confirmEditTask = (oldTask: string, updatedTask: string) => {
        const isEmpty = updatedTask.trim() === "";
        const isUnchanged = oldTask === updatedTask;
        const isDuplicate = taskList.some(
            ({ task }) => task.toLowerCase() === updatedTask.toLowerCase()
        );

        if (isEmpty || isUnchanged || isDuplicate) return;

        refreshTaskList((prevTaskList) =>
            prevTaskList.map((item) =>
                item.task === oldTask ? { ...item, task: updatedTask } : item
            )
        );

        toggleModalState(false);
    };

    const cancelEditTask = () => {
        toggleModalState(false);
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
                onEdit={editTask}
                onDelete={deleteTask}
            />
            <EditTaskModal
                modalState={modalState}
                taskName={taskNameEdit}
                onConfirm={confirmEditTask}
                onCancel={cancelEditTask}
            />
        </>
    );
}

export default App;
