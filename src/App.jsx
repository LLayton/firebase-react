import './assets/login.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddStudent from './components/Student'
function App() {
  

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={ <AddStudent/> } />
          <Route exact path="/Dashboard" element={ <Dashboard/> } />

        </Routes>
      </Router>
    </div>
  )
}

export default App
