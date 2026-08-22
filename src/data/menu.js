export const categories = [
  {
    id: 'entrees',
    label: 'Local Entrees',
    icon: 'fries',
    tagline: 'Crispy bites to start the evening',
    items: [
      { name: 'Yummy Fries', price: 100, icon: 'fries', image: '/images/menu/fries.webp', desc: 'Golden, salted hand-cut fries served with our signature dip.' },
      { name: 'Onion Rings', price: 130, icon: 'ring', image: '/images/menu/onion-rings.webp', desc: 'Thick-cut rings in a crunchy beer batter, served hot.' },
      { name: 'Paneer Pops', price: 160, icon: 'cheese', image: '/images/menu/paneer-pops.webp', desc: 'Spiced cottage-cheese bites tossed in a tangy coating.' },
      { name: 'Chicken Wings', price: 230, icon: 'drumstick', image: '/images/menu/wings.webp', desc: 'Juicy wings glazed in a smoky, sticky house sauce.' },
    ],
  },
  {
    id: 'breads',
    label: 'Open Breads',
    icon: 'croissant',
    tagline: 'Fresh-baked, topped and toasted',
    items: [
      { name: 'Cheesy Garlic Bread', price: 120, icon: 'toast', image: '/images/menu/garlic-bread.webp', desc: 'Pillowy bread loaded with garlic butter and bubbling cheese.' },
      { name: 'Chicken Crostini', price: 160, icon: 'toast', image: '/images/menu/crostini.webp', desc: 'Toasted crostini topped with herbed shredded chicken.' },
      { name: 'Bruschetta', price: 130, icon: 'tomato', image: '/images/menu/bruschetta.webp', desc: 'Charred bread with ripe tomatoes, basil and olive oil.' },
    ],
  },
  {
    id: 'italian',
    label: 'Italian Plates',
    icon: 'noodles',
    tagline: 'Slow-simmered comfort in a bowl',
    items: [
      { name: 'Arrabbiata', price: 180, icon: 'noodles', image: '/images/menu/arrabbiata.webp', desc: 'Spicy tomato penne with garlic, chilli and fresh herbs.' },
      { name: 'Alfredo', price: 210, icon: 'noodles', image: '/images/menu/alfredo.webp', desc: 'Creamy white-sauce pasta tossed with parmesan.' },
      { name: 'Mac N Cheese', price: 220, icon: 'cheese', image: '/images/menu/mac-cheese.webp', desc: 'Baked macaroni in a silky three-cheese sauce.' },
    ],
  },
  {
    id: 'burgers',
    label: 'Burgers',
    icon: 'burger',
    tagline: 'Hand-pressed patties, toasted brioche',
    items: [
      { name: 'Classic Burger', price: 180, icon: 'burger', image: '/images/menu/classic-burger.webp', desc: 'Lettuce, tomato, cheese and our secret sauce in a soft bun.' },
      { name: 'BBQ Chicken Burger', price: 240, icon: 'burger', image: '/images/menu/bbq-chicken-burger.webp', desc: 'Smoky BBQ-glazed chicken with crunchy slaw.' },
      { name: 'Crunchy Chicken Burger', price: 240, icon: 'drumstick', image: '/images/menu/crunchy-chicken-burger.webp', desc: 'Crispy fried chicken with mayo and pickled chillies.' },
    ],
  },
  {
    id: 'mojitos',
    label: 'Mojitos',
    icon: 'drink',
    tagline: 'Frosty, fizzy and refreshing',
    items: [
      { name: 'Classic Virgin', price: 120, icon: 'citrus', image: '/images/menu/virgin-mojito.webp', desc: 'Muddled mint, lime and sparkling soda over crushed ice.' },
      { name: 'Watermelon', price: 120, icon: 'watermelon', image: '/images/menu/watermelon-mojito.webp', desc: 'Fresh watermelon blend with mint and a fizzy finish.' },
      { name: 'Orange', price: 120, icon: 'citrus', image: '/images/menu/orange-mojito.webp', desc: 'Citrusy orange mojito, bright and ice-cold.' },
    ],
  },
  {
    id: 'brew',
    label: 'Hot Brew',
    icon: 'cup',
    tagline: 'Barista-crafted, every morning',
    items: [
      { name: 'Cappuccino', price: 110, icon: 'cup', image: '/images/menu/cappuccino.webp', desc: 'Rich espresso with velvety steamed milk and foam art.' },
      { name: 'Latte', price: 110, icon: 'cup', image: '/images/menu/latte.webp', desc: 'Smooth and creamy espresso with micro-foamed milk.' },
      { name: 'Espresso', price: 80, icon: 'bolt', image: '/images/menu/espresso.webp', desc: 'A bold, concentrated shot of our signature blend.' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    icon: 'dessert',
    tagline: 'The sweetest way to end',
    items: [
      { name: 'Sizzling Brownie', price: 180, icon: 'brownie', image: '/images/menu/sizzling-brownie.webp', desc: 'Warm brownie on a hot plate with vanilla ice cream.' },
      { name: 'Brownie Blast', price: 220, icon: 'brownie', image: '/images/menu/brownie-blast.webp', desc: 'Layered brownie, nuts and sauce — a chocolate overload.' },
      { name: 'Ice Cream', price: 40, icon: 'icecream', image: '/images/menu/ice-cream.webp', desc: 'Classic scoops, simple and always satisfying.' },
    ],
  },
]

export const totalItems = categories.reduce((sum, c) => sum + c.items.length, 0)
