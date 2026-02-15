import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
  return (
    <div className="landing">
      <nav className="landing-nav">
        <div className="logo">Todo</div>
        <Link to="/app" className="nav-cta">Get Started</Link>
      </nav>

      <section className="hero">
        <h1 className="hero-title">
          Simplify your life,<br />
          <span className="gradient-text">one task at a time</span>
        </h1>
        <p className="hero-subtitle">
          A beautifully minimal todo app that helps you focus on what matters most.
          No clutter, no distractions—just pure productivity.
        </p>
        <div className="hero-actions">
          <Link to="/app" className="btn-primary">Start for Free</Link>
          <a href="#features" className="btn-secondary">Learn More</a>
        </div>
      </section>

      <section id="features" className="features">
        <h2 className="section-title">Why choose Todo?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Minimal Design</h3>
            <p>Clean interface that keeps you focused on your tasks, not the tool.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Instant interactions with no loading times. Add, complete, delete—all in a flash.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Private & Secure</h3>
            <p>Your data stays on your device. No accounts, no tracking, no worries.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <h2>Ready to get organized?</h2>
          <p>Join thousands of productive people who trust Todo for their daily tasks.</p>
          <Link to="/app" className="btn-primary btn-large">Try Todo Now</Link>
        </div>
      </section>

      <footer className="landing-footer">
        <p>Made with care. Simple by design.</p>
      </footer>
    </div>
  )
}

export default Landing
