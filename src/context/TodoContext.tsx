import {
	addNewTodo,
	deleteTodo,
	markTodoAsCompleted,
	updateTodo,
} from "@/reducer/action"
import { type Todo, todoReducer } from "../reducer/reducer"
import { type ReactNode, createContext, useReducer, useEffect } from "react"

interface TodoContextType {
	todos: Todo[]
	createNewTodo(data: TodoData): void
	removeTodo(todoId: string): void
	completeTodo(todoId: string): void
	updateTodoTitle(todoId: string, newTitle: string): void
}

interface TodoData {
	title: string
}

interface TodosContextProviderProps {
	children: ReactNode
}
export const TodoContext = createContext({} as TodoContextType)
export function TodoContextProvider({ children }: TodosContextProviderProps) {
	const [todosState, dispatch] = useReducer(
		todoReducer,
		// @ts-ignore
		{ todos: [] },
		(initialState) => {
			const storedTodosJson = localStorage.getItem("@react-todo:todos-list")
			if (storedTodosJson !== null) {
				return JSON.parse(storedTodosJson)
			}
			localStorage.setItem(
				"@react-todo:todos-list",
				JSON.stringify({
					todos: [],
				}),
			)
			return initialState
		},
	)

	const { todos } = todosState

	useEffect(() => {
		localStorage.setItem(
			"@react-todo:todos-list",
			JSON.stringify({ todos: todos }),
		)
	}, [todos])

	function createNewTodo({ title }: TodoData) {
		const id = String(Date.now())
		const todo: Todo = {
			id,
			title,
			isCompleted: false,
		}

		// @ts-ignore
		dispatch(addNewTodo(todo))
	}

	function removeTodo(todoId: string) {
		// @ts-ignore
		dispatch(deleteTodo(todoId))
	}

	function completeTodo(todoId: string) {
		dispatch(markTodoAsCompleted(todoId))
	}

	function updateTodoTitle(todoId: string, newTitle: string): void {
		dispatch(updateTodo(todoId, newTitle))
	}

	return (
		<TodoContext.Provider
			value={{
				todos,
				createNewTodo,
				removeTodo,
				completeTodo,
				updateTodoTitle,
			}}
		>
			{children}
		</TodoContext.Provider>
	)
}
