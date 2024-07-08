const questions = [
    {
        question: "How many players are on a basketball team?",
        choices: ["5", "6", "7", "8"],
        answer: "5"
    },
    {
        question: "What is the height of a basketball hoop?",
        choices: ["8 feet", "9 feet", "10 feet", "11 feet"],
        answer: "10 feet"
    },
    {
        question: "Who is known as the 'GOAT' of basketball?",
        choices: ["Michael Jordan", "LeBron James", "Kobe Bryant", "Shaquille O'Neal"],
        answer: "Michael Jordan"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('next');
const resultElement = document.getElementById('result');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('choice');
        button.addEventListener('click', () => selectAnswer(choice));
        choicesElement.appendChild(button);
    });
}

function selectAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (choice === currentQuestion.answer) {
        score++;
    }
    nextButton.style.display = 'block';
}

function showResult() {
    questionElement.style.display = 'none';
    choicesElement.style.display = 'none';
    nextButton.style.display = 'none';
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.style.display = 'none';
    } else {
        showResult();
    }
});

loadQuestion();
nextButton.style.display = 'none';
