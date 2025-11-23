
cons

// create answer boxes 
const answerBox = document.getElementById("answerContainer");
const question = {
    question: "Who has scored more Premier League goals?",
    answers: ["Wayne Rooney", "Sergio Aguero", "Les Ferdinand"],
    correct: "Wayne Rooney"
};

// Clear old answers
answerBox.innerHTML = "";

// Add new buttons
question.answers.forEach(ans => {
    const btn = document.createElement("button");
    btn.textContent = ans;
    answerBox.appendChild(btn);
});

