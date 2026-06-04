# LUNA BREW — кофейня по лунному календарю

Демонстрационный SPA о кофейне, где напитки подбираются по фазе луны. Проект использует **Vue Router** и **Vuex** (курсы Vue School).

## Vuex

| Модуль | Назначение |
|--------|------------|
| `cart` | Корзина: добавление, количество, итог, боковая панель |
| `favorites` | Избранные напитки + сохранение в `localStorage` (plugin) |
| `moon` | Текущая фаза луны (state / getters / actions) |
| `booking` | Форма бронирования стола (диалог и отправка) |

Все модули **namespaced** с `state`, `getters`, `mutations`, `actions`.

## Vue Router

| Возможность | Реализация в проекте |
|-------------|----------------------|
| Маршруты и `router-view` | Отдельные страницы: главная, концепция, меню, процесс, происхождение, подписка |
| Именованные маршруты | `home`, `concept`, `menu-category`, `drink-detail`, … |
| Динамические параметры | `/menu/:category`, `/menu/:category/:slug` |
| Вложенные маршруты | `MenuLayout` → список категории и карточка напитка |
| Навигационные хуки | `beforeEnter` проверяет корректность категории |
| Lazy loading | `() => import('../views/...')` для code-splitting |
| `scrollBehavior` | Прокрутка вверх при смене страницы |
| `meta` + `afterEach` | Заголовок вкладки браузера |

Примеры URL:

- `/` — главная
- `/menu/espresso` — эспрессо
- `/menu/espresso/lunnyj-espresso` — карточка напитка
- `/concept`, `/how`, `/origins`, `/subscription`

## Стек

- Vue 3 + Vue Router 4 + Vuex 4
- Vuetify 4
- Vite

## Запуск локально

```bash
cd luna-brew
npm install
npm run dev
```

Откройте адрес из терминала (часто http://localhost:5173). Если порт занят, Vite предложит другой (например 5174).

## Сайт в интернете (GitHub Pages)

После включения Pages в настройках репозитория сайт доступен по адресу:

**https://belyash67.github.io/luna-brew/**

> Ссылка на GitHub (`github.com/.../luna-brew`) — это репозиторий с кодом, а не сам сайт.

## Сборка

```bash
npm run build
npm run preview
```

## Курсы Vue School

- Vue Router: https://vueschool.io/courses/vue-router-4-for-everyone
- Vuex: https://vueschool.io/courses/vuex-for-everyone
