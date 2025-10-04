import { useMemo, useState } from 'react'

const SAMPLE_PACKAGES = [
  { id: 'tallinn-old-town-walk', title: 'Tallinn Old Town Walk', days: 1, price: 89, summary: 'A guided stroll through towers, guild halls, and hidden courtyards.', tags: ['city','history','walking'] },
  { id: 'baltic-islands-retreat', title: 'Baltic Islands Retreat', days: 3, price: 520, summary: 'Saaremaa & Muhu islands with spa time and coastal villages.', tags: ['islands','wellness','nature'] },
  { id: 'lahemaa-manors-nature', title: 'Lahemaa Manors & Nature', days: 2, price: 360, summary: 'Manor houses, bog boardwalks, and charming seaside hamlets.', tags: ['nature','culture','easy'] },
  { id: 'bog-sunrise-hike', title: 'Bog Sunrise Hike', days: 1, price: 120, summary: 'Golden-hour hike on wooden boardwalks with local guide.', tags: ['nature','hiking','photography'] },
  { id: 'tartu-innovation-loop', title: 'Tartu Innovation Loop', days: 1, price: 140, summary: 'University town, museums, and Estonia’s science scene.', tags: ['city','culture','family'] },
  { id: 'winter-sauna-escape', title: 'Winter Sauna Escape', days: 2, price: 410, summary: 'Sauna rituals, smoke saunas, and Baltic comfort food.', tags: ['wellness','winter','relax'] },
  { id: 'island-cycling-safari', title: 'Island Cycling Safari', days: 3, price: 590, summary: 'Muhu & Saaremaa by bike with seaside guesthouses.', tags: ['islands','cycling','active'] },
  { id: 'setomaa-cultural-day', title: 'Setomaa Cultural Day', days: 1, price: 160, summary: 'Borderland songs, crafts, and village cuisine.', tags: ['culture','history','daytrip'] },
  { id: 'alutaguse-wildlife-watch', title: 'Alutaguse Wildlife Watch', days: 2, price: 480, summary: 'Bear hides, forest tracks, and silent moments.', tags: ['wildlife','nature','adventure'] },
]

const ALL_TAGS = Array.from(new Set(SAMPLE_PACKAGES.flatMap(p => p.tags))).sort()

function Packages() {
  const [selected, setSelected] = useState([])
  const [query, setQuery] = useState('')

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
                <button className="btn">Enquire</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages


