import logo from './logo.svg';
import './App.css';
// import './Style.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Bill from './Bill';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/bill" element={<Bill/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
