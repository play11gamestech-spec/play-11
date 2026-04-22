import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      setMobile(value);
      setError(null);
    }
  };

  const isInvalid = mobile.length !== 10;

  const handleSendOTP = async () => {
    if (isInvalid) return;
    setIsLoading(true);
    
    // ✅ PURE MOCKUP MODE: Directly navigate to OTP
    console.log('🧪 Mockup Mode: Simulating OTP send...');
    
    setTimeout(() => {
      localStorage.setItem('temp_mobile', mobile);
      navigate('/otp');
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="leadnius-auth-wrapper">
      <header className="auth-topbar">
        <div className="topbar-inner">
          <div className="logo-boxes">
            <div className="logo-box">Q</div>
            <div className="logo-box">U</div>
            <div className="logo-box">Z</div>
            <div className="logo-box">O</div>
          </div>
          <nav className="nav-links">
            <a href="/#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
            <a href="/#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>How it works</a>
            <a href="/#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Contests</a>
            <a href="/#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>FAQ</a>
          </nav>
        </div>
      </header>

      <main className="auth-main-content">
        <div className="join-card">
          <button className="close-btn" onClick={() => navigate('/')}>×</button>
          
          <div className="card-top-logo">
            <div className="mini-box">Q</div>
            <div className="mini-box">U</div>
            <div className="mini-box">Z</div>
            <div className="mini-box">O</div>
          </div>

          <h1 className="card-title">Your Quzo Journey Starts Here</h1>
          <p className="card-subtitle">
            Get early access to live quizzes and join 50,000+ serious aspirants.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); handleSendOTP(); }} className="auth-form">
            <div className={`input-group ${mobile.length === 10 ? 'active' : ''}`}>
              <input 
                type="tel"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={handleMobileChange}
                disabled={isLoading}
                autoFocus
              />
            </div>

            {error && <div className="error-text">{error}</div>}

            <button 
              type="submit" 
              className="join-btn"
              disabled={isInvalid || isLoading}
            >
              {isLoading ? 'Sending...' : 'Join Now →'}
            </button>
          </form>

          <p className="footer-link">
            Already a member? <span className="link-text" onClick={() => navigate('/register')}>Sign In</span>
          </p>
        </div>
      </main>

      <style>{`
        .leadnius-auth-wrapper {
          min-height: 100vh;
          background: #1a1b1e;
          display: flex;
          flex-direction: column;
          font-family: 'Lexend', sans-serif;
        }
        .auth-topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(13, 31, 60, 0.96);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          width: 100%;
        }
        .topbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo-boxes { display: flex; gap: 8px; }
        .logo-box {
          width: 38px;
          height: 38px;
          background: #0c4a6e;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 800;
        }
        .nav-links { display: flex; gap: 24px; }
        .nav-links a { color: #cbd5e1; text-decoration: none; font-weight: 600; font-size: 14px; }
        .auth-main-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .join-card {
          background: white;
          width: 100%;
          max-width: 480px;
          border-radius: 32px;
          padding: 60px 40px 48px;
          position: relative;
          text-align: center;
          box-shadow: 0 24px 48px rgba(0,0,0,0.2);
        }
        .close-btn { position: absolute; top: 24px; right: 24px; border: none; background: none; font-size: 24px; color: #94a3b8; cursor: pointer; }
        .mini-box { width: 38px; height: 38px; background: #0c4a6e; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 900; }
        .card-top-logo { display: flex; gap: 6px; justify-content: center; margin-bottom: 32px; }
        .card-title { color: #0f172a; font-size: 38px; font-weight: 850; letter-spacing: -1px; margin-bottom: 20px; }
        .card-subtitle { color: #64748b; font-size: 17px; margin-bottom: 40px; }
        .input-group { border: 2px solid #e2e8f0; border-radius: 16px; margin-bottom: 16px; overflow: hidden; }
        .input-group.active { border-color: #3b82f6; }
        .input-group input { 
          width: 100%; 
          padding: 18px 24px; 
          border: none; 
          outline: none; 
          font-size: 16px;
          color: #0f172a; /* Dark text for white background */
          background: transparent;
        }
        .join-btn { width: 100%; background: #404eed; color: white; border: none; padding: 18px; border-radius: 16px; font-size: 18px; font-weight: 700; cursor: pointer; }
        .footer-link { margin-top: 32px; color: #64748b; font-size: 14px; }
        .link-text { color: #1a56db; font-weight: 700; cursor: pointer; }
      `}</style>
    </div>
  );
};

export default LoginPage;
