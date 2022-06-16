import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const CreateTask = () => {
    const [tasks, setTasks] = useState({ title: "", decriptions: "" })
    const [loading, setLoading] = useState(false)


    //used to redirect to home page
    let navigate = useNavigate();

    //function to get details
    const getTaskDetails = (e) => {
        setTasks(state => ({ ...state, [e.target.name]: e.target.value }))
    }


    //function to handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const result = await Axios.post('https://robottodoapi.herokuapp.com/api/v1/todo/',
                tasks
            )
            if (result?.status === 200) {
                setLoading(false)
                return navigate("/", { replace: true });
            }
        }
        catch {
            setLoading(false)
        }

    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label for="title">
                    Title:
                </label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={task.title}
                    onChange={getTaskDetails}
                />
            </div>
            <div>
                <label for="decriptions">
                    description:
                </label>
                <br />
                <textarea
                    type="text"
                    id="decriptions"
                    name="decriptions"
                    value={tdecriptions}
                    onChange={getTaskDetails}
                />
            </div>

            {/* <Link to="/"> */}
            <button disabled={loading}>
                {
                    loading ? 'Submitting...' : 'Submit'
                }
            </button>
            {/* </Link> */}
        </form>

    )
}

export default CreateTask