export const navItems = [
  { label: 'Главная', to: { name: 'home' }, icon: 'mdi-home' },
  { label: 'Концепция', to: { name: 'concept' }, icon: 'mdi-moon-waning-crescent' },
  { label: 'Меню', to: { name: 'menu-category', params: { category: 'espresso' } }, icon: 'mdi-coffee' },
  { label: 'Избранное', to: { name: 'favorites' }, icon: 'mdi-heart-outline' },
  { label: 'Процесс', to: { name: 'how' }, icon: 'mdi-information' },
  { label: 'Происхождение', to: { name: 'origins' }, icon: 'mdi-earth' },
  { label: 'Подписка', to: { name: 'subscription' }, icon: 'mdi-package-variant' },
]

export const stats = [
  { value: '4', label: 'фазы луны' },
  { value: '12+', label: 'источников зерна' },
  { value: '3', label: 'года традиции' },
  { value: '∞', label: 'чашек любви' },
]

export const moonPhases = [
  { icon: '🌑', name: 'Новолуние', active: false },
  { icon: '🌒', name: 'Растущая', active: true },
  { icon: '🌕', name: 'Полнолуние', active: false },
  { icon: '🌘', name: 'Убывающая', active: false },
]

export const principles = [
  { icon: '🌱', title: 'Биодинамика', desc: 'Зерно собирают в корневые и плодовые дни по лунному календарю.' },
  { icon: '🔥', title: 'Живая обжарка', desc: 'Профиль обжарки меняется каждые 2 недели под фазу луны.' },
  { icon: '⚗️', title: 'Точная рецептура', desc: 'Температура, давление и время — всё рассчитано системно.' },
  { icon: '🃏', title: 'Карточка вкуса', desc: 'Каждый напиток приходит с описанием и рекомендацией дня.' },
]

export const steps = [
  { title: 'Лунный прогноз', value: 1 },
  { title: 'Обжарка дня', value: 2 },
  { title: 'Заваривание', value: 3 },
  { title: 'Ваш напиток', value: 4 },
]

export const origins = [
  {
    flag: '🇪🇹',
    country: 'Эфиопия',
    region: 'Йиргачефф · Сидама · Гедео',
    notes: ['Цветочная и ягодная нотка', 'Лёгкая чайная текстура', 'Идеальна в новолуние и растущую'],
    phase: '🌑🌒 Тёмная луна',
  },
  {
    flag: '🇾🇪',
    country: 'Йемен',
    region: 'Харас · Сана\'a · Матари',
    notes: ['Тропические фрукты и специи', 'Насыщенное тело', 'Лучшая в полнолуние'],
    phase: '🌕 Полная луна',
  },
  {
    flag: '🇨🇴',
    country: 'Колумбия',
    region: 'Уила · Нариньо · Кундинамарка',
    notes: ['Карамель и тёмный шоколад', 'Сбалансированная кислотность', 'Хороша в любую фазу'],
    phase: '🌒🌘 Переходы',
  },
]

export const subPerks = [
  { icon: '📦', title: '250 г зерна', desc: 'Свежеобжаренное в день отправки' },
  { icon: '🌑', title: 'В новолуние', desc: 'Доставка в самый «тихий» день месяца' },
  { icon: '🃏', title: 'Карточка', desc: 'Рецепт заваривания и профиль вкуса' },
  { icon: '📖', title: 'Лунный гид', desc: 'PDF-календарь на месяц с советами' },
]

export const footerMenu = ['Эспрессо', 'Фильтр', 'Альтернатива', 'Чай и не-кофе', 'Подписка']
export const footerAbout = ['Наш подход', 'Команда', 'Поставщики', 'Блог', 'Контакты']
