import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './ui/Form'
import UserDetail from './ui/UserDetail'

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/user/:login" element={<UserDetail />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
