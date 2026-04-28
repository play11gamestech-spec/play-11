import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const dummyQuestions = [
  { q: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], answer: 1 },
  { q: "Which article of the Indian Constitution deals with equality before law?", options: ["Article 12", "Article 14", "Article 19", "Article 21"], answer: 1 },
  { q: "Who is known as the Father of the Indian Constitution?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"], answer: 2 },
  { q: "What is the national currency of Japan?", options: ["Yuan", "Won", "Yen", "Dollar"], answer: 2 },
  { q: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: 1 },
  { q: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"], answer: 1 },
  { q: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: 3 },
  { q: "Which gas is most abundant in the Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: 2 },
  { q: "In what year did India gain independence?", options: ["1945", "1947", "1950", "1952"], answer: 1 },
  { q: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: 2 }
];

const DummyQuizFlow = () => {
  const navigate = useNavigate();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(8 * 60 + 42); // 08:42
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isFinished]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleOptionClick = (idx) => {
    if (isFinished) return;
    setAnswers({ ...answers, [currentIdx]: idx });
  };

  const handleNext = () => {
    if (currentIdx < dummyQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    } else {
      navigate(-1);
    }
  };

  const currentQ = dummyQuestions[currentIdx];
  const progressPercent = ((currentIdx + 1) / dummyQuestions.length) * 100;
  const answeredCount = Object.keys(answers).length;

  // Calculate dummy score
  let score = 0;
  Object.keys(answers).forEach(qIdx => {
    if (answers[qIdx] === dummyQuestions[qIdx].answer) {
      score += 1;
    }
  });

  return (
    <div style={{ minHeight: '100vh', background: '#0a192f', padding: '6rem 2rem 2rem 2rem', fontFamily: 'Inter, sans-serif', color: '#fff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              DUMMY QUIZ FLOW
            </div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, margin: '0 0 0.5rem 0', color: '#f8fafc' }}>
              {isFinished ? "Quiz Completed" : "Check how quiz will feel after joining"}
            </h1>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0, maxWidth: '600px', lineHeight: 1.5 }}>
              {isFinished 
                ? "Here is your final result summary based on your selections." 
                : "This preview shows the actual user flow: countdown, question screen, answer selection, save & next, review and result."}
            </p>
          </div>

          {!isFinished && (
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <div style={{ background: '#1e293b', padding: '0.75rem 1.25rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #334155' }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.25rem' }}>QUIZ</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f8fafc' }}>Study</div>
              </div>
              <div style={{ background: '#1e293b', padding: '0.75rem 1.25rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #334155' }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.25rem' }}>TIME LEFT</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f8fafc' }}>{formatTime(timeLeft)}</div>
              </div>
              <div style={{ background: '#1e293b', padding: '0.75rem 1.25rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #334155' }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.25rem' }}>PROGRESS</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#f8fafc' }}>{currentIdx + 1}/{dummyQuestions.length}</div>
              </div>
            </div>
          )}
        </div>

        {!isFinished ? (
          /* Main Content Area */
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            
            {/* Left Column (Question Card) */}
            <div style={{ flex: '1 1 600px', background: '#ffffff', borderRadius: '1.5rem', padding: '2rem', color: '#0f172a' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  QUESTION {currentIdx + 1} OF {dummyQuestions.length}
                </span>
                <span style={{ background: '#e0f2fe', color: '#0284c7', fontSize: '0.7rem', fontWeight: 800, padding: '4px 12px', borderRadius: '999px' }}>
                  5 MINUTES QUIZ
                </span>
              </div>

              <div style={{ width: '100%', height: '6px', background: '#f1f5f9', borderRadius: '999px', marginBottom: '2rem' }}>
                <div style={{ width: `${progressPercent}%`, height: '100%', background: '#3b82f6', borderRadius: '999px', transition: 'width 0.3s ease' }}></div>
              </div>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.4 }}>
                {currentQ.q}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
                {currentQ.options.map((opt, idx) => {
                  const isSelected = answers[currentIdx] === idx;
                  return (
                    <div key={idx} onClick={() => handleOptionClick(idx)} style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      padding: '1rem 1.25rem', borderRadius: '0.75rem',
                      border: isSelected ? '2px solid #3b82f6' : '1px solid #e2e8f0',
                      background: isSelected ? '#eff6ff' : '#ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
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
                  onClick={handlePrev}
                  style={{
                    background: 'transparent', border: '1px solid #cbd5e1', color: '#0f172a',
                    padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer'
                  }}
                >
                  {currentIdx === 0 ? "Back" : "Previous"}
                </button>
                <button 
                  onClick={handleNext}
                  disabled={answers[currentIdx] === undefined}
                  style={{
                    background: answers[currentIdx] === undefined ? '#94a3b8' : '#3b82f6', border: 'none', color: '#ffffff',
                    padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 700, fontSize: '0.9rem', cursor: answers[currentIdx] === undefined ? 'not-allowed' : 'pointer',
                    boxShadow: answers[currentIdx] === undefined ? 'none' : '0 4px 12px rgba(59, 130, 246, 0.3)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {currentIdx === dummyQuestions.length - 1 ? 'Submit' : 'Save & Next'}
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
                  {dummyQuestions.map((_, i) => {
                    let bg = '#334155';
                    let color = '#94a3b8';
                    
                    if (i === currentIdx) {
                      bg = '#eab308'; // Yellow for current
                      color = '#ffffff';
                    } else if (answers[i] !== undefined) {
                      bg = '#3b82f6'; // Blue for answered
                      color = '#ffffff';
                    }

                    return (
                      <div key={i} onClick={() => setCurrentIdx(i)} style={{
                        aspectRatio: '1', borderRadius: '0.5rem', background: bg, color: color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.9rem', fontWeight: 800, cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}>
                        {i + 1}
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
                    <div style={{ fontSize: '0.7rem', color: '#cbd5e1' }}>{answeredCount} saved</div>
                  </div>
                  <div style={{ background: '#475569', padding: '0.4rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', fontWeight: 800, color: '#f8fafc' }}>
                    {answeredCount}/{dummyQuestions.length}
                  </div>
                </div>

              </div>
            </div>
          </div>
        ) : (
          /* Result Screen */
          <div>
            <div style={{ background: '#ffffff', borderRadius: '1.25rem', padding: '3rem', color: '#0f172a', textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Quiz Completed!</h2>
              <p style={{ color: '#64748b', marginBottom: '2rem' }}>You have successfully completed the study quiz.</p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', minWidth: '150px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>FINAL SCORE</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a' }}>{score}/{dummyQuestions.length}</div>
                </div>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', minWidth: '150px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>YOUR RANK</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a' }}>#6</div>
                </div>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', minWidth: '150px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>TIME TAKEN</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a' }}>{formatTime((8 * 60 + 42) - timeLeft)}</div>
                </div>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', minWidth: '150px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>STATUS</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: score > 5 ? '#10b981' : '#f59e0b' }}>
                    {score > 5 ? 'Qualified' : 'Needs Practice'}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <button 
                  onClick={() => navigate('/home-choice')}
                  style={{
                    background: '#3b82f6', border: 'none', color: '#ffffff',
                    padding: '1rem 3rem', borderRadius: '0.75rem', fontWeight: 800, fontSize: '1rem', cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  Return Home
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default DummyQuizFlow;
