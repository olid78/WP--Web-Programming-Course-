const quizData = [
  {
    question: "JavaScript is?",
    options: ["Programming Language", "Game", "Browser", "Device"],
    answer: 0
  },
  {
    question: "Which one is loop?",
    options: ["if", "for", "const", "var"],
    answer: 1
  },
  {
    question: "HTML used for?",
    options: ["Logic", "Design", "Structure", "Database"],
    answer: 2
  },
  {
    question: "CSS used for?",
    options: ["Style", "Logic", "Server", "Loop"],
    answer: 0
  },
  {
    question: "Array symbol?",
    options: ["{}", "()", "[]", "<>"],
    answer: 2
  }
];

let quiz = document.getElementById("quiz");


quizData.forEach((item, index) => {

  quiz.innerHTML += `
    <div class="question">
      <p>${index + 1}. ${item.question}</p>

      <input type="radio" name="q${index}" value="0"> ${item.options[0]} <br>
      <input type="radio" name="q${index}" value="1"> ${item.options[1]} <br>
      <input type="radio" name="q${index}" value="2"> ${item.options[2]} <br>
      <input type="radio" name="q${index}" value="3"> ${item.options[3]} <br>
    </div>
  `;
});


function checkAnswer() {

  let score = 0;

  quizData.forEach((item, index) => {

    let selected = document.querySelector(`input[name="q${index}"]:checked`);

    if (selected && Number(selected.value) === item.answer) {
      score++;
    }

  });

  document.getElementById("result").innerHTML =
    "Your Score: " + score + " / " + quizData.length;
}
