export const menuCategories = [
  {
    id: 'espresso',
    items: [
      { slug: 'lunnyj-espresso', emoji: '☕', name: 'Лунный эспрессо', origin: 'Эфиопия · Yirgacheffe', desc: 'Яркая черника, жасмин, длинное послевкусие.', phase: '🌒', phaseLabel: 'Растущая', price: 190 },
      { slug: 'cortado-temnoty', emoji: '🥛', name: 'Cortado темноты', origin: 'Колумбия · Huila', desc: 'Карамель, горький шоколад, ореховость.', phase: '🌑', phaseLabel: 'Новолуние', price: 240 },
      { slug: 'nochnoj-kapuchino', emoji: '🌙', name: 'Ночной капучино', origin: 'Йемен · Haraz', desc: 'Финики, специи, густая пенка.', phase: '🌘', phaseLabel: 'Убывающая', price: 280 },
      { slug: 'flat-white-zvezd', emoji: '✨', name: 'Flat White звёзд', origin: 'Бразилия · Cerrado', desc: 'Молочный шоколад, орех, мягкость.', phase: '🌕', phaseLabel: 'Полнолуние', price: 310 },
    ],
  },
  {
    id: 'filter',
    items: [
      { slug: 'pour-over-novoluniya', emoji: '🫗', name: 'Pour-over новолуния', origin: 'Эфиопия · Gedeo', desc: 'Чайная текстура, бергамот, цветочность.', phase: '🌑', phaseLabel: 'Новолуние', price: 320 },
      { slug: 'aeropress-rosta', emoji: '🫙', name: 'Aeropress роста', origin: 'Кения · Kiambu', desc: 'Смородина, томат, резкая кислота.', phase: '🌒', phaseLabel: 'Растущая', price: 290 },
      { slug: 'chemex-polnoluniya', emoji: '🥃', name: 'Chemex полнолуния', origin: 'Панама · Boquete', desc: 'Геша, белый персик, невесомость.', phase: '🌕', phaseLabel: 'Полнолуние', price: 480 },
      { slug: 'batch-brew-zakata', emoji: '🍵', name: 'Batch brew заката', origin: 'Гватемала · Huehue', desc: 'Коричневый сахар, орех пекан, уют.', phase: '🌘', phaseLabel: 'Убывающая', price: 220 },
    ],
  },
  {
    id: 'alternative',
    items: [
      { slug: 'kold-bryu-zatmeniya', emoji: '🧊', name: 'Колд-брю затмения', origin: 'Никарагуа · Matagalpa', desc: 'Тёмный шоколад, вишня, прохлада.', phase: '🌑', phaseLabel: 'Новолуние', price: 350 },
      { slug: 'nitro-rastushchej', emoji: '🫧', name: 'Нитро растущей', origin: 'Колумбия · Nariño', desc: 'Кремовая пена, карамель, газированность.', phase: '🌒', phaseLabel: 'Растущая', price: 380 },
      { slug: 'cascara-priliva', emoji: '🌊', name: 'Cascara прилива', origin: 'Йемен · Sana\'a', desc: 'Чай из кофейной ягоды, хибискус, кислинка.', phase: '🌕', phaseLabel: 'Полнолуние', price: 260 },
      { slug: 'affogato-lunnogo-sveta', emoji: '🍦', name: 'Аффогато лунного света', origin: 'Эфиопия · Sidama', desc: 'Ванильное мороженое, горячий эспрессо.', phase: '🌘', phaseLabel: 'Убывающая', price: 340 },
    ],
  },
  {
    id: 'tea',
    items: [
      { slug: 'matcha-novoluniya', emoji: '🌿', name: 'Матча новолуния', origin: 'Япония · Uji', desc: 'Умами, травяность, кремовость.', phase: '🌑', phaseLabel: 'Новолуние', price: 310 },
      { slug: 'chaj-chandra', emoji: '🌸', name: 'Чай-чандра', origin: 'Дарджилинг · 1-й сбор', desc: 'Мускатный виноград, цветы, легкость.', phase: '🌒', phaseLabel: 'Растущая', price: 270 },
      { slug: 'kakao-zvezdnogo-chasa', emoji: '🍫', name: 'Какао звёздного часа', origin: 'Перу · Cusco', desc: 'Тёмный шоколад, пряности, согревание.', phase: '🌕', phaseLabel: 'Полнолуние', price: 290 },
      { slug: 'puer-ubyvaniya', emoji: '🫖', name: 'Пуэр убывания', origin: 'Юньнань · Vintage 2019', desc: 'Земля, мох, глубина. Медитативный.', phase: '🌘', phaseLabel: 'Убывающая', price: 420 },
    ],
  },
]

export const categoryIds = menuCategories.map((c) => c.id)

export function findDrink(categoryId, slug) {
  const category = menuCategories.find((c) => c.id === categoryId)
  if (!category) return null
  return category.items.find((item) => item.slug === slug) ?? null
}

export function findDrinkBySlug(slug) {
  for (const category of menuCategories) {
    const item = category.items.find((i) => i.slug === slug)
    if (item) return { category, item }
  }
  return null
}
