import React from 'react';
import { useNavigate } from 'react-router-dom';

const DummyQuizFlow = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: '#0a192f', padding: '2rem', fontFamily: 'Inter, sans-serif', color: '#fff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              DUMMY QUIZ FLOW
            </div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0 0 0.5rem 0', color: '#f8fafc' }}>
              Check how quiz will feel after joining
            </h1>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0, maxWidth: '600px', lineHeight: 1.5 }}>
              This preview shows the actual user flow: countdown, question screen, answer selection, save & next, review and result.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <div style={{ background: '#1e293b', padding: '0.75rem 1.25rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #334155' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.25rem' }}>QUIZ</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f8fafc' }}>Study</div>
            </div>
            <div style={{ background: '#1e293b', padding: '0.75rem 1.25rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #334155' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.25rem' }}>TIME LEFT</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f8fafc' }}>07:42</div>
            </div>
            <div style={{ background: '#1e293b', padding: '0.75rem 1.25rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #334155' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.25rem' }}>PROGRESS</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f8fafc' }}>3/10</div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          
          {/* Left Column (Question Card) */}
          <div style={{ flex: '1 1 600px', background: '#ffffff', borderRadius: '1.5rem', padding: '2rem', color: '#0f172a' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                QUESTION 3 OF 10
              </span>
              <span style={{ background: '#e0f2fe', color: '#0284c7', fontSize: '0.7rem', fontWeight: 800, padding: '4px 12px', borderRadius: '999px' }}>
                5 MINUTES QUIZ
              </span>
            </div>

            <div style={{ width: '100%', height: '6px', background: '#f1f5f9', borderRadius: '999px', marginBottom: '2rem' }}>
              <div style={{ width: '30%', height: '100%', background: '#3b82f6', borderRadius: '999px' }}></div>
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.4 }}>
              Which article of the Indian Constitution deals with equality before law?
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
              {['Article 12', 'Article 14', 'Article 19', 'Article 21'].map((opt, idx) => {
                const isSelected = idx === 1; // "Article 14" is selected in the image
                return (
                  <div key={idx} style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '1rem 1.25rem', borderRadius: '0.75rem',
                    border: isSelected ? '2px solid #3b82f6' : '1px solid #e2e8f0',
                    background: isSelected ? '#eff6ff' : '#ffffff',
                    cursor: 'pointer'
                  }}>
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '50%',
                      background: isSelected ? '#1e293b' : '#0f172a',
                      color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.8rem', fontWeight: 800
                    }}>
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>{opt}</span>
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button 
                onClick={() => navigate(-1)}
                style={{
                  background: 'transparent', border: '1px solid #cbd5e1', color: '#0f172a',
                  padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer'
                }}
              >
                Previous
              </button>
              <button 
                style={{
                  background: '#3b82f6', border: 'none', color: '#ffffff',
                  padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                }}
              >
                Save & Next
              </button>
            </div>
          </div>

          {/* Right Column (Sidebars) */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Question Navigator */}
            <div style={{ background: '#1e293b', borderRadius: '1.25rem', padding: '1.5rem', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
                QUESTION NAVIGATOR
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.75rem' }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => {
                  let bg = '#334155';
                  let color = '#94a3b8';
                  if (num === 1 || num === 2) {
                    bg = '#3b82f6';
                    color = '#ffffff';
                  } else if (num === 3) {
                    bg = '#eab308';
                    color = '#ffffff';
                  }
                  return (
                    <div key={num} style={{
                      aspectRatio: '1', borderRadius: '0.5rem', background: bg, color: color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.9rem', fontWeight: 800
                    }}>
                      {num}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live Rank Preview */}
            <div style={{ background: '#1e293b', borderRadius: '1.25rem', padding: '1.5rem', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
                LIVE RANK PREVIEW
              </h3>
              
              <div style={{ background: '#334155', borderRadius: '0.75rem', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.25rem' }}>Your Rank</div>
                  <div style={{ fontSize: '0.7rem', color: '#cbd5e1' }}>Based on accuracy + speed</div>
                </div>
                <div style={{ background: '#475569', padding: '0.4rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', fontWeight: 800, color: '#f8fafc' }}>
                  #24
                </div>
              </div>

              <div style={{ background: '#334155', borderRadius: '0.75rem', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.25rem' }}>Answered</div>
                  <div style={{ fontSize: '0.7rem', color: '#cbd5e1' }}>2 saved, 1 selected</div>
                </div>
                <div style={{ background: '#475569', padding: '0.4rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', fontWeight: 800, color: '#f8fafc' }}>
                  3/10
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ background: '#ffffff', borderRadius: '1.25rem', padding: '1.5rem 2rem', color: '#0f172a', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
          <div style={{ textAlign: 'center', padding: '0.5rem', borderRight: '1px solid #f1f5f9' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>FINAL SCORE</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>8/10</div>
          </div>
          <div style={{ textAlign: 'center', padding: '0.5rem', borderRight: '1px solid #f1f5f9' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>YOUR RANK</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>#6</div>
          </div>
          <div style={{ textAlign: 'center', padding: '0.5rem', borderRight: '1px solid #f1f5f9' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>TIME TAKEN</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>06:41</div>
          </div>
          <div style={{ textAlign: 'center', padding: '0.5rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>STATUS</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 900 }}>Qualified</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DummyQuizFlow;
