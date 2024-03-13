import { Check, Pencil, Trash2 } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { useContext, useState } from "react"
import { TodoContext } from "@/context/TodoContext"
import EditTask from "./EditTaskForm"

interface TaskProps {
	id: string
	title: string
	isCompleted: boolean
}

export const Task = ({ title, id, isCompleted }: TaskProps) => {
	const { removeTodo, completeTodo } = useContext(TodoContext)
	const [isEditingTask, setIsEditingTask] = useState(false)
	function handleIsEditingTask() {
		setIsEditingTask(!isEditingTask)
	}

	function handleDeleteTodo() {
		removeTodo(id)
	}

	function handleMarkTodoAsCompleted() {
		completeTodo(id)
	}

	return (
		<div className="flex flex-wrap bg-gray-500 p-4 gap-3 rounded-md hover:cursor-grab mb-3 ">
			{isEditingTask ? (
				<EditTask
					handleIsEditingTask={handleIsEditingTask}
					taskTitle={title}
					todoId={id}
				/>
			) : (
				<>
					<Checkbox
						disabled={isCompleted}
						onClick={handleMarkTodoAsCompleted}
						checked={isCompleted}
					/>
					<div className="flex-1">
						<p
							className={`text-gray-100 text-wrap ${
								isCompleted && "line-through text-gray-300"
							}`}
						>
							{title}
						</p>
					</div>
					<Trash2
						onClick={handleDeleteTodo}
						className="text-gray-300 w-7 h-7 p-1 bg-transparent rounded-md  hover:text-danger hover:bg-gray-400 transition cursor-pointer"
					/>
					{!isCompleted && (
						<Pencil
							onClick={handleIsEditingTask}
							className="text-gray-300 w-7 h-7 p-1 bg-transparent rounded-md  hover:text-gray-100 hover:bg-gray-400 transition cursor-pointer"
						/>
					)}
				</>
			)}
		</div>
	)
}
