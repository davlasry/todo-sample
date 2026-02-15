import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import TodoApp from './pages/TodoApp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<TodoApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
