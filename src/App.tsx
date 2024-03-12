import CreateTaskForm from "./components/CreateTaskForm"
import Header from "./components/Header"
import ToDoListContainer from "./components/ToDoListContainer"
import { TodoContextProvider } from "./context/TodoContext"

function App() {
	return (
		<>
			<Header />
			<TodoContextProvider>
				<main className="bg-gray-700 flex flex-col items-center">
					<CreateTaskForm />

					<ToDoListContainer />
				</main>
			</TodoContextProvider>
		</>
	)
}

export default App
