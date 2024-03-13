import { Check, XCircle } from "lucide-react"
import { Input } from "./ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { TodoContext } from "@/context/TodoContext"

interface EditTaskProps {
	handleIsEditingTask(): void
	todoId: string
}

const newTaskTitleValidationSchema = z.object({
	newTaskTitle: z.string().min(1).trim(),
})

type newTaskTitleType = z.infer<typeof newTaskTitleValidationSchema>

const EditTask = ({ handleIsEditingTask, todoId }: EditTaskProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<newTaskTitleType>({
		resolver: zodResolver(newTaskTitleValidationSchema),
	})

	const { updateTodoTitle } = useContext(TodoContext)

	function handleNewTitleSubmit(data: newTaskTitleType) {
		updateTodoTitle(todoId, data.newTaskTitle)
		handleIsEditingTask()
	}

	return (
		<>
			<div className="flex flex-wrap flex-1 justify-between">
				<Input
					{...register("newTaskTitle")}
					onBlur={handleIsEditingTask}
					className="bg-gray-400 max-w-56 sm:max-w-96  p-4 focus:outline focus:outline-purple placeholder:text-gray-300 text-gray-100 w-96"
				/>
				<div className="flex">
					<Check
						onClick={handleSubmit(handleNewTitleSubmit)}
						type="submit"
						className="self-center text-green-400 hover:cursor-pointer p-1 h-10 w-10"
					/>
					<XCircle
						className="self-center text-danger hover:cursor-pointer p-1 h-10 w-10"
						onClick={handleIsEditingTask}
					/>
				</div>
			</div>
		</>
	)
}

export default EditTask
