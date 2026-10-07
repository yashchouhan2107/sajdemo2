// Reliable Unsplash URLs paired with SVG Data URI fallbacks for 100% guaranteed loading

export const FALLBACK_IMAGES = {
  almonds: 'https://images.unsplash.com/photo-1508061252966-1738e4a9e52c?auto=format&fit=crop&w=800&q=80',
  cashews: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80',
  dates: 'https://images.unsplash.com/photo-1594958983944-93e1b1d3d6b0?auto=format&fit=crop&w=800&q=80',
  raisins: 'https://images.unsplash.com/photo-1589405858862-2ac9cbb41321?auto=format&fit=crop&w=800&q=80',
  seeds: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
  nuts: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80',
  hampers: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80',
  story: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80'
};

// SVG Data URIs for offline / instant render guaranteed zero-failure fallbacks
export const SVG_DATA_URIS = {
  almonds: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='750' viewBox='0 0 600 750'><rect width='100%' height='100%' fill='%23F4ECE1'/><path d='M300 200 C 180 320, 220 550, 300 600 C 380 550, 420 320, 300 200 Z' fill='%23C88E52'/><path d='M300 240 C 220 340, 250 510, 300 550' stroke='%23FAF6F0' stroke-width='10' stroke-linecap='round' opacity='0.7'/><text x='50%' y='680' font-family='Georgia, serif' font-size='36' fill='%232C1A11' text-anchor='middle'>SAJ ALMONDS</text></svg>`,
  
  cashews: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='750' viewBox='0 0 600 750'><rect width='100%' height='100%' fill='%23F6F1EA'/><path d='M250 250 C 380 180, 480 320, 380 450 C 320 520, 220 500, 250 400 C 270 330, 220 300, 250 250 Z' fill='%23E2C598'/><path d='M270 270 C 370 210, 440 330, 360 430' stroke='%23FAF6F0' stroke-width='8' stroke-linecap='round' opacity='0.8'/><text x='50%' y='680' font-family='Georgia, serif' font-size='36' fill='%232C1A11' text-anchor='middle'>WHOLE CASHEWS</text></svg>`,
  
  dates: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='750' viewBox='0 0 600 750'><rect width='100%' height='100%' fill='%23EFE5DA'/><ellipse cx='270' cy='380' rx='90' ry='150' transform='rotate(-15 270 380)' fill='%236B351F'/><ellipse cx='340' cy='350' rx='80' ry='130' transform='rotate(20 340 350)' fill='%234F2414'/><text x='50%' y='680' font-family='Georgia, serif' font-size='36' fill='%232C1A11' text-anchor='middle'>MEDJOOL DATES</text></svg>`,

  raisins: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='750' viewBox='0 0 600 750'><rect width='100%' height='100%' fill='%23F5ECE0'/><circle cx='260' cy='350' r='80' fill='%23D99B26'/><circle cx='350' cy='400' r='90' fill='%23B87F16'/><circle cx='290' cy='440' r='70' fill='%23E6A832'/><text x='50%' y='680' font-family='Georgia, serif' font-size='36' fill='%232C1A11' text-anchor='middle'>GOLDEN RAISINS</text></svg>`,

  seeds: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='750' viewBox='0 0 600 750'><rect width='100%' height='100%' fill='%23E6ECE4'/><ellipse cx='270' cy='360' rx='70' ry='140' transform='rotate(-25 270 360)' fill='%234D6B4B'/><ellipse cx='340' cy='380' rx='60' ry='120' transform='rotate(35 340 380)' fill='%233B5439'/><text x='50%' y='680' font-family='Georgia, serif' font-size='36' fill='%232C1A11' text-anchor='middle'>PUMPKIN SEEDS</text></svg>`,

  hampers: `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='750' viewBox='0 0 600 750'><rect width='100%' height='100%' fill='%23EFE5D8'/><rect x='150' y='250' width='300' height='260' rx='16' fill='%23FAF6F0' stroke='%23E5DAC8' stroke-width='4'/><rect x='280' y='250' width='40' height='260' fill='%238C5238'/><rect x='150' y='360' width='300' height='40' fill='%238C5238'/><text x='50%' y='680' font-family='Georgia, serif' font-size='36' fill='%232C1A11' text-anchor='middle'>GIFT HAMPER</text></svg>`
};
