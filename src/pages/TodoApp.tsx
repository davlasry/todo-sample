import { useState } from 'react'
import { Link } from 'react-router-dom'
import './TodoApp.css'

interface Todo {
  id: number
  text: string
  completed: boolean
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    const text = input.trim()
    if (!text) return
    setTodos([...todos, { id: Date.now(), text, completed: false }])
    setInput('')
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  return (
    <div className="todo-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      <div className="app">
        <div className="header">
          <h1>✨ My Tasks</h1>
          <p className="subtitle">{todos.length} {todos.length === 1 ? 'task' : 'tasks'}</p>
        </div>
        <form className="add-form" onSubmit={e => { e.preventDefault(); addTodo() }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="What needs to be done?"
          />
          <button type="submit">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </form>
        {todos.length === 0 ? (
          <div className="empty-state">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.3"/>
              <path d="M32 20V32M32 32V44M32 32H44M32 32H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
            </svg>
            <p>No tasks yet</p>
            <span>Add one above to get started</span>
          </div>
        ) : (
          <ul className="todo-list">
            {todos.map(todo => (
              <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span className="checkmark"></span>
                </label>
                <span className="todo-text" onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
                <button className="delete-btn" onClick={() => deleteTodo(todo.id)} aria-label="Delete task">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default TodoApp
