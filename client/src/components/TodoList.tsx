import { useState } from "react";
import { Flex, Spinner, Stack, Text } from "@chakra-ui/react";
import TodoItem from "./TodoItem";

export type Todo = {
    _id: number;
    body: string;
    completed: boolean;
}

export default function TodoList() {
    const [isLoading, setIsLoading] = useState(true);
    const todos = [
        {
            _id: 1,
            body: "go out",
            completed: false,
        },
        {
            _id: 2,
            body: "eat breakfast",
            completed: true,
        },
        {
            _id: 3,
            body: "cat feeding",
            completed: true,
        },
        {
            _id: 4,
            body: "cleaning cat toilet",
            completed: false,
        },
    ];
    return (
        <>
            <Text
                fontSize={"4xl"}
                textTransform={"uppercase"}
                fontWeight={"bold"}
                textAlign={"center"}
                my={2}
            >
                Today's Tasks
            </Text>
            {isLoading && (
                <Flex justifyContent={"center"} my={4}>
                    <Spinner size={"xl"} />
                </Flex>
            )}
            {!isLoading && todos?.length === 0 && (
                <Stack alignItems={"center"} gap="3">
                    <Text
                        fontSize={"xl"}
                        textAlign={"center"}
                        color={"gray.500"}
                    >
                        All tasks are completed!
                    </Text>
                    <img src="/go.png" alt="go-logo" width={70} height={70} />
                </Stack>
            )}
            <Stack gap={3}>
                {todos?.map((todo) => <TodoItem key={todo._id} todo={todo} />)}
            </Stack>
        </>
    );
}
