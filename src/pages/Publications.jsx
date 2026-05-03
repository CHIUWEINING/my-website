import { profile, publications } from '../data';

function PaperIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
    </svg>
  );
}
function CodeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
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
function DemoIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
    </svg>
  );
}
function SlidesIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  );
}
function ImagePlaceholder() {
  return (
    <div style={{
      width: '100%', height: '220px',
      background: 'var(--stone)',
      borderBottom: '1px solid var(--border)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: '10px', color: 'var(--muted)',
    }}>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '.05em', opacity: .5 }}>
        add your teaser image
      </span>
    </div>
  );
}

export default function Publications() {
  const { name } = profile;

  return (
    <div className="page-wrap">

      {/* Hero */}
      <header style={{ padding: '60px 0 40px', borderBottom: '1px solid var(--border)' }}>
        <p className="sec-label">Research Output</p>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: '2.2rem', fontWeight: 400, marginBottom: '14px' }}>
          Publications
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--muted)', fontWeight: 300 }}>
          Full list of peer-reviewed papers and contributions.{' '}
          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>{name}</strong>{' '}
          is marked in bold in author lists.
        </p>
      </header>

      {/* Publication cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '48px 0' }}>
        {publications.map((pub) => (
          <article
            key={pub.id}
            id={pub.id}
            style={{
              background: 'var(--warm-white)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              overflow: 'hidden',
              transition: 'box-shadow 0.2s',
            }}
          >
            {/* Teaser image */}
            {pub.image ? (
              <img
                src={pub.image}
                alt={`Teaser for ${pub.title}`}
                style={{ width: '100%', height: '220px', objectFit: 'cover', borderBottom: '1px solid var(--border)' }}
              />
            ) : (
              <ImagePlaceholder />
            )}

            {/* Body */}
            <div style={{ padding: '28px 32px 32px' }}>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                {pub.venue} · {pub.badge}
              </p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', fontWeight: 400, lineHeight: 1.25, marginBottom: '8px' }}>
                {pub.title}
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>
                {pub.authors.map((author, i) => (
                  <span key={i}>
                    {author.includes('Wei-Ning Chiu')
                      ? <strong style={{ color: 'var(--text)', fontWeight: 600 }}>{author}</strong>
                      : author}
                    {i < pub.authors.length - 1 && ', '}
                  </span>
                ))}
              </p>

              {/* Tags */}
              <div className="tag-row">
                {pub.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {/* Summary */}
              <p style={{
                fontSize: '14px', lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300,
                borderLeft: '2px solid var(--border)', paddingLeft: '16px', marginBottom: '22px',
                whiteSpace: 'pre-line',
              }}>
                {pub.summary}
              </p>

              {/* Action buttons */}
              <div className="btn-row">
                {pub.links.paper && (
                  <a className="pub-btn btn-forest" href={pub.links.paper} target="_blank" rel="noopener noreferrer">
                    <PaperIcon /> Paper
                  </a>
                )}
                {pub.links.code && (
                  <a className="pub-btn btn-dark" href={pub.links.code} target="_blank" rel="noopener noreferrer">
                    <CodeIcon /> Code
                  </a>
                )}
                {pub.links.demo && (
                  <a className="pub-btn btn-rust" href={pub.links.demo} target="_blank" rel="noopener noreferrer">
                    <DemoIcon /> Demo
                  </a>
                )}
                {pub.links.slides && (
                  <a className="pub-btn" href={pub.links.slides} target="_blank" rel="noopener noreferrer"
                    style={{ background: '#555' }}>
                    <SlidesIcon /> Slides/Poster
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
