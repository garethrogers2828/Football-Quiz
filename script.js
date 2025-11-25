const quizProgress = document.getElementById('quizProgress');
const questionContainer = document.getElementById('questionContainer');
const answerContainer = document.getElementById('answerContainer');

// score 
let currentQuestionIndex = 0;
let score = 0;

// Questions
const questions = [
    {
        question: "Who has scored more Premier League goals?",
        answers: ["Wayne Rooney", "Sergio Aguero", "Les Ferdinand", "Harry Kane"],
        correct: "Wayne Rooney"
    },
];

// Load Question 
function loadQuestion() {
    const currentQ = questions[currentQuestionIndex];

    // Show question
    questionContainer.textContent = currentQ.question;

    // Clear old answers
    answerContainer.innerHTML = "";

    // Add answer buttons
    currentQ.answers.forEach(ans => {
        const btn = document.createElement("button");
        btn.textContent = ans;

        btn.addEventListener("click", () => handleAnswer(ans));
        answerContainer.appendChild(btn);
    });

    updateProgress();
}

// START QUIZ
loadQuestion();



