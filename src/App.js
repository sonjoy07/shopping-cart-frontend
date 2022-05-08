import Header from './pages/Header';
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom';
import Footer from './pages/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
