import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const quizData = {
  '1': {
    title: 'MI vs KKR Match Quiz',
    questions: [
      { q: 'Choose your Captain for MI vs KKR', options: ["Rohit Sharma", "Sunil Narine", "Hardik Pandya", "Andre Russell"] },
      { q: 'How many times has MI won the IPL trophy?', options: ["3", "4", "5", "6"] },
      { q: 'Who is the leading run-scorer for MI in IPL history?', options: ["Sachin Tendulkar", "Rohit Sharma", "Kieron Pollard", "Suryakumar Yadav"] },
      { q: 'Which bowler has taken the most wickets for KKR?', options: ["Sunil Narine", "Andre Russell", "Piyush Chawla", "Varun Chakaravarthy"] },
      { q: 'Who is known as "Hitman" in the MI squad?', options: ["Ishan Kishan", "Hardik Pandya", "Rohit Sharma", "Jasprit Bumrah"] },
      { q: 'Which KKR player is known as "Muscle Russell"?', options: ["Chris Lynn", "Andre Russell", "Sunil Narine", "Eoin Morgan"] },
      { q: 'What is the home ground of Kolkata Knight Riders?', options: ["Wankhede", "Eden Gardens", "Chinnaswamy", "Chepauk"] },
      { q: 'Who was the first captain of Mumbai Indians?', options: ["Sachin Tendulkar", "Harbhajan Singh", "Shaun Pollock", "Sanath Jayasuriya"] },
      { q: 'Which player has won the MVP award for KKR?', options: ["Gautam Gambhir", "Sunil Narine", "Jacques Kallis", "Robin Uthappa"] },
      { q: 'Who holds the record for fastest IPL fifty for KKR?', options: ["Yusuf Pathan", "Andre Russell", "Pat Cummins", "Sunil Narine"] },
      { q: 'Which year did KKR win their first IPL title?', options: ["2010", "2011", "2012", "2014"] }
    ]
  },
  '2': {
    title: 'RCB vs CSK Quiz',
    questions: [
      { q: 'Choose your Captain for RCB vs CSK', options: ["Faf du Plessis", "MS Dhoni", "Virat Kohli", "Ravindra Jadeja"] },
      { q: 'How many IPL titles has Chennai Super Kings won?', options: ["3", "4", "5", "6"] },
      { q: 'Who holds the record for highest individual score for RCB?', options: ["Virat Kohli", "AB de Villiers", "Chris Gayle", "Glenn Maxwell"] },
      { q: 'Who is known as "Thala" in the CSK squad?', options: ["Suresh Raina", "Ravindra Jadeja", "MS Dhoni", "Dwayne Bravo"] },
      { q: 'What is the home ground of Royal Challengers Bangalore?', options: ["Wankhede", "Eden Gardens", "Chinnaswamy", "Chepauk"] },
      { q: 'Which CSK player is famous for his "helicopter shot"?', options: ["MS Dhoni", "Suresh Raina", "Matthew Hayden", "Ambati Rayudu"] },
      { q: 'Who is the leading run-scorer in IPL history?', options: ["David Warner", "Rohit Sharma", "Virat Kohli", "Shikhar Dhawan"] },
      { q: 'Which team has the highest team total in IPL history?', options: ["CSK", "RCB", "MI", "SRH"] },
      { q: 'Who was the first player to take 200 wickets in IPL?', options: ["Lasith Malinga", "Amit Mishra", "Yuzvendra Chahal", "Dwayne Bravo"] },
      { q: 'Who is the highest run-scorer for CSK in IPL?', options: ["MS Dhoni", "Suresh Raina", "Faf du Plessis", "Ruturaj Gaikwad"] },
      { q: 'Which team did Faf du Plessis play for before RCB?', options: ["MI", "CSK", "DC", "PBKS"] }
    ]
  },
  '3': {
    title: 'Cricket Knowledge Practice',
    questions: [
      { q: 'Who won the first Cricket World Cup?', options: ["Australia", "West Indies", "India", "England"] },
      { q: 'Which player has scored the most centuries in international cricket?', options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Jacques Kallis"] },
      { q: 'What is the length of a standard cricket pitch?', options: ["20 yards", "22 yards", "24 yards", "18 yards"] },
      { q: 'Which country is known as the "Proteas"?', options: ["Australia", "New Zealand", "South Africa", "West Indies"] },
      { q: 'Who was the first batsman to score a double century in ODIs?', options: ["Virender Sehwag", "Sachin Tendulkar", "Rohit Sharma", "Chris Gayle"] },
      { q: 'Which bowler has taken the most wickets in Test cricket?', options: ["Shane Warne", "James Anderson", "Muttiah Muralitharan", "Anil Kumble"] },
      { q: 'In which year was the first T20 International played?', options: ["2003", "2004", "2005", "2007"] },
      { q: 'What is the maximum number of overs a bowler can bowl in an ODI?', options: ["10", "12", "15", "20"] },
      { q: 'Who is known as the "God of Cricket"?', options: ["Don Bradman", "Brian Lara", "Sachin Tendulkar", "Viv Richards"] },
      { q: 'Which stadium is known as the "Mecca of Cricket"?', options: ["MCG", "Eden Gardens", "Lord's", "The Oval"] }
    ]
  }
};

const MatchQuizRoom = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const currentQuiz = quizData[id] || quizData['1'];
  const questions = currentQuiz.questions;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({}); // Stores answers as { questionIndex: optionIndex }
  const [timeLeft, setTimeLeft] = useState(8 * 60 + 45); // 08:45

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionClick = (index) => {
    setAnswers({ ...answers, [currentIdx]: index });
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Quiz finished, go back to home or a results page
      navigate('/game-home');
    }
  };

  const handleBack = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    } else {
      navigate('/game-home');
    }
  };

  const currentQuestion = questions[currentIdx];
  const selectedOption = answers[currentIdx];
  const options = currentQuestion.options;

  return (
    <div style={{ minHeight: '100vh', background: '#ffffff', display: 'flex', justifyContent: 'center', padding: '2rem 1rem', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '800px' }}>
        
        {/* Header Texts */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ color: '#3b82f6', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            IPL QUIZ ROOM PREVIEW
          </h4>
          <h1 style={{ color: '#0f172a', fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
            {currentQuiz.title}
          </h1>
        </div>

        {/* Quiz Card */}
        <div style={{ background: '#0b1426', borderRadius: '1.5rem', padding: '2rem', color: '#ffffff', position: 'relative' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
            <div>
              <p style={{ color: '#60a5fa', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                QUESTION {currentIdx + 1} OF {questions.length}
              </p>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }}>
                {currentQuestion.q}
              </h2>
            </div>
            <div style={{ background: '#1e293b', padding: '0.4rem 1rem', borderRadius: '999px', display: 'inline-block' }}>
              <span style={{ color: '#fca5a5', fontSize: '0.8rem', fontWeight: 700 }}>2x Points</span>
            </div>
          </div>

          {/* Stats Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ background: '#111c33', padding: '1rem', borderRadius: '1rem', textAlign: 'center' }}>
              <p style={{ color: '#64748b', fontSize: '0.65rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '0.05em' }}>PICKS LEFT</p>
              <p style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>{questions.length - Object.keys(answers).length}</p>
            </div>
            <div style={{ background: '#111c33', padding: '1rem', borderRadius: '1rem', textAlign: 'center' }}>
              <p style={{ color: '#64748b', fontSize: '0.65rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '0.05em' }}>TIMER</p>
              <p style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>{formatTime(timeLeft)}</p>
            </div>
            <div style={{ background: '#111c33', padding: '1rem', borderRadius: '1rem', textAlign: 'center' }}>
              <p style={{ color: '#64748b', fontSize: '0.65rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '0.05em' }}>RANK</p>
              <p style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#fcd34d' }}>#24</p>
            </div>
          </div>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
            {options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              return (
                <div 
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  style={{
                    background: isSelected ? '#064e3b' : '#1e3a8a',
                    border: isSelected ? '1px solid #10b981' : '1px solid transparent',
                    borderRadius: '0.75rem',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    background: isSelected ? '#ffffff' : '#3b82f6', 
                    color: isSelected ? '#064e3b' : '#ffffff',
                    borderRadius: '0.5rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    opacity: isSelected ? 1 : 0.8
                  }}>
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span style={{ fontSize: '1rem', fontWeight: 700 }}>{option}</span>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button 
              onClick={handleBack}
              style={{
                background: 'transparent',
                border: '1px solid #334155',
                color: '#ffffff',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.75rem',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              Back
            </button>
            <button 
              onClick={handleNext}
              disabled={selectedOption === undefined}
              style={{
                background: selectedOption === undefined ? '#475569' : '#60a5fa',
                border: 'none',
                color: '#ffffff',
                padding: '0.75rem 2rem',
                borderRadius: '0.75rem',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: selectedOption === undefined ? 'not-allowed' : 'pointer',
                boxShadow: selectedOption === undefined ? 'none' : '0 4px 14px 0 rgba(96, 165, 250, 0.39)'
              }}
            >
              {currentIdx === questions.length - 1 ? 'Submit' : 'Save & Next'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MatchQuizRoom;
