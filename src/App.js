import Nav from './components/Nav';
import { Container } from './components/styles';
import TodoLists from './components/TodoLists';

function App() {
  return (
    <Container>
      <Nav />
      <TodoLists />
    </Container>
  );
}

export default App;
