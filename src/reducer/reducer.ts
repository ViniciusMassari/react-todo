import { ActionTypes } from "./action";
import {produce} from "immer";

export interface Todo {
    id: string;
    isCompleted: boolean;
    title: string;
}

interface TodosState {
    todos: Todo[];
}

export function todoReducer(state: TodosState, action: any) {
    switch(action.type) {
        case ActionTypes.ADD_NEW_TODO:
            return produce(state, (draft) => {
                draft.todos.push(action.payload.todo);                
            });

        case ActionTypes.DELETE_TODO:
            return produce(state, (draft) => {
                draft.todos = draft.todos.filter(todo => todo.id !== action.payload.todoId);
            });
        
        case ActionTypes.MARK_TODO_AS_COMPLETED:
            return produce(state, (draft) =>{
              const todoToBeCompletedIndex =  draft.todos.findIndex((task) => task.id === action.payload.todoId)
                draft.todos[todoToBeCompletedIndex].isCompleted = true
            })

        case ActionTypes.UPDATE_TODO:
             return produce(state, (draft) =>{
              const todoToHaveTitleModified =  draft.todos.findIndex((task) => task.id === action.payload.todoId)
                draft.todos[todoToHaveTitleModified].title = action.payload.newTitle
            })


        default:
            return state;
    }
}
