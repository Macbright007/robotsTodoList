import { Card, Heading, Paragraph} from "./styles"



const TodoCard = () => {
    return (
        <Card>
            <div>
                <Heading><b>Title:</b></Heading>
                <Paragraph><b>Description:</b></Paragraph>
                {/* <Nickname> { name }</Nickname> */}
            </div>
        </Card>
    )
}

export default TodoCard