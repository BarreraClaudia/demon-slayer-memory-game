# Demon Slayer Memory Game

A memory card game built with React featuring characters from the anime _Demon Slayer: Kimetsu no Yaiba_. Test your memory by clicking each card exactly once — repeat a card and you lose!

## How to Play

Click each of the 12 character cards once without repeating. Each click shuffles the cards, so keep track of who you've already chosen. Click all 12 without a repeat to win. Your best score is saved across rounds.

## Features

- 12 Demon Slayer characters fetched from the [Jikan API](https://jikan.moe/)
- Cards shuffle after every click
- Current score and best score tracking
- Win/lose dialog with thematic messages
- Each character card has a unique glowing border color matching their signature style
- Responsive card grid layout

## Tech Stack

- React
- Vite
- Plain CSS
- Jikan API (MyAnimeList unofficial API)

## Project Structure

```
src/
├── components/
│   ├── App.jsx
│   ├── Game.jsx
│   ├── Card.jsx
│   ├── Score.jsx
│   ├── Header.jsx
│   └── GameOverDialog.jsx
├── styles/
│   ├── App.css
│   ├── Game.css
│   ├── Card.css
│   ├── Score.css
│   ├── Header.css
│   └── GameOverDialog.css
├── utils/
│   ├── getCharactersById.js
│   └── shuffle.js
├── index.css
└── main.jsx
```

## Getting Started

```bash
# Clone the repository
git clone https://github.com/BarreraClaudia/demon-slayer-memory-game

# Install dependencies
cd demon-slayer-memory-game
npm install

# Start the development server
npm run dev
```

## Build

```bash
npm run build
```

Output is generated in the `dist/` folder.

## Acknowledgements

Character data and images provided by the [Jikan REST API](https://jikan.moe/), an unofficial MyAnimeList API. Demon Slayer: Kimetsu no Yaiba is created by Koyoharu Gotouge.
