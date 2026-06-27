<!--
  Marp template — "product-demo"
  Myanmar Quiz Game — Product Intro
-->
---
marp: true
paginate: true
size: 16:9
auto-advance: 20
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@500&display=swap');
:root { --bg:#f8fafc; --ink:#0f172a; --muted:#64748b; --accent:#0d9488; --line:#e2e8f0; --code:#0f172a; }
section {
  background:var(--bg); color:var(--ink);
  font-family:'Inter','Noto Sans','Pyidaungsu',sans-serif;
  font-size:26px; line-height:1.5; padding:48px 64px;
}
h1 { color:var(--ink); font-weight:800; font-size:1.6em; }
h2 { color:var(--accent); font-weight:600; }
h3 { color:var(--muted); font-weight:600; }
strong { color:var(--accent); }
a { color:var(--accent); text-decoration:none; }
img { border-radius:12px; box-shadow:0 12px 30px rgba(15,23,42,.18); }
code { background:#e6fffb; color:#0f766e; padding:.06em .35em; border-radius:5px; font-family:'JetBrains Mono',monospace; }
pre  { background:var(--code); border-radius:10px; }
pre code { background:none; color:#e2e8f0; }
blockquote { border-left:4px solid var(--accent); background:#ecfeff; color:#155e75; padding:.5em 1em; }
header,footer,section::after { color:var(--muted); font-size:.5em; }
section.cover {
  background:radial-gradient(800px 360px at 82% 14%, rgba(13,148,136,.18), transparent 60%), var(--bg);
}
section.cover h1 { font-size:2.3em; }
section.cover h2 { color:var(--muted); font-weight:400; }
section.shot { background:#0f172a; color:#e2e8f0; padding:0; display:flex; align-items:center; justify-content:center; }
section.shot img { box-shadow:0 20px 50px rgba(0,0,0,.5); border-radius:8px; max-width:88%; max-height:82%; }
</style>

<!-- _class: cover -->

# 🇲🇲 Myanmar Quiz Game

## How much do you really know about Myanmar?

Nyein-Sat-Thaw · @Nyein-Sat-Thaw · vibecode.tours

---

# What you get

- **4 categories** — History, Culture, Geography, Food
- **40+ questions** with instant feedback
- **Score tracking** and review screen to learn from mistakes

---

# How it works

1. Pick a category (or mix them all)
2. Answer 10 random questions
3. See your score and review wrong answers

No install, no sign-up — just open and play.

---

<!-- _class: shot -->

![](screenshots/01.png)

---

# How it's built

```bash
git clone https://github.com/Nyein-Sat-Thaw/myanmar-quiz-game.git
# then open index.html
```

Stack: **HTML + CSS + JavaScript** · built with Claude Code

---

# Try it

- **Live:** https://nyein-sat-thaw.github.io/myanmar-quiz-game/
- **Repo:** github.com/Nyein-Sat-Thaw/myanmar-quiz-game · **License:** MIT
