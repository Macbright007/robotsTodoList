import { useState } from "react";
import TodoCard from "./TodoCard"
import { CardHeader, Container } from "./styles"
import { RiAddCircleLine } from "react-icons/ri"

const TodoLists = () => {
    return (
        <Container>
            <CardHeader>
                <h1>Robot's-Todo</h1>
                <RiAddCircleLine style={{ fontSize: 45, color: "rgb(147, 126, 3)", marginTop: 15 }} />
            </CardHeader>

            <TodoCard />
        </Container>

    )
}

export default TodoLists