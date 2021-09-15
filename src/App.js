import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Header from './stuff/Header';
import Footer from './stuff/Footer';
import Main from './stuff/Main';
import animalBios from './stuff/data.json'

function App() {
  return (
    <Container>
      <Header title="Horned Beast" />
      <Main message="my beasties" animalBios={animalBios}/>
      <Footer text="Author: Bryce Pfingston"/>
    </Container>
  );
}

export default App;
