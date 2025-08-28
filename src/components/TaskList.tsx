import TaskCard from "./TaskCard";

interface TaskList {
    task: string;
    isCompleted: boolean;
}

interface TaskListProps {
    taskList: TaskList[];
    onToggle: (taskName: string) => void;
    onEdit: (taskName: string) => void;
    onDelete: (taskName: string) => void;
}

function TaskList({ taskList, onToggle, onEdit, onDelete }: TaskListProps) {
    return (
        <div className="flex flex-col py-2 justify-center items-center space-y-3">
            {taskList.map(({ task, isCompleted }, index) => (
                <TaskCard
                    key={index}
                    task={task}
                    isCompleted={isCompleted}
                    onToggle={onToggle}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TaskList;
