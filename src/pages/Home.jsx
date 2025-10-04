function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Discover Estonia</h1>
          <p>Medieval charm, Nordic design, and untouched nature—all in one journey.</p>
          <a className="btn primary" href="#packages">Explore Packages</a>
        </div>
      </div>
      <div className="highlights">
        <div className="grid">
          <div className="card">
            <h3>Tallinn Old Town</h3>
            <p>UNESCO-listed cobblestone streets, towers, and cozy cafés.</p>
          </div>
          <div className="card">
            <h3>Saaremaa & Muhu</h3>
            <p>Windmills, island time, and Baltic seaside peace.</p>
          </div>
          <div className="card">
            <h3>Lahemaa National Park</h3>
            <p>Manor houses, bog trails, and wild coastline.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home


