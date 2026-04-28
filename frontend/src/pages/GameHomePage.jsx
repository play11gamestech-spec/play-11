import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Zap, Info } from 'lucide-react';

const GameHomePage = () => {
  const navigate = useNavigate();

  const games = [
    {
      id: 1,
      tag: 'IPL QUIZ',
      status: 'LIVE',
      statusColor: 'live',
      title: 'MI vs KKR Match Quiz',
      timerLabel: 'CLOSES IN',
      timer: '00h 12m',
      questions: '11 Questions',
      players: '128 joined',
      rewards: 'Top 3 rewarded',
      btnText: 'Join Live Quiz',
      active: true
    },
    {
      id: 2,
      tag: 'IPL QUIZ',
      status: 'UPCOMING',
      statusColor: 'upcoming',
      title: 'RCB vs CSK Quiz',
      timerLabel: 'STARTS AT',
      timer: '7:30 PM',
      questions: '11 Questions',
      players: '76 joined',
      rewards: 'Top 3 rewarded',
      btnText: 'View Quiz',
      active: false
    },
    {
      id: 3,
      tag: 'PRACTICE',
      status: 'FREE',
      statusColor: 'practice',
      title: 'Cricket Knowledge Practice',
      timerLabel: 'MODE',
      timer: 'Practice Quiz',
      questions: '10 Questions',
      players: '300+ attempted',
      type: 'Past match based',
      btnText: 'Play Practice',
      active: false
    }
  ];

  return (
    <div className="quiz-room-bg" style={{ minHeight: '100vh' }}>
      <div className="container" style={{ paddingTop: '7rem', paddingBottom: '6rem' }}>
        
        {/* Back Navigation */}
        <button 
          onClick={() => navigate('/home-choice')}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.6rem', 
            background: 'white', 
            border: '1px solid #e2e8f0', 
            padding: '0.6rem 1.25rem', 
            borderRadius: '0.75rem', 
            fontSize: '0.85rem', 
            fontWeight: 800, 
            color: '#64748b',
            marginBottom: '3rem',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          className="hover-lift"
        >
          <ArrowLeft size={18} /> Back to Dashboard
        </button>

        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }} className="animate-slide-up">
           <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 900, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>GAME ZONE</p>
              <h1 style={{ fontSize: '2.75rem', fontWeight: 950, color: '#0f172a', letterSpacing: '-0.03em' }}>Cricket-based quiz battles</h1>
           </div>
           <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#eff6ff', color: '#1d4ed8', padding: '8px 16px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800 }}>
              <span>Skill-based match quizzes (IPL style)</span>
           </div>
        </div>

        {/* Games Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }} className="animate-slide-up stagger-1">
          {games.map((game) => (
            <div key={game.id} className="game-zone-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                 <div style={{ fontSize: '0.65rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.1em' }}>{game.tag}</div>
                 <div className={`badge-${game.statusColor}-mini`}>{game.status}</div>
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem' }}>{game.title}</h3>

              <div className="game-status-box">
                 <p style={{ fontSize: '0.6rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>{game.timerLabel}</p>
                 <p style={{ fontSize: '1.5rem', fontWeight: 950, color: game.status === 'LIVE' ? '#ef4444' : '#3b82f6' }}>{game.timer}</p>
              </div>

              <div style={{ background: '#fff', borderRadius: '1rem' }}>
                 <div className="game-metric-row">
                    <div className="game-metric-label">QUESTIONS</div>
                    <div className="game-metric-value">{game.questions}</div>
                 </div>
                 <div className="game-metric-row">
                    <div className="game-metric-label">PLAYERS</div>
                    <div className="game-metric-value">{game.players}</div>
                 </div>
                 {game.type && (
                   <div className="game-metric-row">
                      <div className="game-metric-label">TYPE</div>
                      <div className="game-metric-value">{game.type}</div>
                   </div>
                 )}
                 <div className="game-metric-row">
                    <div className="game-metric-label">{game.id === 3 ? 'PLAYERS' : 'REWARDS'}</div>
                    <div className="game-metric-value">{game.id === 3 ? game.players : game.rewards}</div>
                 </div>
              </div>

              <button 
                className="quiz-join-btn blue" 
                onClick={() => {
                  navigate(`/match-quiz-room/${game.id}`);
                }}
                style={{ 
                  marginTop: '0.5rem', 
                  opacity: game.active ? 1 : 0.8,
                  boxShadow: game.active ? '0 10px 15px -3px rgba(59, 130, 246, 0.3)' : 'none'
                }}
              >
                {game.btnText}
              </button>
            </div>
          ))}
        </div>

        {/* Info Note */}
        <div style={{ marginTop: '4rem', display: 'flex', gap: '1rem', background: 'white', padding: '1.5rem', borderRadius: '1.5rem', border: '1px solid #e2e8f0' }} className="animate-slide-up stagger-2">
           <div style={{ color: '#3b82f6' }}><Info size={24} /></div>
           <div>
              <p style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>About Game Zone Quizzes</p>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>Match-based quizzes are designed to test your real-time cricket knowledge. Join a room before it closes to participate in the upcoming live battle. Rewards are distributed automatically based on final leaderboard positions.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default GameHomePage;
