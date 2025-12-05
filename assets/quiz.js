// home page
const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const userNameInput = document.getElementById("userNameInput");
const quizContainer = document.getElementById("quizContainer");

// quiz variables
const quizProgress = document.getElementById('quizProgress');
const questionContainer = document.getElementById('questionContainer');
const answerContainer = document.getElementById('answerContainer');

// leaderboard
const leaderboardSection = document.getElementById("leaderboard");
const leaderboardList = document.getElementById("leaderboardList");
const leaderboardResetBtn = document.getElementById("resetBtn");

// Event listener for static leaderboard reset button
leaderboardResetBtn.addEventListener("click", resetQuiz);

// store user name
let userName = "";

// score 
let currentQuestionIndex = 0;
let score = 0;

// Questions array
const questions = [
    { question: "Who has scored more Premier League goals?", answers: ["Wayne Rooney", "Sergio Aguero", "Les Ferdinand", "Harry Kane"], correct: "Harry Kane" },
    { question: "Who has the most Premier League assists?", answers: ["Kevin De Bruyne", "Ryan Giggs", "Steven Gerrard", "Cesc Fabregas"], correct: "Ryan Giggs" },
    { question: "Who has the most Premier League red cards?", answers: ["Nemanja Vidic", "Roy Keane", "Jamie Carragher", "Patrick Vieira"], correct: "Patrick Vieira" },
    { question: "Who has played for the most Premier League clubs?", answers: ["Peter Crouch", "Nicolas Anelka", "Marcus Bent", "James Milner"], correct: "Marcus Bent" },
    { question: "Who has more Premier League Clean Sheets?", answers: ["Peter Schmeichel", "David James", "David De Gea", "Petr Cech"], correct: "Petr Cech" },
];

// Start quiz
startBtn.addEventListener("click", () => {
    const name = userNameInput.value.trim();
    if (!name) {
        alert("Please enter your name to start the quiz!");
        return;
    }
    userName = name;

    startScreen.style.display = "none";
    quizContainer.style.display = "block";

    loadQuestion();
});

// Load question function
function loadQuestion() {
    const currentQ = questions[currentQuestionIndex];
    questionContainer.textContent = currentQ.question;

    answerContainer.innerHTML = "";
    currentQ.answers.forEach(ans => {
        const btn = document.createElement("button");
        btn.textContent = ans;
        btn.addEventListener("click", () => handleAnswer(ans));
        answerContainer.appendChild(btn);
    });

    updateProgress();
}

// Handle answer function
function handleAnswer(selectedAnswer) {
    const currentQ = questions[currentQuestionIndex];
    const buttons = answerContainer.querySelectorAll("button");

    buttons.forEach(btn => btn.disabled = true);
    const clickedBtn = [...buttons].find(btn => btn.textContent === selectedAnswer);

    if (selectedAnswer === currentQ.correct) {
        score++;
        clickedBtn.classList.add("correct");
        quizProgress.textContent = `${userName}, Correct! Score: ${score} / ${questions.length}`;
    } else {
        clickedBtn.classList.add("wrong");
        const correctBtn = [...buttons].find(btn => btn.textContent === currentQ.correct);
        correctBtn.classList.add("correct");
        quizProgress.textContent = `${userName}, Wrong! Score: ${score} / ${questions.length}`;
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            endQuiz();
        } else {
            loadQuestion();
        }
    }, 3000);
}

// Update progress
function updateProgress() {
    quizProgress.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
}

// End quiz function
function endQuiz() {
    saveScore(userName, score);

    questionContainer.textContent = `Thank you for playing ${userName}, I hope you had fun!`;

    // Dynamically create Play Again and View Leaderboard buttons
    answerContainer.innerHTML = `
        <p>Your score: ${score} / ${questions.length}</p>
        <button id="playAgainBtn">Play Again!</button>
        <button id="showLeaderboardBtn">View Leaderboard</button>
    `;

    document.getElementById("playAgainBtn").addEventListener("click", resetQuiz);
    document.getElementById("showLeaderboardBtn").addEventListener("click", showLeaderboard);
}

// Reset quiz function
function resetQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    userName = "";

    quizContainer.style.display = "none";
    leaderboardSection.style.display = "none";
    startScreen.style.display = "block";

    userNameInput.value = "";
    quizProgress.textContent = "";
    questionContainer.textContent = "";
    answerContainer.innerHTML = "";
}

// Save score function
function saveScore(name, score) {
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.push({ name, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 10);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

// Show leaderboard function
function showLeaderboard() {
    quizContainer.style.display = "none";
    leaderboardSection.style.display = "block";

    // Clear quiz content
    questionContainer.textContent = "";
    answerContainer.innerHTML = "";
    quizProgress.textContent = "";

    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboardList.innerHTML = "";

    leaderboard.forEach((entry, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${entry.name} — ${entry.score}`;
        leaderboardList.appendChild(li);
    });
}









