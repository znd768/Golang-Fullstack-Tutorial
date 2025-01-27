import { Stack } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'

function App() {
  return (
    <Stack h="100vh">
      <Navbar/>
      <TodoForm />
    </Stack>
  )
}

export default App
