import { z } from "zod"
import { Input } from "./ui/input"
import { PlusCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext, useEffect, useState } from "react"
import { TodoContext } from "@/context/TodoContext"

const taskValidationSchema = z.object({
	title: z.string().min(1, "Title needs to have 1 character at least").trim(),
})

type taskFormData = z.infer<typeof taskValidationSchema>

const CreateTaskForm = () => {
	const { createNewTodo, todos } = useContext(TodoContext)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<taskFormData>({
		resolver: zodResolver(taskValidationSchema),
		defaultValues: {
			title: "",
		},
	})
	useEffect(() => {
		if (errors.title?.message) setErrorMessage(errors.title.message)
	}, [errors.title])

	function handleCreateNewTask(data: taskFormData) {
		const title = data.title
		createNewTodo({ title })
		setErrorMessage(null)
		reset()
	}

	return (
		<>
			<form
				className="flex w-full flex-1 justify-center items-center gap-3 max-w-[638px] -mt-6 2xs:flex-col"
				onSubmit={handleSubmit(handleCreateNewTask)}
			>
				<Input
					placeholder="Adicione uma nova tarefa"
					type="text"
					className="bg-gray-500  flex-1 p-4 focus:outline focus:outline-purple placeholder:text-gray-300 text-gray-100"
					onFocus={() => setErrorMessage(null)}
					{...register("title")}
				/>

				<button
					type="submit"
					className="text-white flex bg-blue-dark p-3 gap-2 rounded-lg hover:bg-blue transition"
				>
					Criar <PlusCircle color="#fff" />
				</button>
			</form>
			<span className="text-danger h-8 mt-1">{errorMessage}</span>
		</>
	)
}

export default CreateTaskForm
