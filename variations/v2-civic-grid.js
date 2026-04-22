// Variation 2 — "Civic Grid"
// All-sans, strict 12-col, mono labels. Light + dark themes via prop.

const V2 = ({ dark = false } = {}) => {
  // Theme tokens
  const T = dark ? {
    ink: '#F2EFE6',        // foreground (was black)
    bg: '#0E0F11',          // page bg
    cardBg: '#17191C',      // card surface
    darkCardBg: '#F2EFE6',  // inverted card (the "highlighted" track)
    darkCardInk: '#0E0F11',
    muted: '#8a8d92',
    mutedStrong: '#c7cad0',
    amber: '#E39A2B',       // brighter amber for dark bg
    rule: '#2a2d32',
    ruleSoft: '#ffffff14',
  } : {
    ink: '#111111',
    bg: '#F6F4EF',
    cardBg: '#FFFFFF',
    darkCardBg: '#111111',
    darkCardInk: '#F6F4EF',
    muted: '#6b6b66',
    mutedStrong: '#3a3a36',
    amber: '#C67A17',
    rule: '#111111',
    ruleSoft: '#11111126',
  };

  const modules = [
    { n: '01', icon: 'mod1', t: 'Ai Basics', sub: 'What It Is, What It Does, and How to Talk to It', d: 'A plain-language introduction to Ai tools — what they are, how they work, and how to start using them. No experience required.', tag: 'Foundations' },
    { n: '02', icon: 'mod2', t: 'Ai on the Job', sub: 'Use Case Scenarios for Every Kind of Work', d: 'Real-world examples of Ai solving problems across industries — from the office to the field, the farm to the shop floor.', tag: 'Applied' },
    { n: '03', icon: 'mod3', t: 'Ai in Action', sub: 'Hands-On Problem Solving and Prompting Techniques', d: 'A guided lab where participants work through real-world challenges using Ai tools, covering prompting techniques and the science behind talking to Ai effectively.', tag: 'Lab' },
    { n: '04', icon: 'mod4', t: 'The Ai Landscape', sub: 'Vision, Reasoning, and Agentic Models', d: 'A practical orientation to the different types of Ai — what each one is built to do, how they differ, and what\u2019s happening under the hood.', tag: 'Orientation' },
    { n: '05', icon: 'mod5', t: 'Failure Mode', sub: 'How Not to Lose Your Mind When Things Go Wrong', d: 'What Ai failure actually looks like, how to recognize it, and how to think about adjusting Ai solutions as problems get bigger and more complex.', tag: 'Resilience' },
    { n: '06', icon: 'mod6', t: 'Proof of Work', sub: 'Building an Ai Skills Portfolio', d: 'Assembling a real, shareable record of what participants have built and can do — ready for employers, interviews, and whatever comes next.', tag: 'Portfolio' },
  ];

  const goals = [
    { k: 'G.01', icon: 'partner', h: 'Ai as Career Partner', q: 'A collaborator, not a competitor. Ai is built to extend what workers can do — not replace what they are.', b: 'We move beyond the narrative of replacement. This program focuses on Ai as a cognitive extension — extending your reach, surfacing insights you might miss, and handling the friction of technical tasks so you can focus on high-value decision-making.' },
    { k: 'G.02', icon: 'skills', h: 'Skills First, Tools Second', q: 'The tool changes. The judgment behind it doesn\u2019t. Build foundational thinking that transfers across any platform.', b: 'Software interfaces change every month, but the logic of problem-solving remains constant. We teach you how to think in systems, structured prompts, and iterative verification loops that stay relevant across any breakthrough technology.' },
    { k: 'G.03', icon: 'agency', h: 'Agency Over Everything', q: 'The moment a worker understands the tool, it belongs to them. Build a skill stack specific to your unique goals.', b: 'Technology is only a tool until you master it; then it becomes an extension of your own agency. Our curriculum gives you the confidence to build custom workflows, rather than waiting for software vendors to provide them for you.' },
  ];

  const sans = `'Inter Tight', 'Inter', system-ui, sans-serif`;
  const mono = `'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace`;

  const Label = ({ children, color }) => (
    <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', color: color || T.muted }}>{children}</span>
  );

  const Icon = ({ name, size = 28, color }) => {
    const c = color || T.amber;
    const sw = 1.6;
    const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: c, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (name === 'partner') return (<svg {...common}><circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M3 19c0-2.8 2.2-5 5-5s5 2.2 5 5"/><path d="M11 19c0-2.8 2.2-5 5-5s5 2.2 5 5"/></svg>);
    if (name === 'skills') return (<svg {...common}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 12h8M12 8v8"/><circle cx="12" cy="12" r="2"/></svg>);
    if (name === 'agency') return (<svg {...common}><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>);
    // Module icons
    if (name === 'mod1') return (<svg {...common}><path d="M4 5h16v11H9l-5 4V5z"/><circle cx="9" cy="10.5" r="0.8" fill={c} stroke="none"/><circle cx="12" cy="10.5" r="0.8" fill={c} stroke="none"/><circle cx="15" cy="10.5" r="0.8" fill={c} stroke="none"/></svg>);
    if (name === 'mod2') return (<svg {...common}><rect x="3" y="7" width="18" height="13" rx="1.5"/><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"/><path d="M3 13h18"/></svg>);
    if (name === 'mod3') return (<svg {...common}><path d="M9 3v6l-5 10a2 2 0 001.8 3h12.4a2 2 0 001.8-3l-5-10V3"/><path d="M7 3h10"/><path d="M7.5 14h9"/></svg>);
    if (name === 'mod4') return (<svg {...common}><path d="M4 6l5-2 6 2 5-2v14l-5 2-6-2-5 2V6z"/><path d="M9 4v16M15 6v16"/></svg>);
    if (name === 'mod5') return (<svg {...common}><path d="M10.3 3.9L2.5 17a2 2 0 001.7 3h15.6a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"/><path d="M12 9v4"/><circle cx="12" cy="16.5" r="0.8" fill={c} stroke="none"/></svg>);
    if (name === 'mod6') return (<svg {...common}><circle cx="12" cy="10" r="6"/><path d="M9 9.5l2 2 4-4"/><path d="M8.5 15l-2 6 5.5-3 5.5 3-2-6"/></svg>);
    return null;
  };

  const Avatar = ({ initials, bg, fg, size = 32 }) => (
    <div style={{ width: size, height: size, borderRadius: '50%', background: bg, color: fg, display: 'grid', placeItems: 'center', fontFamily: mono, fontSize: size * 0.36, fontWeight: 600, letterSpacing: '0.02em', flexShrink: 0 }}>{initials}</div>
  );

  return (
    <div style={{ background: T.bg, color: T.ink, fontFamily: sans, width: 1280, minHeight: 1600 }}>
      {/* NAV */}
      <div style={{ padding: '20px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${T.rule}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <img src={dark ? 'assets/spark-plug-bone.png' : 'assets/spark-plug-ink.png'} alt="Spark Ai" style={{ height: 36, width: 'auto', display: 'block' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.01em' }}>SPARK<span style={{ color: T.amber }}>.</span>Ai</div>
            <div style={{ width: 1, height: 14, background: T.rule, opacity: 0.4 }} />
            <span style={{ fontFamily: mono, fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.muted }}>Workforce Development</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <Label>Program</Label>
          <Label>Modules</Label>
          <Label>Tracks</Label>
          <Label>Funding</Label>
          <a href="#student-login" style={{
            fontFamily: mono,
            fontSize: 11,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: T.amber,
            textDecoration: 'none',
            border: `1px solid ${T.amber}`,
            padding: '8px 14px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontWeight: 500,
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
              <rect x="4" y="11" width="16" height="10" rx="1"/>
              <path d="M8 11V7a4 4 0 018 0v4"/>
            </svg>
            Student Login
          </a>
        </div>
      </div>

      {/* HERO */}
      <div style={{ padding: '80px 56px 64px', borderBottom: `1px solid ${T.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
          <div style={{ gridColumn: '1 / 9' }}>
            <div style={{ display: 'flex', gap: 24, marginBottom: 40 }}>
              <Label color={T.amber}>◉ Stage One of Six</Label>
              <Label>Ai Foundations Series</Label>
            </div>
            <h1 style={{ fontSize: 112, lineHeight: 0.92, fontWeight: 500, letterSpacing: '-0.035em', margin: 0 }}>
              Ai Foundations<span style={{ color: T.amber }}>.</span>
            </h1>
            <div style={{ fontSize: 28, lineHeight: 1.25, marginTop: 28, maxWidth: 720, fontWeight: 400, letterSpacing: '-0.01em' }}>
              A skills-first approach to Ai workforce development. Built for the workers who actually do the work.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 40 }}>
              <div style={{ display: 'flex' }}>
                {[
                  { i: 'MR', bg: '#C67A17', fg: '#fff' },
                  { i: 'JT', bg: '#1f2d3d', fg: '#F2EFE6' },
                  { i: 'AK', bg: '#7a5a36', fg: '#fff' },
                  { i: 'DC', bg: '#45584d', fg: '#F2EFE6' },
                ].map((a, i) => (
                  <div key={i} style={{ marginLeft: i === 0 ? 0 : -10, border: `2px solid ${T.bg}`, borderRadius: '50%' }}>
                    <Avatar initials={a.i} bg={a.bg} fg={a.fg} size={36} />
                  </div>
                ))}
              </div>
              <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', color: T.muted }}>
                Designed for participants across industries — office, field, farm, shop floor.
              </div>
            </div>
          </div>
          <div style={{ gridColumn: '10 / 13', borderLeft: `1px solid ${T.rule}`, paddingLeft: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                ['Client', 'Momentum Work, Inc.'],
                ['Version', '1.0'],
                ['Stage', 'One of Six'],
                ['Framework', 'DOL · Feb 2026'],
                ['Funding', 'WIOA Eligible'],
                ['Contact', 'mike@sparkai805.com'],
              ].map(([k, v], i) => (
                <div key={i}>
                  <Label>{k}</Label>
                  <div style={{ fontSize: 15, marginTop: 2, fontWeight: 500 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* GOALS */}
      <div style={{ padding: '72px 56px', borderBottom: `1px solid ${T.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24, marginBottom: 40 }}>
          <div style={{ gridColumn: '1 / 4' }}>
            <Label>§ 01 — Core Principles</Label>
            <h2 style={{ fontSize: 32, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 0', fontWeight: 500 }}>
              The Core Principles.
            </h2>
          </div>
          <div style={{ gridColumn: '5 / 13', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {goals.map((g, i) => (
              <div key={i} style={{ background: T.cardBg, border: `1px solid ${T.rule}`, padding: 28, display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Label color={T.amber}>{g.k}</Label>
                  <div style={{ width: 8, height: 8, background: T.amber }} />
                </div>
                <div style={{ width: 48, height: 48, border: `1px solid ${T.amber}`, display: 'grid', placeItems: 'center', marginBottom: 4 }}>
                  <Icon name={g.icon} size={24} />
                </div>
                <h3 style={{ fontSize: 22, lineHeight: 1.15, margin: 0, fontWeight: 600, letterSpacing: '-0.015em' }}>{g.h}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.45, margin: 0, fontStyle: 'italic', color: T.amber, fontWeight: 500 }}>“{g.q}”</p>
                <div style={{ height: 1, background: T.ruleSoft, margin: '4px 0' }} />
                <p style={{ fontSize: 14, lineHeight: 1.55, margin: 0, color: T.mutedStrong }}>{g.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TRACKS */}
      <div style={{ padding: '72px 56px', borderBottom: `1px solid ${T.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24 }}>
          <div style={{ gridColumn: '1 / 4' }}>
            <Label>§ 02 — Tracks</Label>
            <h2 style={{ fontSize: 32, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 0', fontWeight: 500 }}>
              Two ways through, one curriculum.
            </h2>
          </div>
          <div style={{ gridColumn: '5 / 13', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div style={{ border: `1px solid ${T.rule}`, padding: 28, background: T.cardBg }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 24 }}>
                <Label>Track A</Label>
                <Label>6 sessions</Label>
              </div>
              <h3 style={{ fontSize: 30, letterSpacing: '-0.02em', margin: '0 0 6px', fontWeight: 600 }}>Focused Series</h3>
              <div style={{ fontSize: 14, color: T.muted, marginBottom: 24 }}>Modules 1–3</div>
              <div style={{ borderTop: `1px solid ${T.ruleSoft}`, paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div><Label>Cadence</Label><div style={{ fontSize: 14, marginTop: 2 }}>2× per month · 1–2 hrs</div></div>
                <div><Label>Covers</Label><div style={{ fontSize: 14, marginTop: 2 }}>Core Ai fluency and daily work tools</div></div>
                <div><Label>Outcome</Label><div style={{ fontSize: 14, marginTop: 2 }}>Job-ready in core Ai skill areas</div></div>
              </div>
            </div>
            <div style={{ border: `1px solid ${T.rule}`, padding: 28, background: T.darkCardBg, color: T.darkCardInk, position: 'relative' }}>
              <div style={{ position: 'absolute', top: -1, right: -1, background: T.amber, color: '#0E0F11', padding: '6px 10px', fontFamily: mono, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Full curriculum</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 24 }}>
                <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', color: dark ? '#6b6b66' : '#a8a59c' }}>Track B</span>
                <span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', color: dark ? '#6b6b66' : '#a8a59c' }}>12 sessions</span>
              </div>
              <h3 style={{ fontSize: 30, letterSpacing: '-0.02em', margin: '0 0 6px', fontWeight: 600 }}>Full Program</h3>
              <div style={{ fontSize: 14, color: dark ? '#6b6b66' : '#a8a59c', marginBottom: 24 }}>All 6 modules</div>
              <div style={{ borderTop: `1px solid ${dark ? '#11111122' : '#F6F4EF22'}`, paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div><span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', color: dark ? '#6b6b66' : '#a8a59c' }}>Cadence</span><div style={{ fontSize: 14, marginTop: 2 }}>2× per month · 1–2 hrs</div></div>
                <div><span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', color: dark ? '#6b6b66' : '#a8a59c' }}>Covers</span><div style={{ fontSize: 14, marginTop: 2 }}>Includes automation, accessibility, and portfolio build</div></div>
                <div><span style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', color: dark ? '#6b6b66' : '#a8a59c' }}>Outcome</span><div style={{ fontSize: 14, marginTop: 2 }}>Verifiable Ai workflow portfolio</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODULES */}
      <div style={{ padding: '72px 56px', borderBottom: `1px solid ${T.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24, marginBottom: 32 }}>
          <div style={{ gridColumn: '1 / 4' }}>
            <Label>§ 03 — Curriculum</Label>
            <h2 style={{ fontSize: 32, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 0', fontWeight: 500 }}>
              Six modules. Sequenced, not separate.
            </h2>
          </div>
          <div style={{ gridColumn: '5 / 13' }}>
            <p style={{ fontSize: 16, lineHeight: 1.55, margin: 0, color: T.mutedStrong, maxWidth: 560 }}>
              Each module compounds on the last. Track A covers the first three. Track B covers all six and concludes with a portfolio build.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, border: `1px solid ${T.rule}` }}>
          {modules.map((m, i) => {
            const lastRow = i >= 4;
            const rightCol = i % 2 === 1;
            return (
              <div key={i} style={{
                padding: 28,
                background: T.cardBg,
                borderRight: !rightCol ? `1px solid ${T.rule}` : 'none',
                borderBottom: !lastRow ? `1px solid ${T.rule}` : 'none',
                minHeight: 220,
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 44, height: 44, border: `1px solid ${T.rule}`, display: 'grid', placeItems: 'center', background: T.bg }}>
                      <Icon name={m.icon} size={22} />
                    </div>
                    <div style={{ fontFamily: mono, fontSize: 14, fontWeight: 500 }}>MOD/{m.n}</div>
                  </div>
                  <Label color={T.amber}>● {m.tag}</Label>
                </div>
                <h3 style={{ fontSize: 26, lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 4px', fontWeight: 600 }}>{m.t}</h3>
                <div style={{ fontSize: 15, color: T.muted, marginBottom: 14, fontStyle: 'italic' }}>{m.sub}</div>
                <p style={{ fontSize: 14, lineHeight: 1.55, margin: 0, color: T.mutedStrong, marginTop: 'auto' }}>{m.d}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* POLICY */}
      <div style={{ padding: '72px 56px', borderBottom: `1px solid ${T.rule}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 24, alignItems: 'center' }}>
          <div style={{ gridColumn: '1 / 4' }}>
            <Label>§ 04 — Funding</Label>
          </div>
          <div style={{ gridColumn: '5 / 10' }}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
              <div style={{ padding: '8px 14px', background: T.amber, color: '#0E0F11', fontFamily: mono, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>WIOA Eligible</div>
              <div style={{ padding: '8px 14px', border: `1px solid ${T.rule}`, fontFamily: mono, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>DOL · Feb 2026</div>
            </div>
            <p style={{ fontSize: 22, lineHeight: 1.3, margin: 0, letterSpacing: '-0.01em', fontWeight: 400 }}>
              Built to the U.S. Department of Labor's Ai Literacy Framework, which directs workforce boards, American Job Centers, and community colleges to integrate Ai literacy — with WIOA funding specifically authorized to support it.
            </p>
          </div>
          <div style={{ gridColumn: '11 / 13', fontFamily: mono, fontSize: 11, letterSpacing: '0.05em', color: T.muted, lineHeight: 1.7 }}>
            Policy ref.<br/>
            DOL-AiL-2026-02<br/>
            <br/>
            Funding<br/>
            Title I · WIOA
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ padding: '40px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: mono, fontSize: 11, letterSpacing: '0.05em', color: T.muted }}>
        <div>Spark Ai · 2026</div>
        <div style={{ display: 'flex', gap: 32 }}>
          <span>Mike Miller</span>
          <span>mike@sparkai805.com</span>
          <span>818.426.2710</span>
          <span>sparkai805.com</span>
        </div>
      </div>
    </div>
  );
};

window.V2 = V2;
