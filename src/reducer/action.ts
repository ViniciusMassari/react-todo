import type { Todo } from "./reducer";

export enum ActionTypes{
    ADD_NEW_TODO= 'ADD_NEW_TODO',
    DELETE_TODO= 'DELETE_TODO',
    MARK_TODO_AS_COMPLETED= 'MARK_TODO_AS_COMPLETED',
    UPDATE_TODO= 'UPDATE_TODO'
}

export function addNewTodo(todo:Todo){
    return {
        type: ActionTypes.ADD_NEW_TODO,
        payload:{
            todo
        }
    }
}

export function deleteTodo(todoId:string){
    return {
        type: ActionTypes.DELETE_TODO,
        payload:{
            todoId
        }
    }
}

export function markTodoAsCompleted(todoId:string){
      return {
        type: ActionTypes.MARK_TODO_AS_COMPLETED,
        payload:{
            todoId
        }
    }
}

export function updateTodo(todoId:string){

    return{
        type: ActionTypes.UPDATE_TODO,
        payload:{
            todoId
        }
    }
}