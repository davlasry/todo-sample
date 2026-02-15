import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-page">
      <h1>Profile</h1>
      <div className="profile-section">
        <div className="avatar-section">
          <div className="avatar">👤</div>
          <button className="avatar-button">Change Avatar</button>
        </div>
        <div className="settings-section">
          <h2>Settings</h2>
          <div className="setting-item">
            <label>
              <input type="checkbox" />
              <span>Show completed tasks</span>
            </label>
          </div>
          <div className="setting-item">
            <label>
              <input type="checkbox" />
              <span>Enable notifications</span>
            </label>
          </div>
          <div className="setting-item">
            <label>
              <input type="checkbox" defaultChecked />
              <span>Dark mode</span>
            </label>
          </div>
        </div>
        <div className="theme-section">
          <h2>Theme</h2>
          <div className="theme-colors">
            <button className="theme-color purple active"></button>
            <button className="theme-color blue"></button>
            <button className="theme-color green"></button>
            <button className="theme-color orange"></button>
          </div>
        </div>
      </div>
    </div>
  )
}
