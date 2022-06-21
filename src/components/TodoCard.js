import { Card, Heading, Paragraph } from "./styles"
import { MdDelete } from "react-icons/md"

const TodoCard = ({ todo, title, decriptions, handleDelete }) => {
    return (
        <Card>
            <div>
                <Heading>
                    <b>Title: {title}</b>
                    <MdDelete style={{ fontSize: 30, color: "rgb(147, 126, 3)", marginTop: -5, cursor: "pointer" }} onClick={() => handleDelete(todo)} />
                </Heading>
                <Paragraph><b>Description: {decriptions}</b></Paragraph>
            </div>
        </Card>
    )
}

export default TodoCard