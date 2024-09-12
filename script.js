"use strict";

const quizData = [
  {
    question: "How old is Aayush?",
    a: 4,
    b: 10,
    c: 19,
    d: 24,
    correct: "c",
  },
  {
    question: "What was the most used prorgamming language in 2019?",
    a: "Java",
    b: "Python",
    c: "JavaScript",
    d: "C++",
    correct: "c",
  },
  {
    question: "Who is the president of Nepal?",
    a: "Bishesh Bidari",
    b: "Saraswati Chaudhary",
    c: "Krishna Prasad Bhandari",
    d: "Bidhya Devi Bhandari",
    correct: "d",
  },
  {
    question: "What does RAM stand for?",
    a: "Radio Attention Malnutrition",
    b: "RAM",
    c: "Random Access Memory",
    d: "Row Affectionate Man",
    correct: "c",
  },
  {
    question: "Which is the most subscribed youtube channel?",
    a: "Better call saul",
    b: "KSI",
    c: "Mr. This",
    d: "T-series",
    correct: "d",
  },
  {
    question: "Who is the creator of Forza Horizon?",
    a: "Turn 10 studios",
    b: "Microsoft",
    c: "Xbox",
    d: "Mr. Beast",
    correct: "b",
  },
];

const container = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("label-a");
const b_text = document.getElementById("label-b");
const c_text = document.getElementById("label-c");
const d_text = document.getElementById("label-d");
const submitBtn = document.getElementById("submit");
const scoreDisplay = document.getElementById("scoreh2");

let currentQuiz = 0;
let answer = undefined;
let score = 0;

const loadQuiz = function () {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitBtn.addEventListener("click", function () {
  getSelected();
  scoreChecker();
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    scoreh2.innerHTML = `You scored ${score} out of 6 ! ✅`;
    scoreh2.classList.remove("hidden");
    questionEl.classList.add("hidden");
    a_text.classList.add("hidden");
    b_text.classList.add("hidden");
    c_text.classList.add("hidden");
    d_text.classList.add("hidden");
    if (score <= 5) {
      submitBtn.textContent = "Retry?";
      submitBtn.setAttribute("onClick", "location.reload()");
    } else {
      submitBtn.classList.add("hidden");
      scoreh2.innerHTML = `Congrats! You scored ${score} out of 6 ! 💰`;
    }
    a.classList.add("hidden");
    b.classList.add("hidden");
    c.classList.add("hidden");
    d.classList.add("hidden");
  }
});

const getSelected = function () {
  const answerEls = document.querySelectorAll(".answer");

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  if (!answer) {
    alert("You must select an answer!");
  }
};

const scoreChecker = function () {
  const currentQuizData = quizData[currentQuiz];
  if (answer.toLowerCase() === currentQuizData.correct) {
    score++;
  }
};
