const topics = [
  {
    number: '01',
    icon: '◈',
    title: 'Cloud foundations',
    description:
      'Understand cloud computing, shared responsibility, consumption-based pricing, and the difference between IaaS, PaaS, and SaaS.',
    tags: ['Cloud concepts', 'Azure regions', 'Subscriptions'],
  },
  {
    number: '02',
    icon: '⌘',
    title: 'Identity, access & security',
    description:
      'Explore Microsoft Entra ID, authentication, role-based access control, Zero Trust, and the tools that help protect cloud resources.',
    tags: ['Microsoft Entra ID', 'RBAC', 'Zero Trust'],
  },
  {
    number: '03',
    icon: '▦',
    title: 'Azure architecture',
    description:
      'Get comfortable with resource groups, regions, availability zones, virtual networks, and how Azure services fit together.',
    tags: ['Resource groups', 'Networking', 'Resilience'],
  },
  {
    number: '04',
    icon: '▤',
    title: 'Compute, storage & data',
    description:
      'Compare virtual machines, containers, and serverless options, then learn where object, file, and relational data belong.',
    tags: ['Virtual machines', 'Azure Storage', 'Azure SQL'],
  },
  {
    number: '05',
    icon: '✳',
    title: 'AI on Azure',
    description:
      'Build a responsible AI foundation: understand Azure AI services, generative AI concepts, data grounding, and human oversight.',
    tags: ['Azure AI', 'Generative AI', 'Responsible AI'],
  },
  {
    number: '06',
    icon: '↗',
    title: 'Operate with confidence',
    description:
      'Use Azure Monitor and the Well-Architected Framework to think about reliability, cost, performance, and ongoing improvement.',
    tags: ['Azure Monitor', 'Cost Management', 'Well-Architected'],
  },
]

const people = [
  {
    initials: 'IN',
    name: 'Your instructor',
    role: 'Senior DevOps Engineer',
    kind: 'Instructor',
    color: 'violet',
    description:
      'A working engineer who connects cloud concepts to real delivery workflows. Expect practical examples from automation, infrastructure, reliability, and shipping software with confidence.',
    focus: 'Guided demos · Real-world context',
  },
  {
    initials: 'AD',
    name: 'Adekunle',
    role: 'Accountant',
    kind: 'Learner',
    color: 'blue',
    description:
      'Brings a sharp eye for controls, budgets, and making resources accountable. Azure cost management and governance offer a natural bridge from finance experience to cloud operations.',
    focus: 'Cost awareness · Cloud governance',
  },
  {
    initials: 'SH',
    name: 'Shuaibu',
    role: 'Computer Science Graduate',
    kind: 'Learner',
    color: 'mint',
    description:
      'Ready to turn computer science fundamentals into practical cloud skills. Architecture, identity, compute, and hands-on deployments are a strong launchpad for an Azure career.',
    focus: 'Cloud architecture · Hands-on labs',
  },
  {
    initials: 'AL',
    name: 'Alero',
    role: 'Nurse',
    kind: 'Learner',
    color: 'coral',
    description:
      'Brings a care-first perspective to a field where secure, reliable technology matters. The course makes space to connect cloud security and availability to meaningful outcomes for people.',
    focus: 'Security · Reliable services',
  },
  {
    initials: 'OK',
    name: 'Okafor',
    role: 'Electrical Engineer',
    kind: 'Learner',
    color: 'gold',
    description:
      'Already thinks in systems, dependencies, and resilience. Those engineering instincts translate naturally into designing dependable cloud networks and understanding Azure architecture.',
    focus: 'Systems thinking · Resilience',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" />
    </svg>
  )
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Azure Fundamentals home">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span>cloud<span className="brand-dot">.</span>class</span>
    </a>
  )
}

function App() {
  return (
    <div id="top">
      <header className="site-header">
        <div className="nav-shell">
          <Brand />
          <nav aria-label="Main navigation">
            <a href="#learning">What you’ll learn</a>
            <a href="#community">Our community</a>
          </nav>
          <a className="nav-cta" href="#learning">
            Explore the program <ArrowIcon />
          </a>
        </div>
      </header>

      <main>
        <section className="hero section-shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot" /> AZURE FUNDAMENTALS · LEARN TOGETHER</div>
            <h1>Big cloud ideas.<br /><span>Built for everyone.</span></h1>
            <p className="hero-intro">
              A practical, people-first introduction to Microsoft Azure—for curious minds,
              new perspectives, and anyone ready to find their place in the cloud.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#learning">Explore what you’ll learn <ArrowIcon /></a>
              <a className="text-link" href="#community">Meet the class <span>↓</span></a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true">
                {people.slice(0, 4).map((person) => (
                  <span className={`mini-avatar ${person.color}`} key={person.initials}>{person.initials}</span>
                ))}
              </div>
              <p><strong>Different backgrounds.</strong> One shared cloud journey.</p>
            </div>
          </div>
          <div className="hero-visual" aria-label="Illustration of connected Azure cloud services">
            <div className="visual-glow" />
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="orbit-node node-one"><span>01</span></div>
            <div className="orbit-node node-two"><span>AI</span></div>
            <div className="orbit-node node-three"><span>↗</span></div>
            <div className="cloud-core">
              <div className="cloud-symbol"><i /><i /><i /><i /></div>
              <span>MICROSOFT AZURE</span>
              <strong>One cloud.<br />Endless possibilities.</strong>
            </div>
            <div className="visual-caption caption-left"><span className="caption-mark">↗</span> Your next chapter</div>
            <div className="visual-caption caption-right"><span className="caption-pulse" /> Learn by doing</div>
          </div>
        </section>

        <section className="value-strip" aria-label="Program highlights">
          <div className="value-inner">
            <div><span className="value-icon">01</span><p><strong>Start with the basics</strong><br />No cloud experience needed</p></div>
            <div><span className="value-icon">02</span><p><strong>Make it practical</strong><br />Connect ideas to real work</p></div>
            <div><span className="value-icon">03</span><p><strong>Grow together</strong><br />Every background belongs</p></div>
          </div>
        </section>

        <section className="learning-section section-shell" id="learning">
          <div className="section-heading">
            <div>
              <div className="eyebrow">A CLEAR PATH INTO THE CLOUD</div>
              <h2>What we’ll explore<span className="heading-dot">.</span></h2>
              <p>Build a strong Azure foundation, one useful concept at a time.</p>
            </div>
            <div className="learning-note"><span>✳</span><p><strong>Curiosity is the prerequisite.</strong><br />Bring your questions. We’ll build the rest together.</p></div>
          </div>
          <div className="topic-grid">
            {topics.map((topic) => (
              <article className="topic-card" key={topic.number}>
                <div className="topic-topline">
                  <span className="topic-icon">{topic.icon}</span>
                  <span className="topic-number">{topic.number} / 06</span>
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <div className="tag-list">
                  {topic.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
          <div className="program-outcome">
            <span className="outcome-check">✓</span>
            <p><strong>Where we’re headed:</strong> a confident understanding of Azure’s core services—and the vocabulary to keep learning, building, and exploring.</p>
            <span className="outcome-label">FOUNDATION → PRACTICE</span>
          </div>
        </section>

        <section className="community-section" id="community">
          <div className="section-shell community-inner">
            <div className="section-heading community-heading">
              <div>
                <div className="eyebrow">MEET YOUR LEARNING COMMUNITY</div>
                <h2>Many paths in.<br /><span>One cloud ahead.</span></h2>
              </div>
              <p>We each bring a different lens to Azure. That’s not a detour—it’s our advantage. Every question makes the whole group stronger.</p>
            </div>
            <div className="people-grid">
              {people.map((person, index) => (
                <article className={`person-card ${index === 0 ? 'instructor-card' : ''}`} key={person.initials}>
                  <div className="person-top">
                    <span className={`person-avatar ${person.color}`}>{person.initials}</span>
                    <span className={`person-label ${index === 0 ? 'instructor-label' : ''}`}>{person.kind}</span>
                  </div>
                  <h3>{person.name}</h3>
                  <p className="person-role">{person.role}</p>
                  <p className="person-description">{person.description}</p>
                  <div className="person-focus"><span>↗</span>{person.focus}</div>
                </article>
              ))}
            </div>
            <div className="community-banner">
              <div className="banner-icon">✳</div>
              <div>
                <strong>For every Azure cloud platform enthusiast.</strong>
                <p>Whatever you do today, there’s a place for you in tomorrow’s cloud.</p>
              </div>
              <a href="#learning" aria-label="Back to the learning program"><ArrowIcon /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <Brand />
          <p>Made for curious minds, building toward the cloud.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
