import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const quizData = {
  '1': {
    title: 'MI vs KKR Match Quiz',
    questions: [
      { q: 'Choose your Captain for MI vs KKR', options: ["Rohit Sharma", "Sunil Narine", "Hardik Pandya", "Andre Russell"], answer: 0 },
      { q: 'How many times has MI won the IPL trophy?', options: ["3", "4", "5", "6"], answer: 2 },
      { q: 'Who is the leading run-scorer for MI in IPL history?', options: ["Sachin Tendulkar", "Rohit Sharma", "Kieron Pollard", "Suryakumar Yadav"], answer: 1 },
      { q: 'Which bowler has taken the most wickets for KKR?', options: ["Sunil Narine", "Andre Russell", "Piyush Chawla", "Varun Chakaravarthy"], answer: 0 },
      { q: 'Who is known as "Hitman" in the MI squad?', options: ["Ishan Kishan", "Hardik Pandya", "Rohit Sharma", "Jasprit Bumrah"], answer: 2 },
      { q: 'Which KKR player is known as "Muscle Russell"?', options: ["Chris Lynn", "Andre Russell", "Sunil Narine", "Eoin Morgan"], answer: 1 },
      { q: 'What is the home ground of Kolkata Knight Riders?', options: ["Wankhede", "Eden Gardens", "Chinnaswamy", "Chepauk"], answer: 1 },
      { q: 'Who was the first captain of Mumbai Indians?', options: ["Sachin Tendulkar", "Harbhajan Singh", "Shaun Pollock", "Sanath Jayasuriya"], answer: 0 },
      { q: 'Which player has won the MVP award for KKR?', options: ["Gautam Gambhir", "Sunil Narine", "Jacques Kallis", "Robin Uthappa"], answer: 1 },
      { q: 'Who holds the record for fastest IPL fifty for KKR?', options: ["Yusuf Pathan", "Andre Russell", "Pat Cummins", "Sunil Narine"], answer: 2 },
      { q: 'Which year did KKR win their first IPL title?', options: ["2010", "2011", "2012", "2014"], answer: 2 }
    ]
  },
  '2': {
    title: 'RCB vs CSK Quiz',
    questions: [
      { q: 'Choose your Captain for RCB vs CSK', options: ["Faf du Plessis", "MS Dhoni", "Virat Kohli", "Ravindra Jadeja"], answer: 2 },
      { q: 'How many IPL titles has Chennai Super Kings won?', options: ["3", "4", "5", "6"], answer: 2 },
      { q: 'Who holds the record for highest individual score for RCB?', options: ["Virat Kohli", "AB de Villiers", "Chris Gayle", "Glenn Maxwell"], answer: 2 },
      { q: 'Who is known as "Thala" in the CSK squad?', options: ["Suresh Raina", "Ravindra Jadeja", "MS Dhoni", "Dwayne Bravo"], answer: 2 },
      { q: 'What is the home ground of Royal Challengers Bangalore?', options: ["Wankhede", "Eden Gardens", "Chinnaswamy", "Chepauk"], answer: 2 },
      { q: 'Which CSK player is famous for his "helicopter shot"?', options: ["MS Dhoni", "Suresh Raina", "Matthew Hayden", "Ambati Rayudu"], answer: 0 },
      { q: 'Who is the leading run-scorer in IPL history?', options: ["David Warner", "Rohit Sharma", "Virat Kohli", "Shikhar Dhawan"], answer: 2 },
      { q: 'Which team has the highest team total in IPL history?', options: ["CSK", "RCB", "MI", "SRH"], answer: 3 },
      { q: 'Who was the first player to take 200 wickets in IPL?', options: ["Lasith Malinga", "Amit Mishra", "Yuzvendra Chahal", "Dwayne Bravo"], answer: 3 },
      { q: 'Who is the highest run-scorer for CSK in IPL?', options: ["MS Dhoni", "Suresh Raina", "Faf du Plessis", "Ruturaj Gaikwad"], answer: 1 },
      { q: 'Which team did Faf du Plessis play for before RCB?', options: ["MI", "CSK", "DC", "PBKS"], answer: 1 }
    ]
  },
  '3': {
    title: 'Cricket Knowledge Practice',
    questions: [
      { q: 'Who won the first Cricket World Cup?', options: ["Australia", "West Indies", "India", "England"], answer: 1 },
      { q: 'Which player has scored the most centuries in international cricket?', options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Jacques Kallis"], answer: 2 },
      { q: 'What is the length of a standard cricket pitch?', options: ["20 yards", "22 yards", "24 yards", "18 yards"], answer: 1 },
      { q: 'Which country is known as the "Proteas"?', options: ["Australia", "New Zealand", "South Africa", "West Indies"], answer: 2 },
      { q: 'Who was the first batsman to score a double century in ODIs?', options: ["Virender Sehwag", "Sachin Tendulkar", "Rohit Sharma", "Chris Gayle"], answer: 1 },
      { q: 'Which bowler has taken the most wickets in Test cricket?', options: ["Shane Warne", "James Anderson", "Muttiah Muralitharan", "Anil Kumble"], answer: 2 },
      { q: 'In which year was the first T20 International played?', options: ["2003", "2004", "2005", "2007"], answer: 2 },
      { q: 'What is the maximum number of overs a bowler can bowl in an ODI?', options: ["10", "12", "15", "20"], answer: 0 },
      { q: 'Who is known as the "God of Cricket"?', options: ["Don Bradman", "Brian Lara", "Sachin Tendulkar", "Viv Richards"], answer: 2 },
      { q: 'Which stadium is known as the "Mecca of Cricket"?', options: ["MCG", "Eden Gardens", "Lord's", "The Oval"], answer: 2 }
    ]
  }
};

const MatchQuizRoom = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const currentQuiz = quizData[id] || quizData['1'];
  const questions = currentQuiz.questions;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(12 * 60); // 12:00
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
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    } else {
      navigate('/game-home');
    }
  };

  const currentQ = questions[currentIdx];
  const progressPercent = ((currentIdx + 1) / questions.length) * 100;
  const answeredCount = Object.keys(answers).length;

  // Calculate score
  let score = 0;
  Object.keys(answers).forEach(qIdx => {
    if (answers[qIdx] === questions[qIdx].answer) {
      score += 1;
    }
  });

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0a192f', 
      padding: 'clamp(5rem, 10vh, 7rem) clamp(1rem, 3vw, 2rem) 2rem clamp(1rem, 3vw, 2rem)', 
      fontFamily: 'Inter, sans-serif', 
      color: '#fff',
      overflowX: 'hidden',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
              MATCH QUIZ ROOM
            </div>
            <h1 style={{ fontSize: 'clamp(1.2rem, 6vw, 1.8rem)', fontWeight: 800, margin: '0 0 0.5rem 0', color: '#f8fafc', lineHeight: 1.2 }}>
              {isFinished ? "Match Quiz Completed" : currentQuiz.title}
            </h1>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0, maxWidth: '600px', lineHeight: 1.5 }}>
              {isFinished 
                ? "Here is your final result summary based on your selections." 
                : "Answer accurately and quickly to climb the leaderboard."}
            </p>
          </div>

          {!isFinished && (
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <div style={{ background: '#1e293b', padding: '0.6rem 1rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #334155', flex: '1 1 80px', minWidth: '80px' }}>
                <div style={{ fontSize: '0.55rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.25rem' }}>GAME</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#f8fafc' }}>{id === '3' ? 'Practice' : 'Live'}</div>
              </div>
              <div style={{ background: '#1e293b', padding: '0.6rem 1rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #334155', flex: '1 1 80px', minWidth: '80px' }}>
                <div style={{ fontSize: '0.55rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.25rem' }}>TIME LEFT</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#f8fafc' }}>{formatTime(timeLeft)}</div>
              </div>
              <div style={{ background: '#1e293b', padding: '0.6rem 1rem', borderRadius: '0.75rem', textAlign: 'center', border: '1px solid #334155', flex: '1 1 80px', minWidth: '80px' }}>
                <div style={{ fontSize: '0.55rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.25rem' }}>PROGRESS</div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#f8fafc' }}>{currentIdx + 1}/{questions.length}</div>
              </div>
            </div>
          )}
        </div>

        {!isFinished ? (
          /* Main Content Area */
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            
            {/* Left Column (Question Card) */}
            <div className="quiz-main-card" style={{ flex: '1 1 650px', background: '#ffffff', borderRadius: '1.5rem', padding: 'clamp(1rem, 5vw, 2rem)', color: '#0f172a', minWidth: '0', boxSizing: 'border-box' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  QUESTION {currentIdx + 1} OF {questions.length}
                </span>
                <span style={{ background: '#e0f2fe', color: '#0284c7', fontSize: '0.7rem', fontWeight: 800, padding: '4px 12px', borderRadius: '999px' }}>
                  12 MINUTES QUIZ
                </span>
              </div>

              <div style={{ width: '100%', height: '6px', background: '#f1f5f9', borderRadius: '999px', marginBottom: '2rem' }}>
                <div style={{ width: `${progressPercent}%`, height: '100%', background: '#3b82f6', borderRadius: '999px', transition: 'width 0.3s ease' }}></div>
              </div>

              <h2 style={{ fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', fontWeight: 800, marginBottom: '2rem', lineHeight: 1.4, color: '#0f172a' }}>
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
                      <span style={{ fontSize: 'clamp(0.9rem, 3vw, 1rem)', fontWeight: 700, color: '#0f172a', wordBreak: 'break-word' }}>{opt}</span>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
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
                  {currentIdx === questions.length - 1 ? 'Submit' : 'Save & Next'}
                </button>
              </div>
            </div>

            {/* Right Column (Sidebars) */}
            <div className="quiz-sidebar" style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '1.5rem', minWidth: '0', boxSizing: 'border-box' }}>
              
              {/* Question Navigator */}
              <div style={{ background: '#1e293b', borderRadius: '1.25rem', padding: '1.5rem', border: '1px solid #334155' }}>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
                  QUESTION NAVIGATOR
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(42px, 1fr))', gap: '0.6rem' }}>
                  {questions.map((_, i) => {
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
                    #12
                  </div>
                </div>

                <div style={{ background: '#334155', borderRadius: '0.75rem', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#f8fafc', marginBottom: '0.25rem' }}>Answered</div>
                    <div style={{ fontSize: '0.7rem', color: '#cbd5e1' }}>{answeredCount} saved</div>
                  </div>
                  <div style={{ background: '#475569', padding: '0.4rem 0.75rem', borderRadius: '0.5rem', fontSize: '0.9rem', fontWeight: 800, color: '#f8fafc' }}>
                    {answeredCount}/{questions.length}
                  </div>
                </div>

              </div>
            </div>
          </div>
        ) : (
          /* Result Screen */
          <div>
            <div style={{ background: '#ffffff', borderRadius: '1.25rem', padding: '3rem', color: '#0f172a', textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🏆</div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Match Completed!</h2>
              <p style={{ color: '#64748b', marginBottom: '2rem' }}>You have successfully completed the {currentQuiz.title}.</p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', minWidth: '150px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>FINAL SCORE</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a' }}>{score}/{questions.length}</div>
                </div>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', minWidth: '150px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>YOUR RANK</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a' }}>#12</div>
                </div>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', minWidth: '150px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>TIME TAKEN</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a' }}>{formatTime((12 * 60) - timeLeft)}</div>
                </div>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '1rem', padding: '1.5rem', minWidth: '150px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '0.5rem' }}>STATUS</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: score > (questions.length/2) ? '#10b981' : '#f59e0b' }}>
                    {score > (questions.length/2) ? 'Qualified' : 'Needs Practice'}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <button 
                  onClick={() => navigate('/game-home')}
                  style={{
                    background: '#3b82f6', border: 'none', color: '#ffffff',
                    padding: '1rem 3rem', borderRadius: '0.75rem', fontWeight: 800, fontSize: '1rem', cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  Return to Game Zone
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
      
      <style>{`
        @media (max-width: 1024px) {
          .quiz-main-card, .quiz-sidebar {
            flex: 1 1 100% !important;
          }
        }
        @media (max-width: 768px) {
          .quiz-main-card {
            border-radius: 1.25rem !important;
          }
          .quiz-stat-box {
            padding: 0.5rem 0.75rem !important;
          }
        }
        @media (max-width: 480px) {
          .quiz-main-card {
            padding: 1rem !important;
          }
          button {
            padding: 0.6rem 1rem !important;
            font-size: 0.8rem !important;
            flex: 1;
            min-width: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default MatchQuizRoom;
