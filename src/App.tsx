function VideoBlock() {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(()=>{
    const v = ref.current
    if (!v) return
    const onCanPlay = () => {
      v.playbackRate = 0.5
      const playPromise = v.play()
      if (playPromise) playPromise.catch(()=>{})
    }
    v.addEventListener('canplay', onCanPlay)
    v.addEventListener('loadedmetadata', onCanPlay)
    onCanPlay()
    return ()=>{
      v.removeEventListener('canplay', onCanPlay)
      v.removeEventListener('loadedmetadata', onCanPlay)
    }
  },[])
  return (
    <div className="glass" style={{ borderRadius: 24, overflow:'hidden', marginBottom:24 }}>
      <video
        ref={ref}
        src={heroVid}
        preload="auto"
        autoPlay
        muted
        loop
        playsInline
        style={{ width:'100%', height: 340, objectFit:'cover', display:'block', background:'#000' }}
      />
    </div>
  )
}
import { BrowserRouter, HashRouter, Routes, Route, NavLink, useSearchParams } from 'react-router-dom'
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
        <VideoBlock />
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
  { id:'1', title:'Tallinn Weekend Escape', location:'Tallinn', price: 219, nights:2, tags:['city','culture','sauna'] },
  { id:'2', title:'Lahemaa Bog & Forest Retreat', location:'Lahemaa', price: 349, nights:3, tags:['nature','hiking','wellness'] },
  { id:'3', title:'Saaremaa Island Getaway', location:'Saaremaa', price: 399, nights:4, tags:['island','spa','coast'] },
  { id:'4', title:'Tartu Culture & Science', location:'Tartu', price: 289, nights:2, tags:['city','museum','culture'] },
  { id:'5', title:'Hiiumaa Lighthouse Trail', location:'Hiiumaa', price: 359, nights:3, tags:['island','coast','cycling'] },
  { id:'6', title:'Pärnu Beach Holiday', location:'Pärnu', price: 279, nights:3, tags:['beach','family','coast'] },
  { id:'7', title:'Lake Peipsi Fisherman’s Route', location:'Peipsi', price: 309, nights:3, tags:['lake','food','culture'] },
  { id:'8', title:'Haapsalu Spa Weekend', location:'Haapsalu', price: 329, nights:3, tags:['spa','wellness','coast'] },
  { id:'9', title:'Otepää Ski Break', location:'Otepää', price: 299, nights:3, tags:['ski','winter','nature'] },
  { id:'10', title:'Soomaa Canoe Safari', location:'Soomaa', price: 349, nights:2, tags:['canoe','wildlife','nature'] },
  { id:'11', title:'Narva Fortress & Old Town', location:'Narva', price: 269, nights:2, tags:['history','architecture','city'] },
  { id:'12', title:'Muhu Manor & Design Stay', location:'Muhu', price: 389, nights:3, tags:['island','design','manor'] },
  { id:'13', title:'Viljandi Folk Festival Weekend', location:'Viljandi', price: 319, nights:2, tags:['festival','music','culture'] },
]

function Tag({ label, active, onToggle }: { label: string; active?: boolean; onToggle?: (l: string) => void }) {
  return (
    <button onClick={() => onToggle && onToggle(label)} style={{
      padding:'6px 10px', borderRadius:999, border: active ? '1px solid var(--primary)' : '1px solid rgba(15,27,45,0.08)',
      background: active ? 'linear-gradient(180deg,#e7f2ff,#ffffff)' : '#fff', color: active ? 'var(--primary-600)' : 'var(--text)', fontWeight:600
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

  const TAGS = Array.from(new Set(ALL_DEALS.flatMap(d=>d.tags)))

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

  const dividerBg = `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><path d="M0 0v100S0 4 500 4s500 96 500 96V0H0Z" fill="#f7fbff"></path></svg>')}" )`

  return (
    <section id="deals" className="section" style={{ background:'#caf0f8', paddingTop: 0 }}>
      <div aria-hidden>
        <div style={{
          height: 90,
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          backgroundImage: dividerBg,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundPosition: 'top center'
        }} />
      </div>
      <div className="container">
        <div style={{
          background:'#ffffff',
          borderRadius: 24,
          padding: 24,
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

          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {TAGS.map(t => (
              <Tag key={t} label={t} active={activeTags.includes(t)} onToggle={(label)=>{
                const next = activeTags.includes(label) ? activeTags.filter(x=>x!==label) : [...activeTags, label]
                setParam('tags', next)
              }} />
            ))}
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
