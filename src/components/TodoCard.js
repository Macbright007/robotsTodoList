import { Card, Heading, Paragraph} from "./styles"

const TodoCard = ({ title, decriptions }) => {
    return (
        <Card>
            <div>
                <Heading><b>Title: { title }</b></Heading>
                <Paragraph><b>Description: { decriptions }</b></Paragraph>
                {/* <Nickname> { name }</Nickname> */}
            </div>
        </Card>
    )
}

export default TodoCard