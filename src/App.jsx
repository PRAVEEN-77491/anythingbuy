
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './component/SignUP/SignUp'
import Login from './component/Login/Login'
import OtpPage from './component/OtpSection/OtpPage'

function App() {
  
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/otp' element={<OtpPage />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
