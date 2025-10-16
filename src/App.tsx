import { BrowserRouter, HashRouter, Routes, Route, useSearchParams, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
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
  const navigate = useNavigate()
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'var(--bg)', padding: '16px 0' }}>
      <div className="container">
        <div className="nav-pill" style={{ background:'#90e0ef', borderRadius: 9999, padding: '14px 18px', display:'flex', alignItems:'center', gap: 16, boxShadow:'0 10px 30px rgba(15,27,45,0.08)', border:'1px solid rgba(15,27,45,0.06)', position:'relative' }}>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <span className="chip">Eesti</span>
            <span style={{ fontFamily: 'Manrope', fontWeight: 800, letterSpacing: '-0.02em' }}>Plusreisid OÜ</span>
          </div>
          <div className="nav-center" style={{ flex:1, display:'flex', justifyContent:'center', gap: 28 }}>
            <button onClick={()=>{ closeMenu(); navigate('/') }} style={{ background:'transparent', border:'none', color:'var(--text)', fontWeight:600, cursor:'pointer' }}>Home</button>
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
              <button onClick={()=>{ closeMenu(); navigate('/') }} style={{ background:'transparent', border:'none', color:'var(--text)', fontWeight:600, cursor:'pointer' }}>Home</button>
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
      <div className="container footer-grid">
        <div className="footer-item">
          <svg className="icon-24" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.2c1.2 2.4 3 4.3 5.4 5.4l1.8-1.8c.3-.3.8-.4 1.2-.3 1 .3 2 .4 3.1.4.5 0 .9.4.9.9v2.9c0 .5-.4.9-.9.9C10.7 18.6 5.4 13.3 5.4 6.9c0-.5.4-.9.9-.9h2.9c.5 0 .9.4.9.9 0 1 .1 2.1.4 3.1.1.4 0 .9-.3 1.2l-1.8 1.8z"/></svg>
          <a href="tel:+37258373606">+372 583 736 06</a>
        </div>
        <div className="footer-item">
          <svg className="icon-24" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/></svg>
          <a href="mailto:info@plusreisid.ee">info@plusreisid.ee</a>
        </div>
        <div className="footer-item">
          <svg className="icon-24" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.1 2 5 5.1 5 9c0 6.1 7 13 7 13s7-6.9 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/></svg>
          <span>Tallinn, Eesti</span>
        </div>
        <div className="footer-item subtle" style={{ background:'transparent', border:'none' }}>© {new Date().getFullYear()} Plusreisid OÜ</div>
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
          <div className="hero-media" style={{ height:'70%', width:'100%', borderRadius: 20, overflow:'hidden', alignSelf:'center', justifySelf:'stretch', boxShadow:'0 12px 40px rgba(15,27,45,0.08)' }}>
            <img src={heroImg} alt="Plusreisid OÜ hero" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutServices() {
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    // Ensure mobile inline autoplay compatibility
    el.setAttribute('playsinline', '')
    el.setAttribute('webkit-playsinline', '')
    el.muted = true
    el.defaultMuted = true
    const tryPlay = () => { el.play().catch(() => {}) }
    const onCanPlay = () => tryPlay()
    el.addEventListener('canplay', onCanPlay)
    tryPlay()
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) tryPlay()
    }, { threshold: 0.4 })
    observer.observe(el)
    return () => {
      el.removeEventListener('canplay', onCanPlay)
      observer.disconnect()
    }
  }, [])

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
            ref={videoRef}
            onLoadedData={(e)=> {
              const el = e.currentTarget
              // Attempt to start playback on load for devices that block autoplay until a frame is available
              el.play().catch(() => {/* no-op */})
            }}
            style={{ width:'100%', height: 340, objectFit:'cover', display:'block', background:'#000' }}
          >
            <source src={heroVid} type="video/mp4" />
          </video>
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
      whiteSpace:'nowrap', flex:'0 0 auto', margin:'6px 6px'
    }}>{label}</button>
  )
}

function DealCard({ deal }: { deal: Deal }) {
  const navigate = useNavigate()
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
        <button onClick={()=> navigate(`/deal/${deal.id}`)}>View</button>
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
              <div className="dest-row" style={{ padding:'6px 4px' }}>
                {LOCATIONS.map(loc => (
                  <button key={loc} className="dest-button" onClick={()=> setParam('loc', loc)} style={{ display:'inline-flex', alignItems:'center', background:'#fff', border:'1px solid rgba(15,27,45,0.12)', borderRadius:12, padding:'12px 14px', fontWeight:700, color:'var(--text)' }}>
                    {loc}
                  </button>
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
        <Route path="/deal/:id" element={<DealDetail />} />
      </Routes>
      <Footer />
    </RouterComponent>
  )
}

function findDealById(id: string): Deal | undefined {
  return ALL_DEALS.find(d => d.id === id)
}

function DealDetail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const deal = findDealById(id || '')

  if (!deal) {
    return (
      <main className="section">
        <div className="container" style={{ textAlign:'center' }}>
          <h2>Deal not found</h2>
          <p className="subtle">The deal you’re looking for doesn’t exist.</p>
          <div style={{ marginTop:16 }}>
            <button onClick={()=> navigate('/')}>Back to home</button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="section" style={{ paddingTop: 24 }}>
      <div className="container">
        <div className="glass" style={{ borderRadius: 24, overflow:'hidden', boxShadow:'0 12px 40px rgba(15,27,45,0.08)' }}>
          <div className="detail-grid" style={{ display:'grid', gridTemplateColumns:'1.2fr 0.8fr', gap:24 }}>
            <div style={{ padding:24 }}>
              <div className="chip">{deal.location}</div>
              <h1 style={{ fontSize:'clamp(1.6rem, 3.6vw, 2.6rem)' }}>{deal.title}</h1>
              <p className="subtle" style={{ marginBottom: 10 }}>{deal.nights} nights • From €{deal.price}</p>

              <div style={{ display:'flex', flexWrap:'wrap', gap:8, margin:'10px 0 18px' }}>
                {deal.tags.map(t => (
                  <span key={t} className="chip" style={{ background:'#eef6ff' }}>{t}</span>
                ))}
              </div>

              <div style={{ display:'grid', gap:12 }}>
                <h3>Overview</h3>
                <p>Experience a balanced escape with culture, nature, and downtime. Comfortable stays, smooth transfers, and curated spots make this a relaxed and memorable trip.</p>

                <h3>What’s included</h3>
                <ul style={{ margin:0, paddingLeft: '1.2rem', color:'var(--muted)' }}>
                  <li>Round-trip flights</li>
                  <li>Hotel accommodation</li>
                  <li>Breakfast daily</li>
                  <li>Airport transfers</li>
                  <li>Local support</li>
                </ul>

                <h3>Good to know</h3>
                <ul style={{ margin:0, paddingLeft: '1.2rem', color:'var(--muted)' }}>
                  <li>Flexible dates on request</li>
                  <li>Upgrade options available</li>
                  <li>Family-friendly options</li>
                </ul>
              </div>
            </div>

            <aside style={{ borderLeft:'1px solid rgba(15,27,45,0.06)', padding:24, display:'grid', gap:16 }}>
              <div style={{ background:'#fff', border:'1px solid rgba(15,27,45,0.08)', borderRadius:16, padding:16 }}>
                <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between' }}>
                  <div>
                    <div className="subtle" style={{ fontWeight:700 }}>From</div>
                    <div style={{ fontWeight:800, fontSize:24 }}>€{deal.price}</div>
                  </div>
                  <div className="subtle">{deal.nights} nights</div>
                </div>
                <div style={{ display:'grid', gap:10, marginTop:12 }}>
                  <button onClick={()=> navigate('/#deals')}>Choose dates</button>
                  <button style={{ background:'#0f1b2d', color:'#fff' }} onClick={()=> navigate('/#deals')}>Book now</button>
                </div>
              </div>

              <div style={{ background:'#f0f6ff', border:'1px dashed rgba(15,27,45,0.2)', borderRadius:16, padding:16, height:240, display:'grid', placeItems:'center', color:'var(--muted)', textAlign:'center' }}>
                <div>
                  <div style={{ fontWeight:700 }}>Image placeholder</div>
                  <div>Add a beautiful photo for this deal here later</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
