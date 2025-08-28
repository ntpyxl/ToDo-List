import { useState } from "react";

interface EditTaskModalProps {
    modalState: boolean;
    taskName: string;
    onConfirm: (oldTask: string, updatedTask: string) => void;
    onCancel: () => void;
}

function EditTaskModal({
    modalState,
    taskName,
    onConfirm,
    onCancel,
}: EditTaskModalProps) {
    const [updatedTask, setUpdatedTask] = useState(taskName);

    if (!modalState) return null;

    return (
        <div className="flex fixed inset-0 z-50 items-center justify-center bg-black/80">
            <div className="relative w-[400px] px-5 py-3 rounded-2xl shadow-lg bg-white">
                <h3 className="pb-2 text-center text-2xl font-semibold">
                    Edit Task
                </h3>
                <input
                    type="text"
                    className="w-full px-3 py-1 border-2 border-black rounded-2xl bg-white focus:outline-none"
                    defaultValue={taskName}
                    onChange={(e) => setUpdatedTask(e.target.value)}
                    required
                ></input>

                <div className="flex py-2 space-x-2 justify-end">
                    <button
                        onClick={() => onConfirm(taskName, updatedTask)}
                        className="px-3 py-1 border-2 border-black rounded-2xl cursor-pointer hover:scale-110 duration-150 bg-green-300"
                    >
                        Edit
                    </button>
                    <button
                        onClick={onCancel}
                        className="px-3 py-1 border-2 border-black rounded-2xl cursor-pointer hover:scale-110 duration-150 bg-red-400"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditTaskModal;
