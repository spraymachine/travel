export const SAMPLE_PACKAGES = [
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

export const ALL_TAGS = Array.from(new Set(SAMPLE_PACKAGES.flatMap(p => p.tags))).sort()
