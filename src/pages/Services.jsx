function Services() {
  const services = [
    { title: 'City Breaks', desc: 'Weekend escapes in Tallinn with curated dining.' },
    { title: 'Nature & Wellness', desc: 'Bogs, spas, and seaside saunas.' },
    { title: 'Cultural Loops', desc: 'Craft, music, and design-forward experiences.' },
    { title: 'MICE & Incentives', desc: 'Events and team trips with a Nordic edge.' },
  ]

  return (
    <section className="page services">
      <h1>Our Services</h1>
      <div className="grid">
        {services.map((s) => (
          <div className="card" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services


