import { Input } from "./ui/input";
import { PlusCircle } from "lucide-react";



const CreateTaskForm = () => {
  return (
   <form className="flex flex-1 justify-center items-center gap-3 max-w-[638px] -mt-6  2xs:flex-wrap">
    <Input placeholder="Adicione uma nova tarefa" type="text" className="bg-gray-500 p-4 focus:outline focus:outline-purple placeholder:text-gray-300 text-gray-100"/>
    <button type="submit" className="text-white flex bg-blue-dark p-3 gap-2 rounded-lg hover:bg-blue transition">Criar <PlusCircle color="#fff"/></button>
   </form>
  )
}

export default CreateTaskForm