import { useState } from "react";
import { Button, Flex, Input, Spinner } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import { useColorModeValue } from "./ui/color-mode";

export default function TodoForm() {
    const [newTodo, setNewTodo] = useState("");
    const [isPending, setIsPending] = useState(false);
    const createTodo = async (e: React.FormEvent) => {
        e.preventDefault();
        alert("Todo added!");
    };
    return (
        <form onSubmit={createTodo}>
            <Flex gap={2}>
                <Input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    ref={(input) => input && input.focus()}
                    color={useColorModeValue("white", "black")}
                />
                <Button>
                    {isPending ? (
                        <Spinner size={"xs"} />
                    ) : (
                        <IoMdAdd size={30} />
                    )}
                </Button>
            </Flex>
        </form>
    );
}
