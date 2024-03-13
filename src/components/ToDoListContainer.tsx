import { useContext, useEffect, useState } from "react"
import { Reorder, AnimatePresence } from "framer-motion"
import { NoTasks } from "./NoTasks"
import { Task } from "./Task"
import { TodoContext } from "@/context/TodoContext"
const ToDoListContainer = () => {
	const { todos } = useContext(TodoContext)
	const [tasks, setTasks] = useState(todos)

	// biome-ignore lint/correctness/useExhaustiveDependencies: The dependencie cause framer motion reoder to dont work correctly
	useEffect(() => {
		localStorage.setItem(
			"@react-todo:todos-list",
			JSON.stringify({ todos: tasks }),
		)
		setTasks(todos)
	}, [todos])

	const quantityStyles =
		"bg-gray-400 rounded-full text-white text-sm gap-2 pr-2 pl-2"

	return (
		<section className="mt-14 w-full max-w-3xl ">
			<div className="flex justify-between p-1  min-h-20  flex-wrap">
				<div className="flex items-center gap-2">
					<p className="text-blue font-bold">Tarefas Criadas</p>
					<span className={quantityStyles}>0</span>
				</div>
				<div className="flex items-center gap-2">
					<p className="text-purple font-bold">Concluídas</p>
					<span className={quantityStyles}>0</span>
				</div>
			</div>
			{tasks.length === 0 ? (
				<NoTasks />
			) : (
				<Reorder.Group
					translate="no"
					axis="y"
					style={{ overflowY: "scroll" }}
					values={tasks}
					onReorder={(newOrder) => {
						localStorage.setItem(
							"@react-todo:todos-list",
							JSON.stringify({ todos: newOrder }),
						)
						setTasks(newOrder)
						return newOrder
					}}
				>
					<AnimatePresence>
						{tasks.map((task) => (
							<Reorder.Item
								key={task.id}
								value={task}
								whileDrag={{
									opacity: 0.5,
								}}
							>
								<Task
									title={task.title}
									isCompleted={task.isCompleted}
									id={task.id}
								/>
							</Reorder.Item>
						))}
					</AnimatePresence>
				</Reorder.Group>
			)}
		</section>
	)
}

export default ToDoListContainer
