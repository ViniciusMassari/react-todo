import CreateTaskForm from "./components/CreateTaskForm"
import Header from "./components/Header"
import ToDoListContainer from "./components/ToDoListContainer"

function App() {
 return (
    <>
    <Header  />
      <main className="bg-gray-700 flex flex-col items-center">    
      <CreateTaskForm />
      <ToDoListContainer />
    </main>
    </>
  
  )
}

export default App
