import { ClipBoard } from "@/assets/ClipBoard"
import { ClipboardList } from "lucide-react"

export const NoTasks = () => {
  return (
    <div className="text-white flex justify-center 
    items-center flex-col text-center">
      <ClipBoard  className="mt-16 mb-4"/>
      <p className="font-bold text-gray-300">Você ainda não tem tarefas cadastradas
</p>
<p className="text-gray-300">Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}

