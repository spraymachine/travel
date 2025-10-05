import { useState } from 'react'

function Navbar({ active }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={handleLinkClick}>
          NordLoom Travel
        </a>
        
        <button 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" className={active === 'home' ? 'active' : undefined} onClick={handleLinkClick}>Home</a>
          <a href="#packages" className={active === 'packages' ? 'active' : undefined} onClick={handleLinkClick}>Packages</a>
          <a href="#about" className={active === 'about' ? 'active' : undefined} onClick={handleLinkClick}>About</a>
          <a href="#services" className={active === 'services' ? 'active' : undefined} onClick={handleLinkClick}>Services</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar


