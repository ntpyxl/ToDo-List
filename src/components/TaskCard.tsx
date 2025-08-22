import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

interface TaskCardProps {
    key: number;
    task: string;
    isCompleted: boolean;
    onToggle: (taskName: string) => void;
    onDelete: (taskName: string) => void;
}

function TaskCard({ task, isCompleted, onToggle, onDelete }: TaskCardProps) {
    return (
        <div className="flex justify-between items-center w-[25vw] px-3 py-2 border-2 border-black bg-white shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
            <button
                onClick={() => onToggle(task)}
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
                <button
                    onClick={() => onDelete(task)}
                    className="p-2 cursor-pointer rounded-2xl hover:scale-105 hover:bg-green-300 duration-150"
                >
                    <FaTrash />
                </button>
            </div>
        </div>
    );
}

export default TaskCard;
