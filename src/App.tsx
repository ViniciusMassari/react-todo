import CreateTaskForm from "./components/CreateTaskForm"
import Header from "./components/Header"

function App() {

  return (
    <>
    <Header  />
      <main className=" bg-gray-700 flex justify-center">
      <CreateTaskForm />
    </main>
    </>
  
  )
}

export default App
