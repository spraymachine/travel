function Navbar({ active }) {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#home" className="brand">
          NordLoom Travel
        </a>
        <nav className="nav-links">
          <a href="#home" className={active === 'home' ? 'active' : undefined}>Home</a>
          <a href="#about" className={active === 'about' ? 'active' : undefined}>About</a>
          <a href="#services" className={active === 'services' ? 'active' : undefined}>Services</a>
          <a href="#packages" className={active === 'packages' ? 'active' : undefined}>Packages</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar


