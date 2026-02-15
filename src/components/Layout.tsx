import { Outlet, Link, useLocation } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  const location = useLocation()

  return (
    <div className="layout">
      <header className="header">
        <nav className="nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link to="/stats" className={location.pathname === '/stats' ? 'active' : ''}>
            Stats
          </Link>
          <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>
            Profile
          </Link>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
