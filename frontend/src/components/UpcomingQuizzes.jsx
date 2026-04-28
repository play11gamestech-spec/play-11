import React from 'react';

const UpcomingQuizzes = () => {
  const quizzes = [
    {
      id: 1,
      category: 'CURRENT AFFAIRS',
      title: 'Daily Current Affairs Quiz',
      time: 'Today - 8:00 PM to 8:15 PM',
      deadline: 'Join before 7:59 PM',
      questions: '15',
      prize: '₹200',
      joined: '124',
      entry: '₹1',
      btnText: 'Join Current Affairs Quiz'
    },
    {
      id: 2,
      category: 'SSC LEVEL',
      title: 'SSC CGL Mixed Practice Room',
      time: 'Today - 9:00 PM to 9:30 PM',
      deadline: 'Join before 8:59 PM',
      questions: '20',
      prize: '₹500',
      joined: '89',
      entry: '₹1',
      btnText: 'View SSC Quiz Room'
    },
    {
      id: 3,
      category: 'CURRENT AFFAIRS',
      title: 'Morning Headlines Express',
      time: 'Tomorrow - 7:00 AM to 7:15 AM',
      deadline: 'Scheduled room opens 15 min early',
      questions: '10',
      prize: 'Practice',
      joined: '212',
      entry: 'Free',
      btnText: 'Set Reminder',
      isPractice: true
    }
  ];

  return (
    <div className="animate-slide-up">
       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 900, color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>SCHEDULED QUIZ SECTION</p>
            <h2 className="upcoming-section-title" style={{ marginBottom: 0 }}>Multiple quizzes scheduled by time</h2>
          </div>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b' }}>Current Affairs + SSC example layout</p>
       </div>

       <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '2.5rem' }} className="mobile-column">
          {/* Left Column */}
          <div>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div>
                   <p style={{ fontSize: '0.65rem', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>TODAY'S QUIZ SLOTS</p>
                   <h3 style={{ fontSize: '1.75rem', fontWeight: 900, color: '#0f172a' }}>Upcoming scheduled quizzes</h3>
                </div>
                <p style={{ fontSize: '0.7rem', background: '#e0f2fe', color: '#0369a1', padding: '6px 12px', borderRadius: '8px', fontWeight: 700 }}>Users can join before start time</p>
             </div>

             {quizzes.map((quiz) => (
                <div key={quiz.id} className="upcoming-quiz-card">
                   <div className="entry-box-mini">
                      <p style={{ fontSize: '0.6rem', fontWeight: 800, color: '#94a3b8', marginBottom: '2px' }}>ENTRY</p>
                      <p style={{ fontSize: '1.1rem', fontWeight: 900 }}>{quiz.entry}</p>
                   </div>
                   
                   <p style={{ fontSize: '0.65rem', fontWeight: 900, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{quiz.category}</p>
                   <h4 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.4rem' }}>{quiz.title}</h4>
                   <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>{quiz.time}</p>
                   <p style={{ fontSize: '0.8rem', color: '#ef4444', fontWeight: 700, marginTop: '0.4rem' }}>{quiz.deadline}</p>

                   <div className="metrics-row-light">
                      <div className="metric-box-light">
                         <p style={{ fontSize: '0.6rem', fontWeight: 800, color: '#94a3b8', marginBottom: '0.4rem' }}>QUESTIONS</p>
                         <p style={{ fontSize: '1.1rem', fontWeight: 900 }}>{quiz.questions}</p>
                      </div>
                      <div className="metric-box-light">
                         <p style={{ fontSize: '0.6rem', fontWeight: 800, color: '#94a3b8', marginBottom: '0.4rem' }}>{quiz.isPractice ? 'MODE' : 'PRIZE POOL'}</p>
                         <p style={{ fontSize: '1.1rem', fontWeight: 900 }}>{quiz.prize}</p>
                      </div>
                      <div className="metric-box-light">
                         <p style={{ fontSize: '0.6rem', fontWeight: 800, color: '#94a3b8', marginBottom: '0.4rem' }}>JOINED</p>
                         <p style={{ fontSize: '1.1rem', fontWeight: 900 }}>{quiz.joined}</p>
                      </div>
                   </div>

                   <button className="quiz-join-btn blue" style={{ marginTop: '0.5rem' }}>{quiz.btnText}</button>
                </div>
             ))}
          </div>

          {/* Right Column */}
          <div>
             <div className="preview-box-dark">
                <p style={{ fontSize: '0.7rem', fontWeight: 800, color: '#7dd3fc', textTransform: 'uppercase', marginBottom: '0.5rem' }}>CURRENT AFFAIRS ROOM</p>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1.5rem' }}>Quiz room preview</h3>
                
                <div className="preview-row">
                   <div className="preview-label">Topic</div>
                   <div className="preview-value">National + International + Economy</div>
                </div>
                <div className="preview-row">
                   <div className="preview-label">Questions</div>
                   <div className="preview-value">15 timed MCQs</div>
                </div>
                <div className="preview-row">
                   <div className="preview-label">Duration</div>
                   <div className="preview-value">15 minutes</div>
                </div>
                <div className="preview-row" style={{ borderBottom: 'none' }}>
                   <div className="preview-label">Reward</div>
                   <div className="preview-value">Top 5 rewarded</div>
                </div>
             </div>

             <div className="preview-box-light">
                <p style={{ fontSize: '0.7rem', fontWeight: 800, color: '#4f46e5', textTransform: 'uppercase', marginBottom: '0.5rem' }}>SSC QUIZ ROOM LAYOUT</p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>SSC level live room</h3>
                
                <div className="preview-row">
                   <div className="preview-label">Sections</div>
                   <div className="preview-value">GK - English - Reasoning</div>
                </div>
                <div className="preview-row">
                   <div className="preview-label">Questions</div>
                   <div className="preview-value">20 Questions</div>
                </div>
                <div className="preview-row">
                   <div className="preview-label">Time</div>
                   <div className="preview-value">20 Minutes</div>
                </div>
                <div className="preview-row" style={{ borderBottom: 'none' }}>
                   <div className="preview-label">Players Live</div>
                   <div className="preview-value">89 joined</div>
                </div>
             </div>

             <div className="preview-box-dark" style={{ background: 'linear-gradient(135deg, #0d1f3c, #1e293b)' }}>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                   <div style={{ padding: '4px 10px', background: '#38bdf8', borderRadius: '6px', fontSize: '0.6rem', fontWeight: 900 }}>INSIDE ROOM</div>
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '0.75rem' }}>SSC Mixed Practice Quiz Room</h4>
                <p style={{ fontSize: '0.8rem', opacity: 0.7, lineHeight: 1.5, marginBottom: '1.5rem' }}>Top bar timer, question navigator, live rank, section label, answer options, and save & next button will be visible inside this room.</p>
                <button className="quiz-join-btn blue">Enter SSC Quiz Room</button>
             </div>
          </div>
       </div>

       <style>{`
          .mobile-column {
             @media (max-width: 960px) {
                grid-template-columns: 1fr !important;
             }
          }
       `}</style>
    </div>
  );
};

export default UpcomingQuizzes;
