import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Packages from './pages/Packages.jsx'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

function App() {
  const [active, setActive] = useState('home')
  const topButtonRef = useRef(null)

  useEffect(() => {
    const sections = document.querySelectorAll('section[data-section]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section')
            setActive(id)
          }
          entry.target.classList.toggle('reveal-visible', entry.isIntersecting)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0.01 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (!topButtonRef.current) return
      const show = window.scrollY > 600
      topButtonRef.current.style.opacity = show ? '1' : '0'
      topButtonRef.current.style.pointerEvents = show ? 'auto' : 'none'
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style) return
    // Smooth scroll polyfill for very old browsers (no-op here; modern Vite target)
  }, [])

  return (
    <Elements stripe={stripePromise}>
      <div className="app-container">
        <Navbar active={active} />
        <main className="content single">
          <section id="home" data-section="home" className="reveal">
            <Home />
          </section>
          <section id="packages" data-section="packages" className="reveal">
            <Packages />
          </section>
          <section id="about" data-section="about" className="reveal">
            <About />
          </section>
          <section id="services" data-section="services" className="reveal">
            <Services />
          </section>
        </main>
        <button
          ref={topButtonRef}
          className="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          ↑
        </button>
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} NordLoom Travel • Tallinn, Estonia</p>
        </footer>
      </div>
    </Elements>
  )
}

export default App
