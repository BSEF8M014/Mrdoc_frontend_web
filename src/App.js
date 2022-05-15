import logo from './logo.svg';
import './App.css';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Nav_Footer/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/> 
        <Home/> 
    </div>
  );
}

export default App;
