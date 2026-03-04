# Portfolio — React

Портфолио переписано на **React** (Vite + React Router).

## Запуск

```bash
npm install
npm run dev
```

Открой в браузере: http://localhost:5173

## Сборка

```bash
npm run build
```

Результат в папке `dist/`. Для GitHub Pages скопируй содержимое `dist/` в корень репозитория или настрой деплой из ветки `main` в папку `docs` / GitHub Actions. Файл `public/CNAME` (antoniosifov.com) попадёт в `dist/` при сборке.

## Картинки

Положи изображения в **`public/img/`** (как в старой версии — `img/` в корне):

- `1758025908213.jpg` — фото для About
- `spotify.jpg`, `movie.jpg`, `commerce.jpg`, `dailyTracker.png`, `parserAPI.jpg`, `portfolio.png` — для страниц проектов
- `github.png` — иконка кнопки GitHub

Если раньше у тебя была папка `img/` в корне проекта — просто перенеси её в `public/img/`.

## Структура

- `src/App.jsx` — роутинг и тема
- `src/pages/HomePage.jsx` — главная (Hero, About, Skills, Projects, Contact)
- `src/components/` — Navbar, Hero, About, Skills, Projects, Contact, ProjectDetail, FloatingElements, ScrollIndicator
- `src/context/ThemeContext.jsx` — переключение тем (cyberpunk / glass / lightblue)
- `src/data/projects.js` — данные проектов и описания
- `src/index.css` — все стили (перенесены из старых CSS)

Старые файлы (`css/`, `js/`, `projects/*.html`) можно удалить после проверки новой версии.
