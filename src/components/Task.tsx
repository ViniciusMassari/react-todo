import { Trash2 } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

interface TaskProps {
	id: string
	title: string
	isCompleted: boolean
}

export const Task = ({ title, id, isCompleted }: TaskProps) => {
	return (
		<div className="flex bg-gray-500 p-4 gap-3 rounded-md hover:cursor-grab mb-3">
			<Checkbox />
			<div className="flex-1">
				<p
					className={`text-gray-100 text-wrap ${
						isCompleted && "line-through text-gray-300"
					}`}
				>
					{title}
				</p>
			</div>
			<Trash2 className="text-gray-300 w-7 h-7 p-1 bg-transparent rounded-md  hover:text-danger hover:bg-gray-400 transition cursor-pointer" />
		</div>
	)
}
