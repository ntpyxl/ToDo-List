import TaskCard from "./TaskCard";

interface TaskList {
    task: string;
    isCompleted: boolean;
}

interface TaskListProps {
    taskList: TaskList[];
    onToggle: (taskName: string) => void;
    onDelete: (taskName: string) => void;
}

function TaskList({ taskList, onToggle, onDelete }: TaskListProps) {
    return (
        <div className="flex flex-col py-2 justify-center items-center space-y-3">
            <h3 className="text-2xl font-semibold">Task Lists</h3>
            {taskList.map(({ task, isCompleted }, index) => (
                <TaskCard
                    key={index}
                    task={task}
                    isCompleted={isCompleted}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TaskList;
