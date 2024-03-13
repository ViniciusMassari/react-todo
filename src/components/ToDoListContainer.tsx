import { useContext, useEffect, useState } from "react"
import { Reorder, AnimatePresence } from "framer-motion"
import { NoTasks } from "./NoTasks"
import { Task } from "./Task"
import { TodoContext } from "@/context/TodoContext"
import TasksInfo from "./TasksInfo"
const ToDoListContainer = () => {
	const { todos } = useContext(TodoContext)
	const [tasks, setTasks] = useState(todos)

	// biome-ignore lint/correctness/useExhaustiveDependencies: The tasks dependency cause framer motion Reoder to dont work correctly
	useEffect(() => {
		localStorage.setItem(
			"@react-todo:todos-list",
			JSON.stringify({ todos: tasks }),
		)
		setTasks(todos)
	}, [todos])

	return (
		<section className="mt-14 w-full max-w-3xl ">
			<TasksInfo />
			{tasks.length === 0 ? (
				<NoTasks />
			) : (
				<Reorder.Group
					translate="no"
					axis="y"
					style={{ height: "300px", overflowY: "auto" }}
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
