import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterForm from "./pages/Register";
import LoginForm from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginForm/>} />
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
