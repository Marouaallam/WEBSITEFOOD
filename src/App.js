import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router,Route,Routes  } from'react-router-dom'
import Home from './pages/Home';
import Menu from './pages/Menu';
function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
       <Routes>
         <Route path="/" exact Component={Home} />
         <Route path="/menu" exact Component={Menu} />
       </Routes>
       <Footer/>
      </Router>
    </div>
  );
}

export default App;
