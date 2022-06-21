import { CardHeader } from "./styles"
import { RiAddCircleLine } from "react-icons/ri"


const Nav = ({openModal}) => {


    return (
        <CardHeader>
            <h1>Robot's-Todo</h1>
            <RiAddCircleLine style={{ fontSize: 45, color: "rgb(147, 126, 3)", marginTop: 15, cursor: "pointer" }} onClick={openModal}/>
        </CardHeader>
    )
}

export default Nav