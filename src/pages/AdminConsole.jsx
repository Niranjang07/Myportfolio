import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminConsole.css';

function AdminConsole() {
  const [tab, setTab] = useState('users');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const navigate = useNavigate();

  const mockUsers = [
    { id: 1, name: 'Alice', role: 'peer' },
    { id: 2, name: 'Bob', role: 'admin' },
    { id: 3, name: 'Charlie', role: 'peer' },
  ];

  const handleLogout = () => {
    alert('Logging out...');
    navigate('/');
  };

  const renderContent = () => {
    switch (tab) {
      case 'users':
        return (
          <div className="admin-section">
            <h3>👥 Registered Users</h3>
            {mockUsers.map(user => (
              <div key={user.id} className="admin-user-card">
                <span>{user.name} — {user.role}</span>
                <div>
                  {user.role !== 'admin' && <button className="admin-btn">Promote</button>}
                  <button className="admin-btn remove">Remove</button>
                </div>
              </div>
            ))}
          </div>
        );
      case 'requests':
        return (
          <div className="admin-section">
            <h3>🆕 Access Requests</h3>
            <p>No pending requests.</p>
          </div>
        );
      case 'chat':
        return (
          <div className="admin-section">
            <h3>💬 Admin Chat</h3>
            <p>Peer interaction space coming soon...</p>
          </div>
        );
      case 'changePassword':
        return (
          <div className="admin-section">
            <h3>🔐 Change Password</h3>
            <p>Feature under development.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <video autoPlay muted loop className="bg-video">
        <source src="/videos/admin.mp4" type="video/mp4" />
      </video>

      <div className="admin-wrapper">
        <div className="admin-panel">
          <div className="admin-header">
            <h2>🛠 Admin Console</h2>
            <div className="admin-tabs">
              <div className="tab-group">
                <button onClick={() => setTab('users')}>Users</button>
                <button onClick={() => setTab('requests')}>Requests</button>
                <button onClick={() => setTab('chat')}>Chat</button>
              </div>

              <div className="settings-wrapper">
                <button onClick={() => setSettingsOpen(!settingsOpen)}>⚙</button>
                {settingsOpen && (
                  <div className="dropdown-menu simple">
                    <div onClick={() => setTab('changePassword')}>🔐 Change Password</div>
                    <hr />
                    <div onClick={handleLogout}>🚪 Log Out</div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="admin-body">{renderContent()}</div>
        </div>
      </div>
    </>
  );
}

export default AdminConsole;
