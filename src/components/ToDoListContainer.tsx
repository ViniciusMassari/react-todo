import React from 'react'
import { NoTasks } from './NoTasks'
import { Task } from './Task'
const ToDoListContainer = () => {
    const tasks = [{id:Date.now(), description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum at reprehenderit similique fuga. Fugiat officia", isCompleted:false}]
    const quantityStyles = 'bg-gray-400 rounded-full text-white text-sm gap-2 pr-2 pl-2'

  return (
    <section className='mt-16 w-full max-w-3xl '>
        <div className='flex justify-between p-1  min-h-20  flex-wrap'>
        <div className='flex items-center gap-2'> 
            <p className='text-blue font-bold'>Tarefas Criadas</p>
            <span className={quantityStyles}>0</span>
        </div>
            <div className='flex items-center gap-2'> 
             <p className='text-purple font-bold'>Concluídas</p>
             <span className={quantityStyles}>0</span>
            </div>
        </div>
    {tasks.length === 0 ? <NoTasks />: tasks.map(task =>{
      return <Task key={task.id} description={task.description} isCompleted={task.isCompleted} id={task.id}/>
    })}

    </section>
         

  )
}

export default ToDoListContainer