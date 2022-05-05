import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Special from './components/Special';
import Categories from './components/Categories';
function App() {
  return (
    <div className="App">    
         <Router>
          <Navbar/>
            <Routes>
               <Route exact path="/" element={<Home/>} />
               <Route path="categories" element={<Categories/>} />
               <Route path="special" element={<Special/>} />
            </Routes>
          </Router>
    </div>
  );
}

export default App;
