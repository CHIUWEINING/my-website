import { Link } from 'react-router-dom';
import { profile, publications, experience } from '../data';

/* ---- SVG icon helpers ---- */
function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}
function ScholarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 8v8M8 12h8"/>
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
        0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
        -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
        .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
        -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844
        a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651
        .64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855
        0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017
        C22 6.484 17.522 2 12 2Z"/>
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

/* ---- Photo Card ---- */
function PhotoCard() {
  const { photo, photoAlt, name } = profile;
  return (
    <div style={{
      background: 'var(--warm-white)',
      border: '1px solid var(--border)',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 2px 24px rgba(0,0,0,.05)',
      flexShrink: 0,
    }}>
      {/* Photo area */}
      <div style={{
        width: '240px',
        aspectRatio: '3/4',
        background: 'var(--stone)',
        borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '10px',
        color: 'var(--muted)',
      }}>
        {photo ? (
          /* ✏️ Once you set photo in data.js, this shows your actual image */
          <img
            src={photo}
            alt={photoAlt}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          /* Placeholder shown until a photo is set */
          <>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.06em', opacity: .5 }}>
              your photo here
            </span>
          </>
        )}
      </div>
      {/* Name card below photo */}
      {/* <div style={{ padding: '14px 18px' }}>
        <div style={{ fontWeight: 600, fontSize: '14px' }}>{name}</div>
        <div style={{ fontSize: '12px', color: 'var(--muted)', marginTop: '3px' }}>
          Researcher · [Institution]
        </div>
      </div> */}
    </div>
  );
}

/* ---- Home Page ---- */
export default function Home() {
  const { name, tagline, bio, contact } = profile;

  return (
    <div className="page-wrap">

      {/* ===== HERO ===== */}
      <header style={{
        padding: '72px 0 60px',
        display: 'flex',
        gap: '48px',
        alignItems: 'flex-start',
        borderBottom: '1px solid var(--border)',
        flexWrap: 'wrap',
      }}>
        {/* Left: text */}
        <div style={{ flex: 1, minWidth: '280px' }}>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '16px' }}>
            {tagline}
          </p>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 4.5vw, 3rem)', lineHeight: 1.08, fontWeight: 400, marginBottom: '18px' }}>
            Hi, I'm <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>{name}</em>.
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '520px', marginBottom: '28px', fontWeight: 300, whiteSpace: 'pre-line' }}>
            {bio}
          </p>

          {/* Contact chips */}
          <div className="chip-row">
            {contact.linkedin && (
              <a className="chip" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon /> LinkedIn
              </a>
            )}
            {contact.email && (
              <a className="chip" href={`mailto:${contact.email}`}>
                <MailIcon /> {contact.email}
              </a>
            )}
            {contact.scholar && (
              <a className="chip" href={contact.scholar} target="_blank" rel="noopener noreferrer">
                <ScholarIcon /> Google Scholar
              </a>
            )}
            {/* {contact.github && (
              <a className="chip" href={contact.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon /> GitHub
              </a>
            )} */}
          </div>
        </div>

        {/* Right: photo */}
        <PhotoCard />
      </header>

      {/* ===== PUBLICATIONS ===== */}
      <div className="section">
        <p className="sec-label">Research</p>
        <h2 className="sec-h2">Selected Publications</h2>
        <div className="pub-list">
          {publications.slice(0, 3).map((pub) => (
            <Link key={pub.id} className="pub-card" to={`/publications#${pub.id}`}>
              <div>
                <p className="pub-venue">{pub.venue}</p>
                <p className="pub-title">{pub.title}</p>
                <p className="pub-authors">{pub.authors.join(', ')}</p>
              </div>
              <div className="pub-arrow"><ArrowIcon /></div>
            </Link>
          ))}
        </div>
        <Link className="view-all" to="/publications">View all publications →</Link>
      </div>

      {/* ===== EXPERIENCE ===== */}
      <div className="section">
        <p className="sec-label">Experience</p>
        <h2 className="sec-h2">Work Experience</h2>
        <div>
          {experience.map((exp, i) => (
            <div key={i} className="exp-item">
              <span className="exp-date">{exp.date}</span>
              <div>
                <p className="exp-role">{exp.role}</p>
                <p className="exp-org">{exp.org}</p>
                <p className="exp-desc" style={{ whiteSpace: 'pre-line' }}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
