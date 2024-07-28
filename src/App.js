import logo from './logo.svg';
import Login from './components/logIn';
import About from './components/about'
import './App.css';
import SignUp from './components/signup'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
       <div className='main'>
            <Link to="/signup">SignUp</Link>
            <Link to="/login">Login</Link>
            <Link to="/about">About</Link>
          </div>
          
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
    </Router>

    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
  </div>
  );
}

export default App;
