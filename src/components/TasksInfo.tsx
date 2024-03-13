import { TodoContext } from "@/context/TodoContext"
import React, { useContext } from "react"
const quantityStyles =
	"bg-gray-400 rounded-full text-white text-sm gap-2 pr-2 pl-2"
const TasksInfo = () => {
	const { todos } = useContext(TodoContext)
	const totalOfTasks = todos.length
	const completedTasks = todos.filter((task) => task.isCompleted).length
	return (
		<div className="flex justify-between p-1  min-h-20  flex-wrap">
			<div className="flex items-center gap-2">
				<p className="text-blue font-bold">Tarefas Criadas</p>
				<span className={quantityStyles}>{totalOfTasks}</span>
			</div>
			<div className="flex items-center gap-2">
				<p className="text-purple font-bold">Concluídas</p>
				<span
					className={quantityStyles}
				>{`${completedTasks} de ${totalOfTasks}`}</span>
			</div>
		</div>
	)
}

export default TasksInfo
