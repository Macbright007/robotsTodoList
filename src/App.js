import { useState } from "react";
import Nav from './components/Nav';
import { Container } from './components/styles';
import TodoLists from './components/TodoLists';
// import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { URL } from "./components/TodoLists"
import CreateTask from "./components/CreateTask";

function App() {
  const [showModal, setShowModal] = useState(false)
  const [tasks, setTasks] = useState({ title: "", decriptions: "" })
  const [loading, setLoading] = useState(false)


  //function to set details
  const setTaskDetails = (e) => {
    setTasks(state => ({ ...state, [e.target.name]: e.target.value }))
  }


  //function to handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const result = await Axios.post(URL,
        tasks
      )
      if (result?.status === 201 ) {
        setLoading(false)
      }
      
    }
    catch {
      setLoading(false)
    }
    setTasks({
      title: '',
      decriptions: '',
    });
  };

  //function to toggle
  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <Container>
      <Nav openModal={openModal} />
      <CreateTask
        showModal={showModal}
        setShowModal={setShowModal}
        setTaskDetails={setTaskDetails}
        handleSubmit={handleSubmit}
        task={tasks}
        loading={loading} />
      <TodoLists />
    </Container>
  );
}

export default App;
