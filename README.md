# 🇲🇲 Myanmar Quiz Game

Ever wondered how much you really know about Myanmar? I built this little quiz game to test that.

It's a simple web app — no install, no sign-up, just open `index.html` in your browser and start playing. You pick a category (history, culture, geography, or food), and it gives you 10 random questions. Get instant feedback on each answer, and see your final score at the end.

I made this because I wanted something fun and educational at the same time. There are over 40 questions covering everything from ancient kingdoms to mohinga.

## How to play

Clone the repo and open it in your browser:

```bash
git clone https://github.com/Nyein-Sat-Thaw/myanmar-quiz-game.git
```

Then just open `index.html`. That's it.

## What's inside

- **4 categories** — History, Culture, Geography, Food (or mix them all)
- **40+ questions** with 4 choices each
- **Score tracking** as you go
- **Review screen** at the end so you can learn from mistakes

## The categories

- 🏛️ **History** — kings, independence, colonial era, modern events
- 🎭 **Culture** — festivals, traditions, thanaka, puppet shows
- 🗺️ **Geography** — rivers, lakes, mountains, capitals
- 🍜 **Food** — mohinga, lahpet, ohn no khao swè, and more

## How it's built

Plain HTML, CSS, and JavaScript. Nothing fancy. No frameworks, no build steps. I used Claude Code to help me write the code, generate quiz questions, and set up the project structure.

## Adding your own questions

Want to add more? Open `questions.js` and follow the same format:

```javascript
{
  q: "Your question here?",
  options: ["A", "B", "C", "D"],
  answer: 0
}
```

## Why I built this

I wanted to make something useful with Claude Code, and I thought — why not a quiz about Myanmar? It's a good way to learn and have fun at the same time. Hope you enjoy it!
