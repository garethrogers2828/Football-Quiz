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
    {
        question: "Who has the most Premier League assists?",
        answers: ["Kevin De Bruyne", "Ryan Giggs", "Steven Gerrard", "Cesc Fabregas"],
        correct: "Ryan Giggs"
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

// handle answer function

function handleAnswer(selectedAnswer) {
    const currentQ = questions[currentQuestionIndex];
    const buttons = answerContainer.querySelectorAll("button");

    // Disable all buttons immediately
    buttons.forEach(btn => btn.disabled = true);

    // Identify the clicked button
    const clickedBtn = [...buttons].find(btn => btn.textContent === selectedAnswer);

    // Correct logic
    if (selectedAnswer === currentQ.correct) {
        score++;
        clickedBtn.classList.add("correct");
    } else {
        clickedBtn.classList.add("wrong");

        // highlight the real correct answer
        const correctBtn = [...buttons].find(btn => btn.textContent === currentQ.correct);
        correctBtn.classList.add("correct");
    }

    // Wait 5 seconds, then go to next question
    setTimeout(() => {
        currentQuestionIndex++;

        if (currentQuestionIndex >= questions.length) {
            endQuiz();
        } else {
            loadQuestion();
        }
    }, 5000);
}


function updateProgress() {
    quizProgress.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
}

function endQuiz() {
    questionContainer.textContent = "Quiz Finished!";
    answerContainer.innerHTML = `Your score: ${score} / ${questions.length}`;
}

// Start quiz 
loadQuestion();



