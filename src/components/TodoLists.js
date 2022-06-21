import { useState, useEffect } from "react";
import TodoCard from "./TodoCard"
import Axios from "axios";

//fetch data from api endpoint using axios
export const URL = "https://robottodoapi.herokuapp.com/api/v1/todo/";

const TodoLists = () => {
    const [todos, setTodos] = useState([]);

    //using axios to make api call and get required data
    useEffect(() => {
        Axios.get(URL)
            .then((res) => (res.data))
            .then((data) => {
                setTodos(data);
            })
            .catch(
                console.log("failed to fetch data")
            );
    }, []);


    const handleDelete = async ({id}) => {
        await Axios.delete(URL + id + '/');
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    return (
        <>
            {
                todos.map((todo) => {
                    return (
                        <TodoCard key={todo?.id} title={todo?.title} decriptions={todo?.decriptions} todo={todo} handleDelete={handleDelete}/>
                    )

                })
            }

        </>

    )
}

export default TodoLists