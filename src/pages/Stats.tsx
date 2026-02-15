import './Stats.css'

export default function Stats() {
  return (
    <div className="stats-page">
      <h1>Stats</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">0</div>
          <div className="stat-label">Total Tasks</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">0</div>
          <div className="stat-label">Completed</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">0%</div>
          <div className="stat-label">Completion Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">0</div>
          <div className="stat-label">Active Tasks</div>
        </div>
      </div>
      <div className="chart-placeholder">
        <p>📊 Task completion chart coming soon</p>
      </div>
    </div>
  )
}
