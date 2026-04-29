import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LegalPage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const sections = [
    {
      id: 'terms',
      title: 'Terms & Conditions',
      content: (
        <>
          <p>By accessing QUZO, you agree to these terms. QUZO is a knowledge-based quiz platform where rankings depend on user performance such as accuracy and speed.</p>
          
          <h3>1. Platform Nature</h3>
          <p>QUZO is a <em>knowledge-based quiz platform</em>. Rankings depend on user performance such as accuracy and speed.</p>

          <h3>2. Eligibility</h3>
          <ul>
            <li>Minimum age: 18 years</li>
            <li>One user = one account</li>
            <li>Correct details required</li>
          </ul>

          <h3>3. Quiz Format</h3>
          <ul>
            <li>10 Questions</li>
            <li>8 Minutes</li>
            <li>Answers must be submitted before timer ends</li>
          </ul>

          <h3>4. Ranking System</h3>
          <p>Ranking is based on: Correct answers and Time taken. Higher accuracy + faster completion = better rank.</p>

          <h3>5. Rewards</h3>
          <ul>
            <li>Only declared top-ranked eligible participants receive performance-based rewards.</li>
            <li>Rewards are <em>performance-based and not guaranteed</em>.</li>
            <li>Tie cases → rewards may be split according to policy.</li>
          </ul>

          <h3>6. Fair Play</h3>
          <ul>
            <li>No bots / cheating / multiple accounts.</li>
            <li>Violation = disqualification and potential account suspension.</li>
          </ul>

          <h3>7. Identity Verification</h3>
          <ul>
            <li>Winners may need to verify identity to claim rewards.</li>
            <li>Mismatch in details → next eligible user may be awarded.</li>
          </ul>

          <h3>8. Payments</h3>
          <p>Entry amount is non-refundable (except in specific cases outlined in the Refund Policy).</p>

          <h3>9. Rights</h3>
          <p>QUZO reserves the right to modify contests, cancel quizzes, and update rules at any time.</p>

          <h3>10. Liability</h3>
          <p>We are not responsible for network issues, device problems, or missed participation due to technical errors on the user's end.</p>
        </>
      )
    },
    {
      id: 'refund',
      title: 'Refund Policy',
      content: (
        <>
          <p>QUZO aims to provide a fair and seamless experience. Our refund policy is as follows:</p>
          <ul>
            <li>Entry fees are generally <strong>non-refundable</strong>.</li>
          </ul>
          <h3>Refunds are allowed only if:</h3>
          <ul>
            <li>The quiz is cancelled by QUZO.</li>
            <li>A verified technical failure occurs on our platform that prevents participation.</li>
          </ul>
          <p>Refunds are processed to the original payment method used during the transaction.</p>
        </>
      )
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      content: (
        <>
          <p>Your privacy is important to us. QUZO collects minimal data required for account verification and reward distribution.</p>
          <ul>
            <li>We use OTP-based login for security.</li>
            <li>Personal details are used only for identity verification and platform improvement.</li>
            <li>We do not share your data with unauthorized third parties.</li>
          </ul>
          <p>For detailed inquiries, contact us at support@play11.games.</p>
        </>
      )
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer',
      content: (
        <>
          <h3>Disclaimer – QUZO</h3>
          <ul>
            <li>QUZO is a <strong>knowledge-based quiz platform</strong>.</li>
            <li>It does not involve betting, gambling, or games of chance.</li>
            <li>Outcomes depend solely on user performance, knowledge, and speed.</li>
          </ul>
          <h3>⚠️ Rewards:</h3>
          <ul>
            <li>Rewards are <strong>not guaranteed</strong>.</li>
            <li>They are strictly based on rank and performance in the quiz.</li>
          </ul>
          <p>Users should participate responsibly and within their means.</p>
        </>
      )
    },
    {
      id: 'refer',
      title: 'Refer & Earn',
      content: (
        <>
          <h3>Refer & Earn Program – QUZO</h3>
          <ul>
            <li>Invite users to QUZO via your unique referral code.</li>
            <li>Rewards may be given based on the valid participation of referred users.</li>
          </ul>
          <h3>Not allowed:</h3>
          <ul>
            <li>Creation of fake accounts for referrals.</li>
            <li>Self-referrals or any fraudulent activity.</li>
          </ul>
          <p>QUZO reserves the right to modify, suspend, or terminate the referral program at any time.</p>
        </>
      )
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: (
        <>
          <p>We are here to help you. If you have any questions, concerns, or feedback, please reach out to us.</p>
          <h3>Support Email</h3>
          <p>📧 <a href="mailto:support@play11.games" style={{ color: '#38bdf8', fontWeight: 700 }}>support@play11.games</a></p>
          <p>Our support team typically responds within 24-48 hours.</p>
        </>
      )
    }
  ];

  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <div className="eyebrow">Legal Center</div>
          <h1>Policies & Agreements</h1>
          <p>Everything you need to know about using QUZO platform.</p>
        </div>
      </div>

      <div className="legal-content-wrapper">
        <div className="container">
          <div className="legal-grid">
            <aside className="legal-sidebar">
              <nav>
                {sections.map(section => (
                  <a 
                    key={section.id} 
                    href={`#${section.id}`}
                    className={hash === `#${section.id}` ? 'active' : ''}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>

            <main className="legal-main">
              {sections.map(section => (
                <section key={section.id} id={section.id} className="legal-section">
                  <h2>{section.title}</h2>
                  <div className="legal-text-content">
                    {section.content}
                  </div>
                </section>
              ))}
            </main>
          </div>
        </div>
      </div>

      <style>{`
        .legal-page {
          background: #f8fafc;
          min-height: 100vh;
          color: #1e293b;
        }

        .legal-hero {
          background: #0d1f3c;
          color: white;
          padding: 6rem 0 4rem;
          text-align: center;
        }

        .legal-hero .eyebrow {
          color: #38bdf8;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .legal-hero h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 900;
          margin-bottom: 1rem;
        }

        .legal-hero p {
          color: #94a3b8;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .legal-content-wrapper {
          padding: 4rem 0;
        }

        .legal-grid {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 4rem;
        }

        .legal-sidebar {
          position: sticky;
          top: 100px;
          height: fit-content;
        }

        .legal-sidebar nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .legal-sidebar a {
          padding: 1rem 1.5rem;
          border-radius: 12px;
          color: #64748b;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.2s;
          border: 1px solid transparent;
        }

        .legal-sidebar a:hover {
          color: #0d1f3c;
          background: #f1f5f9;
        }

        .legal-sidebar a.active {
          background: white;
          color: #38bdf8;
          border-color: #e2e8f0;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .legal-main {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .legal-section {
          background: white;
          padding: 3rem;
          border-radius: 24px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          scroll-margin-top: 100px;
        }

        .legal-section h2 {
          font-size: 2rem;
          font-weight: 900;
          color: #0d1f3c;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f1f5f9;
        }

        .legal-text-content {
          line-height: 1.8;
          font-size: 1.05rem;
          color: #475569;
        }

        .legal-text-content h3 {
          color: #1e293b;
          font-size: 1.25rem;
          font-weight: 800;
          margin: 2rem 0 1rem;
        }

        .legal-text-content p {
          margin-bottom: 1.5rem;
        }

        .legal-text-content ul {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }

        .legal-text-content li {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 1024px) {
          .legal-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .legal-sidebar {
            position: relative;
            top: 0;
            order: -1;
          }
          .legal-sidebar nav {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 1rem;
          }
          .legal-sidebar a {
            white-space: nowrap;
          }
        }

        @media (max-width: 640px) {
          .legal-section {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LegalPage;
