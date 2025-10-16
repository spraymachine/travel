import { BrowserRouter, HashRouter, Routes, Route, NavLink, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import heroImg from './assets/hero.png'
import heroVid from './assets/hero-vid.mp4'
import './App.css'

const RouterComponent = import.meta.env.PROD ? HashRouter : BrowserRouter

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'var(--bg)', padding: '16px 0' }}>
      <div className="container">
        <div className="nav-pill" style={{ background:'#90e0ef', borderRadius: 9999, padding: '14px 18px', display:'flex', alignItems:'center', gap: 16, boxShadow:'0 10px 30px rgba(15,27,45,0.08)', border:'1px solid rgba(15,27,45,0.06)', position:'relative' }}>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <span className="chip">Eesti</span>
            <span style={{ fontFamily: 'Manrope', fontWeight: 800, letterSpacing: '-0.02em' }}>Plusreisid OÜ</span>
          </div>
          <div className="nav-center" style={{ flex:1, display:'flex', justifyContent:'center', gap: 28 }}>
            <NavLink to="/" onClick={closeMenu} style={({isActive})=>({ color: isActive ? 'var(--primary-600)' : 'var(--text)', fontWeight:600 })}>Home</NavLink>
            <button onClick={()=>{ closeMenu(); scrollToId('about') }} style={{ background:'transparent', border:'none', color:'var(--text)', fontWeight:600, cursor:'pointer' }}>About</button>
            <button onClick={()=>{ closeMenu(); scrollToId('deals') }} style={{ background:'transparent', border:'none', color:'var(--text)', fontWeight:600, cursor:'pointer' }}>Deals</button>
          </div>
          <div className="nav-actions" style={{ display:'flex', alignItems:'center', gap:12 }}>
            <button style={{ background:'#f4f6ff', color:'var(--text)', border:'1px solid rgba(15,27,45,0.08)', padding:'10px 14px', borderRadius:999, fontWeight:600 }}>Login</button>
            <a href="#deals"><button style={{ background:'var(--text)', color:'#ffffff', border:'1px solid rgba(15,27,45,0.1)', padding:'10px 16px', borderRadius:999, fontWeight:700 }}>Start booking</button></a>
          </div>
          <button aria-label="Open menu" className="nav-toggle" onClick={()=> setOpen(v=>!v)} style={{ display:'none', marginLeft:'auto', background:'#ffffff', border:'1px solid rgba(15,27,45,0.08)', borderRadius:10, padding:'8px 10px', fontWeight:700 }}>
            ☰
          </button>
          {open && (
            <div className="nav-mobile" style={{ position:'absolute', left:12, right:12, top:'100%', marginTop:10, background:'#ffffff', border:'1px solid rgba(15,27,45,0.08)', borderRadius:16, boxShadow:'0 12px 28px rgba(15,27,45,0.12)', padding:12, display:'grid', gap:10, textAlign:'center', justifyItems:'center' }}>
              <button onClick={()=>{ closeMenu(); scrollToId('about') }} style={{ background:'transparent', border:'none', color:'var(--text)', fontWeight:600, cursor:'pointer' }}>About</button>
              <button onClick={()=>{ closeMenu(); scrollToId('deals') }} style={{ background:'transparent', border:'none', color:'var(--text)', fontWeight:600, cursor:'pointer' }}>Deals</button>
              <NavLink to="/" onClick={closeMenu} style={{ color:'var(--text)', fontWeight:600 }}>Home</NavLink>
              <div style={{ display:'grid', gap:8, marginTop:6, justifyItems:'center' }}>
                <button style={{ background:'#f4f6ff', color:'var(--text)', border:'1px solid rgba(15,27,45,0.08)', padding:'10px 14px', borderRadius:10, fontWeight:600 }}>Login</button>
                <a href="#deals"><button style={{ background:'var(--text)', color:'#ffffff', border:'1px solid rgba(15,27,45,0.1)', padding:'10px 16px', borderRadius:10, fontWeight:700 }}>Start booking</button></a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer style={{ marginTop: 64, padding:'32px 0', borderTop:'1px solid rgba(15,27,45,0.06)'}}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <span className="subtle">© {new Date().getFullYear()} Plusreisid OÜ, Tallinn, Estonia</span>
        <div style={{ display: 'flex', alignItems:'center', gap:12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span className="fa fa-phone"></span> <span>+372 583 736 06</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span className="fa fa-envelope"></span> <span>info@plusreisid.ee</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}><span className="fa fa-map-marker"></span> <span>Tallinn, Eesti</span></div>
        </div>
      </div>
    </footer>
  )
}

function Hero() {
  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="container">
        <div className="hero-wrap" style={{
          background:'#caf0f8',
          borderRadius: 24,
          padding: '52px 24px',
          display:'grid',
          gap: 24,
          gridTemplateColumns:'1.15fr 1fr',
          alignItems:'center',
          minHeight: 520,
          overflow:'hidden'
        }}>
          <div className="hero-text">
            <div className="chip">Estonia • Baltics • Nordics</div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Clean, aesthetic journeys across Estonia</h1>
            <p style={{ fontSize: '1.125rem' }}>Curated city breaks, forest escapes, and island ferries with a calm Nordic touch. Discover Tallinn, Saaremaa, Lahemaa, and beyond.</p>
            <div style={{ display:'flex', gap:12, marginTop: 18 }}>
              <a href="#deals"><button>Explore Deals</button></a>
              <a href="#about"><button style={{ background:'#fff' }}>About us</button></a>
            </div>
          </div>
          <div className="hero-media" style={{ height:'70%', width:'100%', borderRadius: 20, overflow:'hidden', alignSelf:'stretch', justifySelf:'stretch', boxShadow:'0 12px 40px rgba(15,27,45,0.08)' }}>
            <img src={heroImg} alt="Plusreisid OÜ hero" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutServices() {
  return (
    <section id="about" className="section">
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ marginBottom: 24, display:'inline-block', background:'rgba(255,255,255,0.8)', border:'1px solid rgba(15,27,45,0.06)', borderRadius:16, padding:'16px 18px', boxShadow:'0 8px 24px rgba(15,27,45,0.08)' }}>
          <div className="chip">About us</div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.25rem)' }}>We craft serene travel experiences</h2>
          <p>Based in Tallinn, we design subtle, detail-forward trips across Estonia and the region. Our itineraries balance nature, culture, and slow travel.</p>
        </div>
        <div className="glass" style={{ borderRadius: 24, overflow:'hidden', marginBottom:24 }}>
          <video
            src={heroVid}
            preload="metadata"
            autoPlay
            muted
            loop
            playsInline
            style={{ width:'100%', height: 340, objectFit:'cover', display:'block', background:'#000' }}
          />
        </div>
        <div className="grid grid-3" style={{ gap: 28 }}>
          <div style={{ background:'rgba(202,240,248,0.95)', border:'1px solid rgba(15,27,45,0.06)', borderRadius:28, padding:32, minHeight:220, boxShadow:'0 10px 30px rgba(15,27,45,0.12)' }}>
            <h3>City & Culture</h3>
            <p>Tallinn, Tartu, and Narva highlights with museums, cafés, and design shops.</p>
          </div>
          <div style={{ background:'rgba(202,240,248,0.95)', border:'1px solid rgba(15,27,45,0.06)', borderRadius:28, padding:32, minHeight:220, boxShadow:'0 10px 30px rgba(15,27,45,0.12)' }}>
            <h3>Nature & Wellness</h3>
            <p>Lahemaa forests, bog hikes, spas, saunas, and sea breeze retreats.</p>
          </div>
          <div style={{ background:'rgba(202,240,248,0.95)', border:'1px solid rgba(15,27,45,0.06)', borderRadius:28, padding:32, minHeight:220, boxShadow:'0 10px 30px rgba(15,27,45,0.12)' }}>
            <h3>Islands & Coasts</h3>
            <p>Saaremaa, Hiiumaa, and Pärnu beach stays with lighthouses and ferries.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

type Deal = {
  id: string
  title: string
  location: string
  price: number
  nights: number
  tags: string[]
}

const ALL_DEALS: Deal[] = [
  // TÜRGI / Turkey
  { id:'tr-1', title:'Riolavitas Spa and Resort', location:'Turkey', price: 1099, nights:7, tags:['turkey','türgi','spa','resort','beach'] },
  { id:'tr-2', title:'Lake River Side Hotel', location:'Turkey', price: 899, nights:7, tags:['turkey','türgi','family','resort','beach'] },
  { id:'tr-3', title:'Sorgun Akadia Hotel Luxury', location:'Turkey', price: 1299, nights:7, tags:['turkey','türgi','luxury','beach','spa'] },

  // EGYPTUS / Egypt
  { id:'eg-1', title:'Steigenberger Aqua Magic', location:'Egypt', price: 1199, nights:7, tags:['egypt','egyptus','aqua','family','resort'] },
  { id:'eg-2', title:'Grand Waterworld Makadi', location:'Egypt', price: 1149, nights:7, tags:['egypt','egyptus','waterpark','resort','beach'] },
  { id:'eg-3', title:'Sea Star Beau Rivage', location:'Egypt', price: 999, nights:7, tags:['egypt','egyptus','beach','resort','snorkeling'] },

  // KREEKA / Greece
  { id:'gr-1', title:'Ostria Resort and Spa 5*', location:'Greece', price: 1399, nights:7, tags:['greece','kreeka','spa','5-star','beach'] },
  { id:'gr-2', title:'Mitsis Cretan Village Beach', location:'Greece', price: 1299, nights:7, tags:['greece','kreeka','family','beach','resort'] },
  { id:'gr-3', title:'Mitsis Bali Paradise Hotel 4*', location:'Greece', price: 1099, nights:7, tags:['greece','kreeka','4-star','beach','relax'] },

  // TENERIFE / Spain
  { id:'tf-1', title:'GF Victoria', location:'Tenerife', price: 1599, nights:7, tags:['tenerife','spain','luxury','family','pool'] },
  { id:'tf-2', title:'Jardin Tropical', location:'Tenerife', price: 1349, nights:7, tags:['tenerife','spain','tropical','beach','relax'] },
  { id:'tf-3', title:'H10 Las Palmeras', location:'Tenerife', price: 1190, nights:7, tags:['tenerife','spain','h10','beach','resort'] },

  // MONTENEGRO
  { id:'me-1', title:'Splendid Conference 5*', location:'Montenegro', price: 1390, nights:7, tags:['montenegro','5-star','spa','conference','beach'] },
  { id:'me-2', title:'Montenegrina Hotel & SPA 4*', location:'Montenegro', price: 990, nights:7, tags:['montenegro','4-star','spa','coast'] },
  { id:'me-3', title:'Eurostars Q of Montenegro', location:'Montenegro', price: 1050, nights:7, tags:['montenegro','eurostars','city','comfort'] },
]

function Tag({ label, active, onToggle }: { label: string; active?: boolean; onToggle?: (l: string) => void }) {
  return (
    <button onClick={() => onToggle && onToggle(label)} style={{
      padding:'6px 10px', borderRadius:999, border: active ? '1px solid var(--primary)' : '1px solid rgba(15,27,45,0.08)',
      background: active ? 'linear-gradient(180deg,#e7f2ff,#ffffff)' : '#fff', color: active ? 'var(--primary-600)' : 'var(--text)', fontWeight:600,
      whiteSpace:'nowrap', flex:'0 0 auto'
    }}>{label}</button>
  )
}

function DealCard({ deal }: { deal: Deal }) {
  return (
    <div className="glass" style={{ borderRadius:16, overflow:'hidden' }}>
      <div style={{ padding:16 }}>
        <h3 style={{ marginBottom: 4 }}>{deal.title}</h3>
        <p className="subtle">{deal.location} • {deal.nights} nights</p>
        <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginTop: 10 }}>
          {deal.tags.map(t => <span key={t} className="chip" style={{ background:'#eef6ff' }}>{t}</span>)}
        </div>
      </div>
      <div style={{ padding:16, display:'flex', justifyContent:'space-between', alignItems:'center', borderTop:'1px solid rgba(15,27,45,0.06)' }}>
        <span style={{ fontWeight:800 }}>€{deal.price}</span>
        <button>View</button>
      </div>
    </div>
  )
}

function DealsSection() {
  const [searchParams, setSearchParams] = useSearchParams()

  const setParam = (key: string, value: string | string[] | null) => {
    const next = new URLSearchParams(searchParams)
    if (value == null || (Array.isArray(value) && value.length === 0) || value === '') {
      next.delete(key)
    } else {
      next.set(key, Array.isArray(value) ? value.join(',') : value)
    }
    setSearchParams(next, { replace: true })
  }

  const query = (searchParams.get('q') ?? '')
  const activeTags = (searchParams.get('tags') ?? '').split(',').filter(Boolean)
  const sort = searchParams.get('sort') ?? 'price-asc'
  const selectedLoc = (searchParams.get('loc') ?? '')

  // const TAGS = Array.from(new Set(ALL_DEALS.flatMap(d=>d.tags)))
  const LOCATIONS = Array.from(new Set(ALL_DEALS.map(d=>d.location)))
  const TAGS_BY_LOCATION: Record<string, string[]> = LOCATIONS.reduce((acc, loc) => {
    const tags = Array.from(new Set(ALL_DEALS.filter(d => d.location === loc).flatMap(d => d.tags)))
    acc[loc] = tags
    return acc
  }, {} as Record<string, string[]>)

  const filtered = ALL_DEALS.filter(d => {
    const q = query.trim().toLowerCase()
    const matchesQuery = !q || d.title.toLowerCase().includes(q) || d.location.toLowerCase().includes(q)
    const matchesTags = activeTags.length === 0 || activeTags.every(t => d.tags.includes(t))
    return matchesQuery && matchesTags
  })

  const sorted = [...filtered].sort((a, b) => {
    switch (sort) {
      case 'price-asc': return a.price - b.price
      case 'price-desc': return b.price - a.price
      case 'nights-asc': return a.nights - b.nights
      case 'nights-desc': return b.nights - a.nights
      case 'title-asc': return a.title.localeCompare(b.title)
      default: return 0
    }
  })

  const hasFilters = query.trim() !== '' || activeTags.length > 0 || sort !== 'price-asc'

  // shape divider removed

  return (
    <section id="deals" className="section" style={{ background:'#caf0f8', padding: '60px 0', position:'relative' }}>
      <div className="custom-shape-divider-top-1760607620" aria-hidden>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <rect x="1200" height="3.6"></rect>
          <rect height="3.6"></rect>
          <path d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z" className="shape-fill"></path>
        </svg>
      </div>
      <div className="container">
        <div style={{
          background:'#ffffff',
          borderRadius: 24,
          padding: '40px 24px 24px',
          display:'grid',
          gap: 24,
          boxShadow:'0 10px 30px rgba(15,27,45,0.08)',
          border:'1px solid rgba(15,27,45,0.06)'
        }}>
        <div className="deals-controls" style={{ display:'flex', flexWrap:'wrap', gap:12, alignItems:'center', justifyContent:'space-between' }}>
            <div>
              <div className="chip">Deals</div>
              <h2>Find your next Estonian escape</h2>
            </div>
          <div className="deals-controls-right" style={{ display:'flex', gap:12, alignItems:'center' }}>
              <input
              className="deals-search"
                defaultValue={query}
                onChange={(e)=> setParam('q', (e.target as HTMLInputElement).value)}
                placeholder="Search Tallinn, islands, forests..."
                aria-label="Search deals"
                style={{ padding:'12px 14px', borderRadius:12, border:'1px solid rgba(15,27,45,0.12)', minWidth:260, background:'#ffffff' }}
              />
              <select
              className="deals-sort"
                value={sort}
                onChange={(e)=> setParam('sort', (e.target as HTMLSelectElement).value)}
                aria-label="Sort deals"
                style={{ padding:'12px 14px', borderRadius:12, border:'1px solid rgba(15,27,45,0.12)', background:'#ffffff' }}
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="nights-asc">Nights: Shortest</option>
                <option value="nights-desc">Nights: Longest</option>
                <option value="title-asc">Title: A–Z</option>
              </select>
              {hasFilters && (
              <button className="deals-clear" onClick={()=>{ setParam('q',''); setParam('tags', []); setParam('sort','price-asc') }}>
                  Clear
        </button>
              )}
            </div>
          </div>

        <div style={{ display:'grid', gap:12 }}>
          <div className="deals-filter-header" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:12, flexWrap:'wrap' }}>
            <div className="subtle" style={{ fontWeight:700 }}>Filter by destination</div>
            <select
              className="deals-dest-select"
              value={selectedLoc}
              onChange={(e)=> setParam('loc', (e.target as HTMLSelectElement).value)}
              aria-label="Select destination"
              style={{ padding:'12px 14px', borderRadius:12, border:'1px solid rgba(15,27,45,0.12)', background:'#ffffff' }}
            >
              <option value="">All destinations</option>
              {LOCATIONS.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {selectedLoc
            ? (
              <div className="tags-row" style={{ marginTop:4 }}>
                {(TAGS_BY_LOCATION[selectedLoc] || []).map(t => (
                  <Tag key={selectedLoc + '-' + t} label={t} active={activeTags.includes(t)} onToggle={(label)=>{
                    const next = activeTags.includes(label) ? activeTags.filter(x=>x!==label) : [...activeTags, label]
                    setParam('tags', next)
                  }} />
                ))}
              </div>
            ) : (
              <div className="dest-row">
                {LOCATIONS.map(loc => (
                  <details key={loc} className="dest" style={{ display:'inline-block', background:'#fff', border:'1px solid rgba(15,27,45,0.08)', borderRadius:12, padding:12 }}>
                    <summary style={{ cursor:'pointer', listStyle:'none', outline:'none', fontWeight:700 }}>{loc}</summary>
                    <div className="tags-row" style={{ marginTop:10 }}>
                      {TAGS_BY_LOCATION[loc].map(t => (
                        <Tag key={loc + '-' + t} label={t} active={activeTags.includes(t)} onToggle={(label)=>{
                          const next = activeTags.includes(label) ? activeTags.filter(x=>x!==label) : [...activeTags, label]
                          setParam('tags', next)
                        }} />
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            )}
        </div>

          <div className="grid grid-3">
            {sorted.map(deal => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <main>
      <Hero />
      <AboutServices />
      <DealsSection />
    </main>
  )
}

export default function App() {
  return (
    <RouterComponent>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </RouterComponent>
  )
}
