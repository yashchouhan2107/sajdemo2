export const PRODUCTS = [
  {
    id: 'almonds-raw',
    name: 'Almonds',
    subtitle: 'Whole & Raw',
    category: 'Nuts',
    bestseller: true,
    description: 'California Nonpareil extra number 1 almonds. Crisp, naturally sweet, and rich in vitamin E.',
    prices: {
      '250g': 349,
      '500g': 649,
      '1kg': 1199
    },
    defaultWeight: '250g',
    image: '/images/almonds.jpg',
    pouchImage: '/images/almonds.jpg',
    bgTheme: '#F4ECE1',
    pouchColor: '#FAF6F0',
    accentColor: '#B87A44'
  },
  {
    id: 'whole-cashews',
    name: 'Whole cashews',
    subtitle: 'W240 Jumbo Grade',
    category: 'Nuts',
    bestseller: false,
    description: 'Hand-picked W240 grade cashews from Mangalore. Exceptionally creamy texture and buttery finish.',
    prices: {
      '250g': 429,
      '500g': 799,
      '1kg': 1499
    },
    defaultWeight: '250g',
    image: '/images/cashews.jpg',
    pouchImage: '/images/cashews.jpg',
    bgTheme: '#F6F1EA',
    pouchColor: '#FAF6F0',
    accentColor: '#C4A47C'
  },
  {
    id: 'medjool-dates',
    name: 'Medjool dates',
    subtitle: 'Organic Large',
    category: 'Dried fruit',
    bestseller: false,
    description: 'Juicy, caramel-toned Medjool dates imported fresh. Rich in dietary fiber and naturally sweet.',
    prices: {
      '250g': 379,
      '500g': 699,
      '1kg': 1299
    },
    defaultWeight: '250g',
    image: '/images/dates.jpg',
    pouchImage: '/images/dates.jpg',
    bgTheme: '#EFE5DA',
    pouchColor: '#FAF6F0',
    accentColor: '#8C5238'
  },
  {
    id: 'golden-raisins',
    name: 'Golden raisins',
    subtitle: 'Sun-Dried Afghan',
    category: 'Dried fruit',
    bestseller: false,
    description: 'Plump golden raisins dried slowly under the Mediterranean sun. Plump, sweet, and tangy.',
    prices: {
      '250g': 199,
      '500g': 369,
      '1kg': 699
    },
    defaultWeight: '250g',
    image: '/images/raisins.jpg',
    pouchImage: '/images/raisins.jpg',
    bgTheme: '#F5ECE0',
    pouchColor: '#FAF6F0',
    accentColor: '#C98A2C'
  },
  {
    id: 'pumpkin-seeds',
    name: 'Pumpkin seeds',
    subtitle: 'Raw & AAA Grade',
    category: 'Seeds',
    bestseller: false,
    description: 'Nutrient-rich AAA grade raw pumpkin seeds. Packed with zinc, magnesium, and healthy fats.',
    prices: {
      '250g': 249,
      '500g': 459,
      '1kg': 849
    },
    defaultWeight: '250g',
    image: '/images/seeds.jpg',
    pouchImage: '/images/seeds.jpg',
    bgTheme: '#E6ECE4',
    pouchColor: '#FAF6F0',
    accentColor: '#4A6B48'
  }
];

export const CATEGORIES = [
  {
    id: 'Nuts',
    title: 'Nuts',
    count: '4 varieties',
    bgColor: '#E4ECE2',
    accentColor: '#4A6348',
    imageType: 'nuts',
    image: '/images/almonds.jpg'
  },
  {
    id: 'Dried fruit',
    title: 'Dried fruit',
    count: '3 varieties',
    bgColor: '#EFE5D8',
    accentColor: '#8C5238',
    imageType: 'dried-fruit',
    image: '/images/dates.jpg'
  },
  {
    id: 'Seeds',
    title: 'Seeds',
    count: '1 variety',
    bgColor: '#E4ECE2',
    accentColor: '#4A6348',
    imageType: 'seeds',
    image: '/images/seeds.jpg'
  },
  {
    id: 'Gift hampers',
    title: 'Gift hampers',
    count: '3 occasions',
    bgColor: '#EFE5D8',
    accentColor: '#7A5B3E',
    imageType: 'hampers',
    image: '/images/hamper.jpg'
  }
];

export const PROCESS_STEPS = [
  {
    id: 'sourced',
    title: 'Sourced with care',
    text: 'We work with growers and suppliers who share our standards for size, colour and flavour.',
    iconName: 'Leaf'
  },
  {
    id: 'sorted',
    title: 'Sorted by hand',
    text: 'Every batch is checked and graded, so only the best pieces reach the pouch.',
    iconName: 'Sparkles'
  },
  {
    id: 'sealed',
    title: 'Sealed for freshness',
    text: 'Small batches go into resealable pouches to protect crunch and aroma.',
    iconName: 'Lock'
  },
  {
    id: 'delivered',
    title: 'Delivered to your door',
    text: 'Packed carefully and dispatched quickly, so your order arrives as it should.',
    iconName: 'Package'
  }
];

export const HAMPERS = [
  {
    id: 'festive',
    category: 'Festive',
    name: 'Festive hamper',
    price: 1499,
    formattedPrice: 'From ₹1,499',
    description: 'Almonds, cashews, dates and pistachios in a keepsake box, tied with ribbon.',
    image: '/images/hamper.jpg'
  },
  {
    id: 'weddings',
    category: 'Weddings',
    name: 'Celebration Hamper',
    price: 2499,
    formattedPrice: 'From ₹2,499',
    description: 'Premium roasted nuts & saffron-infused dry fruits in handcrafted wooden brass box.',
    image: '/images/hamper.jpg'
  },
  {
    id: 'corporate',
    category: 'Corporate',
    name: 'Executive Gourmet Box',
    price: 3999,
    formattedPrice: 'From ₹3,999',
    description: 'Bespoke corporate gifting box with custom branding tag and 6 reserve dry fruit varieties.',
    image: '/images/hamper.jpg'
  }
];
