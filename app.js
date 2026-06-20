// Myanmar Quiz Game — Main Application
const TOTAL_QUESTIONS = 10;

let currentCategory = "";
let questions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

// DOM elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const categoryLabel = document.getElementById("category-label");
const scoreDisplay = document.getElementById("score-display");
const questionCounter = document.getElementById("question-counter");
const progress = document.getElementById("progress");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

// Category buttons
document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    startQuiz(btn.dataset.category);
  });
});

function startQuiz(category) {
  currentCategory = category;
  if (category === "mixed") {
    // Mix questions from all categories
    const all = Object.values(QUESTIONS).flat();
    questions = shuffle(all).slice(0, TOTAL_QUESTIONS);
    categoryLabel.textContent = "🎲 Mixed";
  } else {
    questions = shuffle([...QUESTIONS[category]]).slice(0, TOTAL_QUESTIONS);
    const icons = { history: "🏛️", culture: "🎭", geography: "🗺️", food: "🍜" };
    categoryLabel.textContent = `${icons[category]} ${category.charAt(0).toUpperCase() + category.slice(1)}`;
  }

  currentIndex = 0;
  score = 0;
  answered = false;

  showScreen("quiz");
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  nextBtn.classList.add("hidden");

  const q = questions[currentIndex];
  questionText.textContent = q.q;
  questionCounter.textContent = `${currentIndex + 1} / ${questions.length}`;
  scoreDisplay.textContent = `Score: ${score}`;
  progress.style.width = `${((currentIndex) / questions.length) * 100}%`;

  optionsContainer.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => selectAnswer(i, btn));
    optionsContainer.appendChild(btn);
  });
}

function selectAnswer(index, btn) {
  if (answered) return;
  answered = true;

  const q = questions[currentIndex];
  const allBtns = optionsContainer.querySelectorAll(".option-btn");

  // Mark correct and wrong
  allBtns[q.answer].classList.add("correct");
  if (index !== q.answer) {
    btn.classList.add("wrong");
  } else {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
  }

  // Disable all buttons
  allBtns.forEach((b) => b.classList.add("disabled"));

  nextBtn.classList.remove("hidden");
  nextBtn.textContent = currentIndex < questions.length - 1 ? "Next →" : "See Results 🎉";
}

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

function showResults() {
  showScreen("result");

  const percent = Math.round((score / questions.length) * 100);
  document.getElementById("result-score").textContent = `${score} / ${questions.length}`;

  let title, message;
  if (percent === 100) {
    title = "🏆 Perfect Score!";
    message = "You're a true Myanmar expert!";
  } else if (percent >= 70) {
    title = "🌟 Great Job!";
    message = "You know Myanmar very well!";
  } else if (percent >= 50) {
    title = "👍 Good Effort!";
    message = "Keep learning about Myanmar!";
  } else {
    title = "📚 Keep Learning!";
    message = "There's so much to discover about Myanmar!";
  }

  document.getElementById("result-title").textContent = title;
  document.getElementById("result-message").textContent = message;

  // Show detail of each question
  const details = document.getElementById("result-details");
  details.innerHTML = "<h3>Review:</h3>";
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "detail-item";
    div.innerHTML = `<span class="detail-correct">✓</span> Q${i + 1}: ${q.q} → <strong>${q.options[q.answer]}</strong>`;
    details.appendChild(div);
  });

  progress.style.width = "100%";
}

restartBtn.addEventListener("click", () => {
  showScreen("start");
});

function showScreen(name) {
  startScreen.classList.remove("active");
  quizScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  document.getElementById(`${name}-screen`).classList.add("active");
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
