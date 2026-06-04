# LUNA BREW — кофейня по лунному календарю

Демонстрационный SPA о кофейне, где напитки подбираются по фазе луны. Проект доработан под задание курса [Vue Router 4 for Everyone](https://vueschool.io/courses/vue-router-4-for-everyone) (Vue School).

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

- Vue 3 + Vue Router 4
- Vuetify 4
- Vite

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## Курс

Vue School: https://vueschool.io/courses/vue-router-4-for-everyone
