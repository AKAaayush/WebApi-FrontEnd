
import './App.css';
import Header from './Header/Header'
import Container from './Body/Body'
import Footer from './Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'

function App() {
 
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Container></Container>
      <Footer></Footer>

    </div>
    </BrowserRouter>
  );
}

export default App;
