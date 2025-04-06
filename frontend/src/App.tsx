import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MyProgressPage from './pages/MyProgressPage.tsx';
import Company from './pages/Company.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Home from './pages/Home.tsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/student" element={<MyProgressPage />} />
        <Route path="/company" element={<Company />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;