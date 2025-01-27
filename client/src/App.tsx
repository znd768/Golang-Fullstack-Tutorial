import { Stack, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import { useColorModeValue } from "@chakra-ui/color-mode";

function App() {
    return (
        <Stack h="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
            <Navbar />
            <Box width={900} mx={"auto"}>
                <TodoForm />
            </Box>
        </Stack>
    );
}

export default App;
