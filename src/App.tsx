import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import FormContainer from './Components/FormContainer/FormContainer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormContainer />} />
      </Routes>
    </Router>
  )
}

export default App
