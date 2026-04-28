import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import UpcomingQuizzes from '../components/UpcomingQuizzes';

// Import Assets
import studyIcon from '../assets/study-icon.png';
import sportsIcon from '../assets/sports-icon.png';
import movieIcon from '../assets/movie-icon.png';
import newsIcon from '../assets/news-icon.png';

const HomeChoicePage = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('user_name') || 'Scholar';

  const quizRooms = [
    {
      id: 'study',
      title: 'Study Quiz',
      desc: 'SSC, GK, reasoning and exam-style questions for serious aspirants.',
      icon: studyIcon,
      prize: '₹500',
      entry: '₹10',
      players: '124',
      time: '02:15:30',
      path: '/study-home',
      btnColor: 'primary'
    },
    {
      id: 'sports',
      title: 'Sports Quiz',
      desc: 'Cricket, IPL, match awareness and sports knowledge battle.',
      icon: sportsIcon,
      prize: '₹500',
      entry: '₹10',
      players: '255',
      time: '03:42:18',
      path: '/game-home',
      btnColor: 'secondary'
    },
    {
      id: 'movie',
      title: 'Movie Quiz',
      desc: 'Bollywood, Hollywood, actors, songs, dialogues and cinema trivia.',
      icon: movieIcon,
      prize: '₹500',
      entry: '₹10',
      players: '172',
      time: '05:20:45',
      path: '/game-home',
      btnColor: 'orange'
    },
    {
      id: 'news',
      title: 'Daily News Quiz',
      desc: 'News, current affairs, India, world affairs and daily awareness.',
      icon: newsIcon,
      prize: '₹500',
      entry: '₹10',
      players: '154',
      time: '06:10:05',
      path: '/study-home',
      btnColor: 'blue'
    }
  ];

  const tabs = ['All Rooms', 'Live', 'Upcoming', 'My Joined'];
  const [selectedTab, setSelectedTab] = React.useState('All Rooms');

  return (
    <div className="quiz-room-bg">
      <div className="container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        
        {/* Welcome Header */}
        <div className="animate-slide-up" style={{ marginBottom: '2.5rem' }}>
           <p style={{ fontSize: '0.85rem', fontWeight: 900, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>QUIZ ROOM</p>
           <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em' }}>Choose your contest room</h1>
        </div>

        {/* Hero Banner Section */}
        {selectedTab === 'All Rooms' && (
          <div className="quiz-banner-card animate-slide-up stagger-1">
            <div className="quiz-banner-overlay"></div>
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
              <div style={{ flex: 1, minWidth: '300px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', padding: '6px 16px', borderRadius: '999px', marginBottom: '1.5rem', backdropFilter: 'blur(5px)' }}>
                  <Sparkles size={14} color="#38bdf8" fill="#38bdf8" />
                  <span style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>QUIZ LIVE FORMAT</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>Eight makes people great 😎</h2>
                <p style={{ fontSize: '1rem', opacity: 0.8, fontWeight: 500, maxWidth: '500px', lineHeight: 1.5 }}>Every quiz room starts with a countdown. Once the contest begins, users get 8 minutes to answer 10 questions. Rank is based on accuracy and time efficiency.</p>
              </div>
              
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div className="quiz-stat-box">
                  <p style={{ fontSize: '0.7rem', fontWeight: 800, opacity: 0.7, marginBottom: '0.5rem', textTransform: 'uppercase' }}>QUESTIONS</p>
                  <p style={{ fontSize: '1.8rem', fontWeight: 900 }}>10</p>
                </div>
                <div className="quiz-stat-box" style={{ background: 'rgba(56, 189, 248, 0.15)', borderColor: 'rgba(56, 189, 248, 0.3)' }}>
                  <p style={{ fontSize: '0.7rem', fontWeight: 800, color: '#7dd3fc', marginBottom: '0.5rem', textTransform: 'uppercase' }}>DURATION</p>
                  <p style={{ fontSize: '1.8rem', fontWeight: 900 }}>8 Min</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div style={{ margin: '2.5rem 0', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }} className="animate-slide-up stagger-2">
          {tabs.map((tab) => (
            <button 
              key={tab} 
              className={`quiz-tab ${selectedTab === tab ? 'active' : ''}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {selectedTab === 'Upcoming' ? (
          <UpcomingQuizzes />
        ) : selectedTab === 'All Rooms' ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2" style={{ display: 'grid' }}>
            {quizRooms.map((room, idx) => (
              <div key={room.id} className={`quiz-card-premium animate-slide-up stagger-${(idx % 4) + 1}`}>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                      <div className="quiz-icon-container">
                        <img src={room.icon} alt={room.title} />
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#fee2e2', color: '#ef4444', padding: '4px 10px', borderRadius: '8px', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1rem' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }}></div>
                            LIVE
                        </div>
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '0.5rem' }}>{room.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500, lineHeight: 1.5, marginBottom: '1.5rem', minHeight: '3rem' }}>{room.desc}</p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                      <div className="quiz-metric-pill">Prize <strong>{room.prize}</strong></div>
                      <div className="quiz-metric-pill">Entry <strong>{room.entry}</strong></div>
                      <div className="quiz-metric-pill">Players <strong>{room.players}</strong></div>
                    </div>
                  </div>

                  <div style={{ width: '100%', maxWidth: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '1px solid #f1f5f9', paddingLeft: '1.5rem' }} className="mobile-full-width">
                    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                      <p style={{ fontSize: '0.65rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '0.5rem' }}>STARTS IN</p>
                      <p style={{ fontSize: '1.5rem', fontWeight: 900, color: '#4f46e5', fontFamily: 'monospace' }}>{room.time}</p>
                      <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', marginTop: '0.5rem' }}>Quiz Timings Today, 10:00 AM</p>
                      <p style={{ fontSize: '0.7rem', fontWeight: 700, color: '#94a3b8' }}>10 Questions • 8 Minutes</p>
                    </div>

                    <button className={`quiz-join-btn ${room.btnColor}`} onClick={() => {
                      const isLoggedIn = !!localStorage.getItem("play11_user");
                      let targetPath = room.id === 'study' ? '/dummy-quiz-flow' : room.path;

                      if (isLoggedIn) {
                        navigate(targetPath);
                      } else {
                        localStorage.setItem("auth_redirect", targetPath);
                        navigate("/register");
                      }
                    }}>
                      Join Quiz @ {room.entry}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex-center" style={{ padding: '4rem', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#94a3b8' }}>Section {selectedTab} under construction</p>
            <button className="quiz-tab active" onClick={() => setSelectedTab('All Rooms')}>Back to All Rooms</button>
          </div>
        )}
      </div>
      
      <style>{`
        .mobile-full-width {
          @media (max-width: 480px) {
            max-width: 100% !important;
            border-left: none !important;
            padding-left: 0 !important;
            border-top: 1px solid #f1f5f9;
            padding-top: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeChoicePage;
