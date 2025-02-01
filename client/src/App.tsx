import { Stack, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import { useColorModeValue } from "@chakra-ui/color-mode";
import TodoList from "./components/TodoList";

export const BASE_URL = "http://localhost:5000/api"

function App() {
    return (
        <Stack h="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
            <Navbar />
            <Box width={900} mx={"auto"}>
                <TodoForm />
                <TodoList />
            </Box>
        </Stack>
    );
}

export default App;
