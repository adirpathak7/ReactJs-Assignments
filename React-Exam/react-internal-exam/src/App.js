import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './output.css'
import About from './components/About'
import ContactUs from './components/ContactUs'
import FQ from './components/F&Q'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<h1>Welcome</h1>} />
          <Route element={<About />} path='/about' />
          <Route element={<ContactUs />} path='/contact' />
          <Route element={<FQ />} path='/fq' />
          <Route element={<Login />} path='/login' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
