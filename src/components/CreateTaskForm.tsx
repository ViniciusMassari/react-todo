import { z } from "zod"
import { Input } from "./ui/input"
import { PlusCircle } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { TodoContext } from "@/context/TodoContext"

const taskValidationSchema = z.object({
	title: z.string().min(1, "Title needs to have 1 character at least").trim(),
})

type taskFormData = z.infer<typeof taskValidationSchema>

const CreateTaskForm = () => {
	let clearErrorsId: ReturnType<typeof setTimeout>
	const { createNewTodo, todos } = useContext(TodoContext)
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		clearErrors,
	} = useForm<taskFormData>({
		resolver: zodResolver(taskValidationSchema),
		defaultValues: {
			title: "",
		},
	})

	function handleCreateNewTask(data: taskFormData) {
		const title = data.title
		createNewTodo({ title })
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
					onFocus={() => {
						if (clearErrorsId) {
							clearTimeout(clearErrorsId)
						}
						clearErrorsId = setTimeout(() => {
							clearErrors()
						}, 2000)
					}}
					{...register("title")}
				/>

				<button
					type="submit"
					className="text-white flex bg-blue-dark p-3 gap-2 rounded-lg hover:bg-blue transition"
				>
					Criar <PlusCircle color="#fff" />
				</button>
			</form>
			<span className="text-danger h-8 mt-1">{errors.title?.message}</span>
		</>
	)
}

export default CreateTaskForm
