import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Home  from "./components/pages/Home"
import About from './components/pages/About';
import Resources from './components/pages/Resources';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
     
          <Route exact path='/'
           element={<Home/>} >
          </Route>

          <Route path="/about"
            element={<About/>}>
          </Route>

          <Route path="/resources"
            element={<Resources/>}>
          </Route>

          </Routes>
      </Router>
     
    </div>
  );
}

export default App;
