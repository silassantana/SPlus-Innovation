import { useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      console.error('Email send failed:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <nav>
        <div className="logo"><img src="/logo.png" alt="SPlus Innovation" /></div>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main>
        {/* Hero */}
        <section className="hero">
          <img src="/logo.png" alt="SPlus Innovation" className="hero-logo" />
          <div className="hero-badge">Based in Brazil, powering the world</div>
          <h1>
            We build <span className="gradient">AI-powered</span><br />
            solutions that scale
          </h1>
          <p>
            From intelligent agents to retrieval-augmented generation,
            we turn complex AI into products that actually work.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Get in touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#services" className="btn btn-outline">Learn more</a>
          </div>
        </section>

        {/* Services */}
        <section className="services" id="services">
          <div className="container">
            <p className="section-label">What we do</p>
            <h2>AI that means business</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🤖</div>
                <h3>AI Agents</h3>
                <p>
                  Autonomous agents that reason, plan, and execute tasks.
                  From customer support to complex workflows — they handle it.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">🔍</div>
                <h3>RAG Systems</h3>
                <p>
                  Retrieval-augmented generation that actually retrieves.
                  Connect your data to LLMs with precision and speed.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">⚡</div>
                <h3>AI Integration</h3>
                <p>
                  Plug AI into your existing stack. We work with any platform,
                  any model, any scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="contact" id="contact">
          <div className="container">
            <div className="contact-content">
              <div>
                <p className="section-label">Let's talk</p>
                <h2>Ready to build something?</h2>
                <p>
                  Whether you have a project in mind or just want to explore what's
                  possible — we're here.
                </p>
                <div className="contact-info">
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div className="contact-item-text">
                      <span className="contact-item-label">Address</span>
                      <span className="contact-item-value">Rua Emilio Rodrigues, 185, Vila Paiva, Sao Paulo - SP</span>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <div className="contact-item-text">
                      <span className="contact-item-label">Email</span>
                      <span className="contact-item-value">info@splusinnovation.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '2rem' }}>
                    <p style={{ color: 'var(--accent-2)', fontSize: '1.125rem' }}>
                      ✨ Message sent! We'll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project..."
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                      {loading ? 'Sending...' : 'Send message'}
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 SPlus Innovation. Building the future, one agent at a time.</p>
      </footer>
    </>
  )
}

export default App
