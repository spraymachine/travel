import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import { SAMPLE_PACKAGES, ALL_TAGS } from '../data';

function Packages() {
  const [selected, setSelected] = useState([])
  const [query, setQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const filtered = useMemo(() => {
    return SAMPLE_PACKAGES.filter(p => {
      const matchTags = selected.length === 0 || selected.every(t => p.tags.includes(t))
      const matchQuery = query.trim() === '' || p.title.toLowerCase().includes(query.toLowerCase())
      return matchTags && matchQuery
    })
  }, [selected, query])

  const toggle = (tag) => {
    setSelected(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])
  }

  const clear = () => { setSelected([]); setQuery('') }

  const handleEnquireClick = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  return (
    <section className="page packages">
      <h1>Tour Packages</h1>
      <div className="packages-wrap">
        <aside className="packages-filter">
          <div className="filter-group">
            <input
              type="text"
              placeholder="Search by title..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ width: '100%', height: 36, borderRadius: 8, border: '1px solid rgba(152,193,217,.25)', padding: '0 .6rem', background: 'rgba(255,255,255,.05)', color: 'inherit' }}
            />
          </div>
          <div className="filter-group">
            <h4 style={{ margin: '0 0 .5rem' }}>Tags</h4>
            <div className="filter-tags">
              {ALL_TAGS.map(tag => (
                <label key={tag} className="tag">
                  <input type="checkbox" checked={selected.includes(tag)} onChange={() => toggle(tag)} />
                  <span>#{tag}</span>
                </label>
              ))}
            </div>
          </div>
          <button className="btn clear-btn" onClick={clear}>Clear filters</button>
        </aside>

        <div className="packages-grid">
          {filtered.map((p) => (
            <article key={p.id} className="card package">
              <h3>{p.title}</h3>
              <p className="muted">{p.days} day{p.days > 1 ? 's' : ''}</p>
              <p>{p.summary}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginTop: '.5rem' }}>
                {p.tags.map(t => (
                  <span key={t} className="tag" style={{ fontSize: '.8rem' }}>#{t}</span>
                ))}
              </div>
              <div className="package-cta">
                <span className="price">€{p.price}</span>
                <Link to={`/checkout/${p.id}`} target="_blank" rel="noopener noreferrer" className="btn">
                  Enquire
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages


