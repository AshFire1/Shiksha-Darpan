import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Student from './pages/Student.tsx';
import Company from './pages/Company.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Home from './pages/Home.tsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1><Home/></h1>} />
        <Route path="/student" element={<Student />} />
        <Route path="/company" element={<Company />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;