import React from 'react'
import { NoTasks } from './NoTasks'

const ToDoListContainer = () => {
    const tasks = []
    const quantityStyles = 'bg-gray-400 rounded-full text-white text-sm gap-2 pr-2 pl-2'

  return (
    <section className='mt-16 w-full max-w-3xl'>
        <div className='flex justify-between p-1 border-b-2 min-h-20 border-gray-800 flex-wrap'>
        <div className='flex items-center gap-2'> 
            <p className='text-blue font-bold'>Tarefas Criadas</p>
            <span className={quantityStyles}>0</span>
        </div>
            <div className='flex items-center gap-2'> 
             <p className='text-purple font-bold'>Concluídas</p>
             <span className={quantityStyles}>0</span>
            </div>
        </div>
    {tasks.length === 0 && <NoTasks />}
    </section>
         

  )
}

export default ToDoListContainer