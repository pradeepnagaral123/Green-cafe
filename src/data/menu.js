export const categories = [
  {
    id: 'entrees',
    label: 'Local Entrees',
    icon: '🍟',
    tagline: 'Crispy bites to start the evening',
    items: [
      { name: 'Yummy Fries', price: 100, emoji: '🍟', image: '/images/menu/fries.jpg', desc: 'Golden, salted hand-cut fries served with our signature dip.' },
      { name: 'Onion Rings', price: 130, emoji: '🧅', image: '/images/menu/onion-rings.jpg', desc: 'Thick-cut rings in a crunchy beer batter, served hot.' },
      { name: 'Paneer Pops', price: 160, emoji: '🧀', image: '/images/menu/paneer-pops.jpg', desc: 'Spiced cottage-cheese bites tossed in a tangy coating.' },
      { name: 'Chicken Wings', price: 230, emoji: '🍗', image: '/images/menu/wings.jpg', desc: 'Juicy wings glazed in a smoky, sticky house sauce.' },
    ],
  },
  {
    id: 'breads',
    label: 'Open Breads',
    icon: '🥖',
    tagline: 'Fresh-baked, topped and toasted',
    items: [
      { name: 'Cheesy Garlic Bread', price: 120, emoji: '🧄', image: '/images/menu/garlic-bread.jpg', desc: 'Pillowy bread loaded with garlic butter and bubbling cheese.' },
      { name: 'Chicken Crostini', price: 160, emoji: '🍗', image: '/images/menu/crostini.jpg', desc: 'Toasted crostini topped with herbed shredded chicken.' },
      { name: 'Bruschetta', price: 130, emoji: '🍅', image: '/images/menu/bruschetta.jpg', desc: 'Charred bread with ripe tomatoes, basil and olive oil.' },
    ],
  },
  {
    id: 'italian',
    label: 'Italian Plates',
    icon: '🍝',
    tagline: 'Slow-simmered comfort in a bowl',
    items: [
      { name: 'Arrabbiata', price: 180, emoji: '🌶️', image: '/images/menu/arrabbiata.jpg', desc: 'Spicy tomato penne with garlic, chilli and fresh herbs.' },
      { name: 'Alfredo', price: 210, emoji: '🍝', image: '/images/menu/alfredo.jpg', desc: 'Creamy white-sauce pasta tossed with parmesan.' },
      { name: 'Mac N Cheese', price: 220, emoji: '🧀', image: '/images/menu/mac-cheese.jpg', desc: 'Baked macaroni in a silky three-cheese sauce.' },
    ],
  },
  {
    id: 'burgers',
    label: 'Burgers',
    icon: '🍔',
    tagline: 'Hand-pressed patties, toasted brioche',
    items: [
      { name: 'Classic Burger', price: 180, emoji: '🍔', image: '/images/menu/classic-burger.jpg', desc: 'Lettuce, tomato, cheese and our secret sauce in a soft bun.' },
      { name: 'BBQ Chicken Burger', price: 240, emoji: '🍗', image: '/images/menu/bbq-chicken-burger.jpg', desc: 'Smoky BBQ-glazed chicken with crunchy slaw.' },
      { name: 'Crunchy Chicken Burger', price: 240, emoji: '🐔', image: '/images/menu/crunchy-chicken-burger.jpg', desc: 'Crispy fried chicken with mayo and pickled chillies.' },
    ],
  },
  {
    id: 'mojitos',
    label: 'Mojitos',
    icon: '🍹',
    tagline: 'Frosty, fizzy and refreshing',
    items: [
      { name: 'Classic Virgin', price: 120, emoji: '🍋', image: '/images/menu/virgin-mojito.jpg', desc: 'Muddled mint, lime and sparkling soda over crushed ice.' },
      { name: 'Watermelon', price: 120, emoji: '🍉', image: '/images/menu/watermelon-mojito.jpg', desc: 'Fresh watermelon blend with mint and a fizzy finish.' },
      { name: 'Orange', price: 120, emoji: '🍊', image: '/images/menu/orange-mojito.jpg', desc: 'Citrusy orange mojito, bright and ice-cold.' },
    ],
  },
  {
    id: 'brew',
    label: 'Hot Brew',
    icon: '☕',
    tagline: 'Barista-crafted, every morning',
    items: [
      { name: 'Cappuccino', price: 110, emoji: '☕', image: '/images/menu/cappuccino.jpg', desc: 'Rich espresso with velvety steamed milk and foam art.' },
      { name: 'Latte', price: 110, emoji: '🥛', image: '/images/menu/latte.jpg', desc: 'Smooth and creamy espresso with micro-foamed milk.' },
      { name: 'Espresso', price: 80, emoji: '⚡', image: '/images/menu/espresso.jpg', desc: 'A bold, concentrated shot of our signature blend.' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    icon: '🍫',
    tagline: 'The sweetest way to end',
    items: [
      { name: 'Sizzling Brownie', price: 180, emoji: '🍫', image: '/images/menu/sizzling-brownie.jpg', desc: 'Warm brownie on a hot plate with vanilla ice cream.' },
      { name: 'Brownie Blast', price: 220, emoji: '🍨', image: '/images/menu/brownie-blast.jpg', desc: 'Layered brownie, nuts and sauce — a chocolate overload.' },
      { name: 'Ice Cream', price: 40, emoji: '🍦', image: '/images/menu/ice-cream.jpg', desc: 'Classic scoops, simple and always satisfying.' },
    ],
  },
]

export const totalItems = categories.reduce((sum, c) => sum + c.items.length, 0)
