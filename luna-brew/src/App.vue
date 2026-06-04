<template>
  <v-app>
    <!-- Navigation Drawer (mobile) -->
    <v-navigation-drawer v-model="drawer" temporary color="#0a0806">
      <div class="drawer-logo pa-6">
        <span class="logo-text">LUNA BREW</span>
        <div class="logo-sub">☽ кофейня</div>
      </div>
      <v-divider color="rgba(200,169,110,0.2)" />
      <v-list nav color="transparent">
        <v-list-item
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          :title="item.label"
          :prepend-icon="item.icon"
          color="primary"
          class="nav-drawer-item"
          @click="drawer = false"
        />
      </v-list>
      <template #append>
        <div class="pa-4">
          <v-btn block color="primary" variant="outlined" @click="orderDialog = true; drawer = false">
            Заказать стол
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar flat color="transparent" class="app-bar-custom" :elevation="scrolled ? 4 : 0">
      <template #prepend>
        <v-app-bar-nav-icon
          class="d-flex d-md-none"
          color="primary"
          @click="drawer = !drawer"
        />
      </template>
      <v-app-bar-title>
        <span class="app-bar-logo">LUNA BREW</span>
      </v-app-bar-title>
      <template #append>
        <div class="d-none d-md-flex align-center ga-1 mr-4">
          <v-btn
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            variant="text"
            color="primary"
            size="small"
            class="nav-btn"
          >{{ item.label }}</v-btn>
        </div>
        <v-btn
          color="primary"
          variant="outlined"
          size="small"
          class="d-none d-md-flex mr-4"
          @click="orderDialog = true"
        >
          Заказать стол
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <!-- HERO -->
      <section id="hero" class="hero-section">
        <div class="hero-bg">
          <div class="moon-glow"></div>
          <div class="star star-1"></div>
          <div class="star star-2"></div>
          <div class="star star-3"></div>
          <div class="star star-4"></div>
          <div class="star star-5"></div>
          <div class="coffee-steam"></div>
        </div>
        <v-container class="hero-content">
          <v-chip
            color="primary"
            variant="outlined"
            size="small"
            class="mb-6"
            prepend-icon="mdi-moon-waning-crescent"
          >
            Новолуние — идеальный день для эспрессо
          </v-chip>
          <h1 class="hero-title">
            Кофе,<br />
            <em>заваренный</em><br />
            по звёздам
          </h1>
          <p class="hero-subtitle">
            Каждый напиток — по фазе луны.<br />
            Каждая обжарка — по лунному календарю.
          </p>
          <div class="hero-actions">
            <v-btn
              color="primary"
              size="large"
              class="hero-btn-main"
              @click="orderDialog = true"
              prepend-icon="mdi-coffee"
            >
              Забронировать стол
            </v-btn>
            <v-btn
              variant="text"
              color="accent"
              size="large"
              href="#menu"
              append-icon="mdi-arrow-down"
            >
              Смотреть меню
            </v-btn>
          </div>
          <div class="hero-stats">
            <div v-for="stat in stats" :key="stat.label" class="stat-item">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </v-container>
        <div class="moon-phase-bar">
          <div
            v-for="phase in moonPhases"
            :key="phase.name"
            class="phase-item"
            :class="{ active: phase.active }"
          >
            <span class="phase-icon">{{ phase.icon }}</span>
            <span class="phase-name">{{ phase.name }}</span>
          </div>
        </div>
      </section>

      <!-- CONCEPT -->
      <section id="concept" class="section-concept">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="5" class="text-center text-md-left">
              <v-chip color="secondary" variant="tonal" class="mb-4" size="small">
                наша философия
              </v-chip>
              <h2 class="section-title">Луна<br />влияет<br /><em>на всё</em></h2>
            </v-col>
            <v-col cols="12" md="6" offset-md="1">
              <p class="concept-text">
                Фермеры, следующие лунным календарям, собирают урожай зерна
                в определённые дни — и вкус кофе меняется. Мы верим в это
                и подбираем обжарку, помол и рецептуры под текущую фазу луны.
              </p>
              <v-row class="mt-6" dense>
                <v-col v-for="principle in principles" :key="principle.title" cols="12" sm="6">
                  <v-card
                    color="surface"
                    class="principle-card pa-4"
                    border="opacity-20"
                    rounded="0"
                  >
                    <div class="principle-icon mb-2">{{ principle.icon }}</div>
                    <div class="principle-title">{{ principle.title }}</div>
                    <div class="principle-desc">{{ principle.desc }}</div>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- MENU -->
      <section id="menu" class="section-menu">
        <v-container>
          <div class="section-header">
            <v-chip color="primary" variant="tonal" size="small" class="mb-4">меню</v-chip>
            <h2 class="section-title">Напитки фазы</h2>
            <p class="section-sub">Сегодня: <strong>Растущая луна 🌒</strong> — время насыщенных вкусов</p>
          </div>

          <v-tabs
            v-model="menuTab"
            color="primary"
            align-tabs="center"
            class="menu-tabs mb-8"
          >
            <v-tab value="espresso">Эспрессо</v-tab>
            <v-tab value="filter">Фильтр</v-tab>
            <v-tab value="alternative">Альтернатива</v-tab>
            <v-tab value="tea">Чай & не-кофе</v-tab>
          </v-tabs>

          <v-tabs-window v-model="menuTab">
            <v-tabs-window-item v-for="category in menuCategories" :key="category.id" :value="category.id">
              <v-row>
                <v-col
                  v-for="item in category.items"
                  :key="item.name"
                  cols="12"
                  sm="6"
                  md="3"
                >
                  <v-card
                    class="menu-card"
                    color="surface"
                    rounded="0"
                    border="opacity-10"
                    hover
                  >
                    <div class="menu-card-emoji">{{ item.emoji }}</div>
                    <v-card-title class="menu-card-title">{{ item.name }}</v-card-title>
                    <v-card-subtitle class="menu-card-origin">{{ item.origin }}</v-card-subtitle>
                    <v-card-text class="menu-card-desc">{{ item.desc }}</v-card-text>
                    <v-card-actions class="px-4 pb-4">
                      <v-chip
                        :color="item.phase === '🌑' ? 'secondary' : item.phase === '🌒' ? 'primary' : 'accent'"
                        variant="tonal"
                        size="x-small"
                        label
                      >{{ item.phase }} {{ item.phaseLabel }}</v-chip>
                      <v-spacer />
                      <span class="menu-price">{{ item.price }} ₽</span>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-container>
      </section>

      <!-- HOW IT WORKS -->
      <section id="how" class="section-how">
        <v-container>
          <div class="section-header">
            <v-chip color="secondary" variant="tonal" size="small" class="mb-4">процесс</v-chip>
            <h2 class="section-title">Как мы варим</h2>
          </div>
          <v-stepper
            v-model="stepperStep"
            :items="steps"
            color="primary"
            bg-color="transparent"
            class="stepper-custom"
            alt-labels
            flat
          >
            <template #item.1>
              <v-card flat color="transparent" class="stepper-content pa-4">
                <p>Мы отслеживаем лунный календарь и каждое утро составляем «карту вкусов дня» — какой профиль обжарки, какая кислотность и плотность тела будут наиболее гармоничны.</p>
              </v-card>
            </template>
            <template #item.2>
              <v-card flat color="transparent" class="stepper-content pa-4">
                <p>Наши обжарщики работают с зерном из Эфиопии, Колумбии и Йемена. Помол настраивается под сезон и фазу — иногда по 3–4 раза за день.</p>
              </v-card>
            </template>
            <template #item.3>
              <v-card flat color="transparent" class="stepper-content pa-4">
                <p>Бариста следует дневному рецепту: температура воды, давление и время экстракции рассчитаны исходя из фазы луны. Никакой самодеятельности — только система.</p>
              </v-card>
            </template>
            <template #item.4>
              <v-card flat color="transparent" class="stepper-content pa-4">
                <p>Вы получаете напиток с карточкой: фаза луны, источник зерна, профиль вкуса и рекомендованное время суток для дегустации.</p>
              </v-card>
            </template>
          </v-stepper>
        </v-container>
      </section>

      <!-- FLEET (ORIGINS) -->
      <section id="origins" class="section-origins">
        <v-container>
          <div class="section-header">
            <v-chip color="primary" variant="tonal" size="small" class="mb-4">происхождение</v-chip>
            <h2 class="section-title">Зерно из трёх<br /><em>континентов</em></h2>
          </div>
          <v-row>
            <v-col v-for="origin in origins" :key="origin.country" cols="12" md="4">
              <v-card
                class="origin-card"
                color="surface"
                rounded="0"
                border="opacity-10"
              >
                <div class="origin-flag">{{ origin.flag }}</div>
                <v-card-title class="origin-country">{{ origin.country }}</v-card-title>
                <v-card-subtitle class="origin-region">{{ origin.region }}</v-card-subtitle>
                <v-card-text>
                  <v-list dense color="transparent">
                    <v-list-item
                      v-for="note in origin.notes"
                      :key="note"
                      :title="note"
                      density="compact"
                      class="px-0"
                    >
                      <template #prepend>
                        <v-icon color="primary" size="small">mdi-circle-small</v-icon>
                      </template>
                    </v-list-item>
                  </v-list>
                </v-card-text>
                <v-card-actions class="px-4 pb-4">
                  <v-chip color="primary" variant="outlined" size="small" label>
                    {{ origin.phase }}
                  </v-chip>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- SUBSCRIPTION -->
      <section id="subscription" class="section-subscription">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="10">
              <v-card class="subscription-card" rounded="0" color="surface" border="opacity-20">
                <v-row no-gutters>
                  <v-col cols="12" md="6" class="pa-8 pa-md-12">
                    <v-chip color="primary" variant="tonal" size="small" class="mb-4">подписка</v-chip>
                    <h2 class="subscription-title">Кофе<br />каждую<br /><em>новую луну</em></h2>
                    <p class="subscription-desc mt-4">
                      Раз в месяц, в новолуние, мы отправляем вам набор: 250 г свежеобжаренного зерна + карточка с инструкцией заваривания.
                    </p>
                    <v-btn
                      color="primary"
                      size="large"
                      class="mt-6"
                      rounded="0"
                      @click="orderDialog = true"
                      prepend-icon="mdi-moon-new"
                    >
                      Подписаться — 1 490 ₽/мес
                    </v-btn>
                  </v-col>
                  <v-col cols="12" md="6" class="subscription-visual pa-8 pa-md-12">
                    <div class="sub-phases">
                      <div v-for="p in subPerks" :key="p.title" class="sub-perk">
                        <span class="sub-perk-icon">{{ p.icon }}</span>
                        <div>
                          <div class="sub-perk-title">{{ p.title }}</div>
                          <div class="sub-perk-desc">{{ p.desc }}</div>
                        </div>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- FOOTER -->
      <v-footer class="footer-custom" color="#050403">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <div class="footer-logo mb-2">LUNA BREW</div>
              <div class="footer-tagline">☽ Кофе по лунному календарю</div>
              <p class="footer-address mt-3">
                Москва, ул. Пречистенка, 17<br />
                Ежедневно: 8:00 — 23:00
              </p>
            </v-col>
            <v-col cols="6" md="2" offset-md="2">
              <div class="footer-col-title">Меню</div>
              <div v-for="link in footerMenu" :key="link" class="footer-link">{{ link }}</div>
            </v-col>
            <v-col cols="6" md="2">
              <div class="footer-col-title">О нас</div>
              <div v-for="link in footerAbout" :key="link" class="footer-link">{{ link }}</div>
            </v-col>
            <v-col cols="12" md="2">
              <div class="footer-col-title">Соцсети</div>
              <div class="d-flex ga-2 mt-2">
                <v-btn icon="mdi-instagram" variant="text" color="primary" size="small" />
                <v-btn icon="mdi-telegram" variant="text" color="primary" size="small" />
                <v-btn icon="mdi-vk" variant="text" color="primary" size="small" />
              </div>
            </v-col>
          </v-row>
          <v-divider color="rgba(200,169,110,0.15)" class="my-6" />
          <div class="footer-bottom">
            <span>© 2025 LUNA BREW. Все права защищены.</span>
            <span class="footer-phase">Сейчас: Растущая луна 🌒</span>
          </div>
        </v-container>
      </v-footer>
    </v-main>

    <!-- ORDER DIALOG -->
    <v-dialog v-model="orderDialog" max-width="520" persistent>
      <v-card rounded="0" color="#13100d" border="primary opacity-30">
        <v-card-title class="dialog-title pa-6 pb-2">
          <span>Забронировать стол</span>
          <v-spacer />
          <v-btn icon="mdi-close" variant="text" color="primary" @click="orderDialog = false" />
        </v-card-title>
        <v-card-text class="pa-6 pt-2">
          <p class="dialog-sub mb-6">Мы подберём стол под текущую фазу луны ☽</p>
          <v-text-field
            v-model="form.name"
            label="Ваше имя"
            variant="outlined"
            color="primary"
            density="comfortable"
            rounded="0"
            class="mb-3"
          />
          <v-text-field
            v-model="form.phone"
            label="Телефон"
            variant="outlined"
            color="primary"
            density="comfortable"
            rounded="0"
            class="mb-3"
            prepend-inner-icon="mdi-phone"
          />
          <v-text-field
            v-model="form.date"
            label="Дата и время"
            variant="outlined"
            color="primary"
            density="comfortable"
            rounded="0"
            class="mb-3"
            prepend-inner-icon="mdi-calendar-moon"
            placeholder="25 июля, 19:00"
          />
          <v-text-field
            v-model="form.guests"
            label="Количество гостей"
            variant="outlined"
            color="primary"
            density="comfortable"
            rounded="0"
            class="mb-3"
            prepend-inner-icon="mdi-account-group"
            type="number"
            min="1"
            max="10"
          />
          <v-textarea
            v-model="form.wish"
            label="Пожелания (необязательно)"
            variant="outlined"
            color="primary"
            density="comfortable"
            rounded="0"
            rows="2"
          />
        </v-card-text>
        <v-card-actions class="pa-6 pt-0">
          <v-btn
            block
            color="primary"
            size="large"
            rounded="0"
            @click="submitOrder"
            :loading="submitting"
          >
            Отправить бронирование
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- SNACKBAR -->
    <v-snackbar
      v-model="snackbar"
      color="success"
      location="bottom right"
      :timeout="4000"
      rounded="0"
    >
      <v-icon class="mr-2">mdi-check-circle</v-icon>
      Бронирование принято! Ждём вас ☽
      <template #actions>
        <v-btn variant="text" @click="snackbar = false">✕</v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const drawer = ref(false)
const orderDialog = ref(false)
const snackbar = ref(false)
const submitting = ref(false)
const menuTab = ref('espresso')
const stepperStep = ref(1)
const scrolled = ref(false)

const form = ref({ name: '', phone: '', date: '', guests: 2, wish: '' })

const navItems = [
  { label: 'Концепция', href: '#concept', icon: 'mdi-moon-waning-crescent' },
  { label: 'Меню', href: '#menu', icon: 'mdi-coffee' },
  { label: 'Процесс', href: '#how', icon: 'mdi-information' },
  { label: 'Происхождение', href: '#origins', icon: 'mdi-earth' },
  { label: 'Подписка', href: '#subscription', icon: 'mdi-package-variant' },
]

const stats = [
  { value: '4', label: 'фазы луны' },
  { value: '12+', label: 'источников зерна' },
  { value: '3', label: 'года традиции' },
  { value: '∞', label: 'чашек любви' },
]

const moonPhases = [
  { icon: '🌑', name: 'Новолуние', active: false },
  { icon: '🌒', name: 'Растущая', active: true },
  { icon: '🌕', name: 'Полнолуние', active: false },
  { icon: '🌘', name: 'Убывающая', active: false },
]

const principles = [
  { icon: '🌱', title: 'Биодинамика', desc: 'Зерно собирают в корневые и плодовые дни по лунному календарю.' },
  { icon: '🔥', title: 'Живая обжарка', desc: 'Профиль обжарки меняется каждые 2 недели под фазу луны.' },
  { icon: '⚗️', title: 'Точная рецептура', desc: 'Температура, давление и время — всё рассчитано системно.' },
  { icon: '🃏', title: 'Карточка вкуса', desc: 'Каждый напиток приходит с описанием и рекомендацией дня.' },
]

const menuCategories = [
  {
    id: 'espresso',
    items: [
      { emoji: '☕', name: 'Лунный эспрессо', origin: 'Эфиопия · Yirgacheffe', desc: 'Яркая черника, жасмин, длинное послевкусие.', phase: '🌒', phaseLabel: 'Растущая', price: 190 },
      { emoji: '🥛', name: 'Cortado темноты', origin: 'Колумбия · Huila', desc: 'Карамель, горький шоколад, ореховость.', phase: '🌑', phaseLabel: 'Новолуние', price: 240 },
      { emoji: '🌙', name: 'Ночной капучино', origin: 'Йемен · Haraz', desc: 'Финики, специи, густая пенка.', phase: '🌘', phaseLabel: 'Убывающая', price: 280 },
      { emoji: '✨', name: 'Flat White звёзд', origin: 'Бразилия · Cerrado', desc: 'Молочный шоколад, орех, мягкость.', phase: '🌕', phaseLabel: 'Полнолуние', price: 310 },
    ],
  },
  {
    id: 'filter',
    items: [
      { emoji: '🫗', name: 'Pour-over новолуния', origin: 'Эфиопия · Gedeo', desc: 'Чайная текстура, бергамот, цветочность.', phase: '🌑', phaseLabel: 'Новолуние', price: 320 },
      { emoji: '🫙', name: 'Aeropress роста', origin: 'Кения · Kiambu', desc: 'Смородина, томат, резкая кислота.', phase: '🌒', phaseLabel: 'Растущая', price: 290 },
      { emoji: '🥃', name: 'Chemex полнолуния', origin: 'Панама · Boquete', desc: 'Геша, белый персик, невесомость.', phase: '🌕', phaseLabel: 'Полнолуние', price: 480 },
      { emoji: '🍵', name: 'Batch brew заката', origin: 'Гватемала · Huehue', desc: 'Коричневый сахар, орех пекан, уют.', phase: '🌘', phaseLabel: 'Убывающая', price: 220 },
    ],
  },
  {
    id: 'alternative',
    items: [
      { emoji: '🧊', name: 'Колд-брю затмения', origin: 'Никарагуа · Matagalpa', desc: 'Тёмный шоколад, вишня, прохлада.', phase: '🌑', phaseLabel: 'Новолуние', price: 350 },
      { emoji: '🫧', name: 'Нитро растущей', origin: 'Колумбия · Nariño', desc: 'Кремовая пена, карамель, газированность.', phase: '🌒', phaseLabel: 'Растущая', price: 380 },
      { emoji: '🌊', name: 'Cascara прилива', origin: 'Йемен · Sana\'a', desc: 'Чай из кофейной ягоды, хибискус, кислинка.', phase: '🌕', phaseLabel: 'Полнолуние', price: 260 },
      { emoji: '🍦', name: 'Аффогато лунного света', origin: 'Эфиопия · Sidama', desc: 'Ванильное мороженое, горячий эспрессо.', phase: '🌘', phaseLabel: 'Убывающая', price: 340 },
    ],
  },
  {
    id: 'tea',
    items: [
      { emoji: '🌿', name: 'Матча новолуния', origin: 'Япония · Uji', desc: 'Умами, травяность, кремовость.', phase: '🌑', phaseLabel: 'Новолуние', price: 310 },
      { emoji: '🌸', name: 'Чай-чандра', origin: 'Дарджилинг · 1-й сбор', desc: 'Мускатный виноград, цветы, легкость.', phase: '🌒', phaseLabel: 'Растущая', price: 270 },
      { emoji: '🍫', name: 'Какао звёздного часа', origin: 'Перу · Cusco', desc: 'Тёмный шоколад, пряности, согревание.', phase: '🌕', phaseLabel: 'Полнолуние', price: 290 },
      { emoji: '🫖', name: 'Пуэр убывания', origin: 'Юньнань · Vintage 2019', desc: 'Земля, мох, глубина. Медитативный.', phase: '🌘', phaseLabel: 'Убывающая', price: 420 },
    ],
  },
]

const steps = [
  { title: 'Лунный прогноз', value: 1 },
  { title: 'Обжарка дня', value: 2 },
  { title: 'Заваривание', value: 3 },
  { title: 'Ваш напиток', value: 4 },
]

const origins = [
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
    region: 'Харас · Сана\'а · Матари',
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

const subPerks = [
  { icon: '📦', title: '250 г зерна', desc: 'Свежеобжаренное в день отправки' },
  { icon: '🌑', title: 'В новолуние', desc: 'Доставка в самый «тихий» день месяца' },
  { icon: '🃏', title: 'Карточка', desc: 'Рецепт заваривания и профиль вкуса' },
  { icon: '📖', title: 'Лунный гид', desc: 'PDF-календарь на месяц с советами' },
]

const footerMenu = ['Эспрессо', 'Фильтр', 'Альтернатива', 'Чай и не-кофе', 'Подписка']
const footerAbout = ['Наш подход', 'Команда', 'Поставщики', 'Блог', 'Контакты']

function submitOrder() {
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    orderDialog.value = false
    snackbar.value = true
    form.value = { name: '', phone: '', date: '', guests: 2, wish: '' }
  }, 1500)
}

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style>
* { box-sizing: border-box; }

body {
  background: #0a0806;
  color: #e8d5a3;
  font-family: 'DM Sans', sans-serif;
}

/* ── APP BAR ── */
.app-bar-custom {
  background: rgba(10,8,6,0.85) !important;
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(200,169,110,0.08) !important;
}
.app-bar-logo {
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 1.25rem;
  color: #c8a96e;
  letter-spacing: 0.12em;
}
.nav-btn { letter-spacing: 0.05em; font-size: 0.78rem !important; }
.drawer-logo { }
.logo-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 900;
  color: #c8a96e;
  letter-spacing: 0.1em;
  display: block;
}
.logo-sub { color: #7c5c3a; font-size: 0.8rem; margin-top: 4px; }
.nav-drawer-item { color: #e8d5a3; }

/* ── HERO ── */
.hero-section {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background: #0a0806;
}
.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.moon-glow {
  position: absolute;
  top: -120px;
  right: -80px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200,169,110,0.18) 0%, rgba(124,92,58,0.06) 45%, transparent 70%);
  animation: moonPulse 6s ease-in-out infinite;
}
@keyframes moonPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.08); opacity: 0.75; }
}
.star {
  position: absolute;
  background: #c8a96e;
  border-radius: 50%;
  animation: twinkle 3s ease-in-out infinite;
}
.star-1 { width: 3px; height: 3px; top: 20%; left: 15%; animation-delay: 0s; }
.star-2 { width: 2px; height: 2px; top: 35%; left: 75%; animation-delay: 0.8s; }
.star-3 { width: 4px; height: 4px; top: 60%; left: 10%; animation-delay: 1.5s; }
.star-4 { width: 2px; height: 2px; top: 15%; left: 55%; animation-delay: 0.4s; }
.star-5 { width: 3px; height: 3px; top: 75%; left: 80%; animation-delay: 2s; }
@keyframes twinkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(0.6); }
}
.coffee-steam {
  position: absolute;
  bottom: 15%;
  right: 12%;
  width: 2px;
  height: 40px;
  background: linear-gradient(to top, rgba(200,169,110,0.4), transparent);
  border-radius: 2px;
  animation: steam 2.5s ease-in-out infinite;
}
@keyframes steam {
  0% { transform: translateY(0) scaleX(1); opacity: 0.6; }
  50% { transform: translateY(-20px) scaleX(1.5); opacity: 0.3; }
  100% { transform: translateY(-40px) scaleX(0.5); opacity: 0; }
}

.hero-content {
  position: relative;
  z-index: 2;
  padding-top: 140px;
  padding-bottom: 100px;
}
.hero-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 900;
  line-height: 1.0;
  color: #e8d5a3;
  margin: 0 0 24px;
}
.hero-title em {
  color: #c8a96e;
  font-style: italic;
}
.hero-subtitle {
  font-size: 1.1rem;
  color: rgba(232,213,163,0.65);
  line-height: 1.7;
  margin-bottom: 40px;
  max-width: 420px;
}
.hero-btn-main {
  font-family: 'DM Mono', monospace;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  margin-right: 16px;
}
.hero-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 60px; }
.hero-stats {
  display: flex;
  gap: 48px;
  border-top: 1px solid rgba(200,169,110,0.15);
  padding-top: 32px;
  flex-wrap: wrap;
}
.stat-item { }
.stat-value {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #c8a96e;
  line-height: 1;
}
.stat-label {
  font-size: 0.75rem;
  color: rgba(232,213,163,0.5);
  margin-top: 4px;
  letter-spacing: 0.05em;
}

.moon-phase-bar {
  position: relative;
  z-index: 2;
  display: flex;
  border-top: 1px solid rgba(200,169,110,0.12);
  background: rgba(10,8,6,0.6);
  backdrop-filter: blur(8px);
}
.phase-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px;
  gap: 4px;
  border-right: 1px solid rgba(200,169,110,0.08);
  transition: background 0.3s;
}
.phase-item:last-child { border-right: none; }
.phase-item.active { background: rgba(200,169,110,0.08); }
.phase-icon { font-size: 1.4rem; }
.phase-name { font-size: 0.65rem; color: rgba(232,213,163,0.5); letter-spacing: 0.06em; text-transform: uppercase; }
.phase-item.active .phase-name { color: #c8a96e; }

/* ── SECTIONS ── */
.section-concept, .section-menu, .section-how, .section-origins, .section-subscription {
  padding: 100px 0;
}
.section-concept { background: #0d0b08; }
.section-menu { background: #0a0806; }
.section-how { background: #0d0b08; }
.section-origins { background: #0a0806; }
.section-subscription { background: #0d0b08; }

.section-header {
  text-align: center;
  margin-bottom: 56px;
}
.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: #e8d5a3;
  line-height: 1.1;
  margin: 8px 0;
}
.section-title em { color: #c8a96e; font-style: italic; }
.section-sub { color: rgba(232,213,163,0.55); font-size: 0.95rem; margin-top: 8px; }

/* ── CONCEPT ── */
.concept-text {
  font-size: 1.05rem;
  color: rgba(232,213,163,0.7);
  line-height: 1.8;
}
.principle-card {
  border: 1px solid rgba(200,169,110,0.1) !important;
  transition: border-color 0.3s, background 0.3s;
  cursor: default;
}
.principle-card:hover { border-color: rgba(200,169,110,0.3) !important; }
.principle-icon { font-size: 1.6rem; }
.principle-title {
  font-family: 'DM Mono', monospace;
  font-size: 0.8rem;
  color: #c8a96e;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.principle-desc { font-size: 0.85rem; color: rgba(232,213,163,0.6); line-height: 1.5; }

/* ── MENU ── */
.menu-tabs { border-bottom: 1px solid rgba(200,169,110,0.1); }
.menu-card {
  height: 100%;
  border: 1px solid rgba(200,169,110,0.08) !important;
  transition: border-color 0.3s, transform 0.2s;
}
.menu-card:hover {
  border-color: rgba(200,169,110,0.25) !important;
  transform: translateY(-4px);
}
.menu-card-emoji { font-size: 2.5rem; padding: 20px 16px 8px; }
.menu-card-title { font-family: 'Playfair Display', serif; font-size: 1rem !important; color: #e8d5a3; }
.menu-card-origin { font-family: 'DM Mono', monospace; font-size: 0.7rem !important; color: #7c5c3a; }
.menu-card-desc { font-size: 0.85rem; color: rgba(232,213,163,0.6); line-height: 1.5; }
.menu-price {
  font-family: 'DM Mono', monospace;
  font-size: 1rem;
  font-weight: 700;
  color: #c8a96e;
}

/* ── STEPPER ── */
.stepper-custom { background: transparent !important; }
.stepper-content p { color: rgba(232,213,163,0.7); font-size: 0.95rem; line-height: 1.7; }

/* ── ORIGINS ── */
.origin-card {
  height: 100%;
  border: 1px solid rgba(200,169,110,0.1) !important;
  transition: border-color 0.3s;
}
.origin-card:hover { border-color: rgba(200,169,110,0.3) !important; }
.origin-flag { font-size: 3rem; padding: 24px 20px 8px; }
.origin-country { font-family: 'Playfair Display', serif; font-size: 1.3rem !important; color: #e8d5a3; }
.origin-region { font-family: 'DM Mono', monospace; font-size: 0.72rem !important; color: #7c5c3a; }

/* ── SUBSCRIPTION ── */
.subscription-card {
  border: 1px solid rgba(200,169,110,0.15) !important;
  overflow: hidden;
}
.subscription-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: #e8d5a3;
  line-height: 1.05;
}
.subscription-title em { color: #c8a96e; font-style: italic; }
.subscription-desc { color: rgba(232,213,163,0.65); line-height: 1.7; }
.subscription-visual {
  background: rgba(200,169,110,0.04);
  border-left: 1px solid rgba(200,169,110,0.1);
  display: flex;
  align-items: center;
}
.sub-phases { display: flex; flex-direction: column; gap: 24px; width: 100%; }
.sub-perk { display: flex; align-items: flex-start; gap: 16px; }
.sub-perk-icon { font-size: 1.8rem; min-width: 2.2rem; }
.sub-perk-title { font-family: 'DM Mono', monospace; font-size: 0.8rem; color: #c8a96e; text-transform: uppercase; letter-spacing: 0.05em; }
.sub-perk-desc { font-size: 0.85rem; color: rgba(232,213,163,0.6); margin-top: 2px; }

/* ── FOOTER ── */
.footer-custom { padding: 64px 0 32px !important; }
.footer-logo {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 900;
  color: #c8a96e;
  letter-spacing: 0.1em;
}
.footer-tagline { color: #7c5c3a; font-size: 0.85rem; }
.footer-address { color: rgba(232,213,163,0.45); font-size: 0.85rem; line-height: 1.6; }
.footer-col-title {
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  color: #c8a96e;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
}
.footer-link { color: rgba(232,213,163,0.45); font-size: 0.85rem; margin-bottom: 8px; cursor: pointer; transition: color 0.2s; }
.footer-link:hover { color: #c8a96e; }
.footer-bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  color: rgba(232,213,163,0.3);
  font-size: 0.78rem;
  font-family: 'DM Mono', monospace;
}
.footer-phase { color: rgba(200,169,110,0.5); }

/* ── DIALOG ── */
.dialog-title { font-family: 'Playfair Display', serif; font-size: 1.4rem !important; color: #e8d5a3; }
.dialog-sub { color: rgba(232,213,163,0.5); font-size: 0.9rem; }
</style>
