const questions = [
    {
        question: 'Which is the largest animal in the world?',
        answer: [
            { text: 'Shark', correct: false },
            { text: 'Blue whale', correct: true },
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: false },
        ]
    },
    {
        question: 'Which is the tallest animal in the world?',
        answer: [
            { text: 'Shark', correct: false },
            { text: 'Blue whale', correct: false },
            { text: 'Elephant', correct: false },
            { text: 'Giraffe', correct: true },
        ]
    },
    {
        question: 'Grand Central Terminal, Park Avenue, New York is the world',
        answer: [
            { text: 'Largest railway station', correct: true },
            { text: 'Highest railway station', correct: false },
            { text: 'Longest railway station', correct: false },
            { text: 'None of the above', correct: false },
        ]
    },
    {
        question: 'Entomology is the science that studies',
        answer: [
            { text: 'Behavior of human beings', correct: false },
            { text: 'Insects', correct: true },
            { text: 'The origin and history of technical and scientific terms', correct: false },
            { text: 'The formation of rocks', correct: false },
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answer.forEach(function (answer) {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer) {
    const selectedButton = answerButtons.querySelector('[data-correct="true"]');

    if (answer.correct) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
    }

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });

    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'block';
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
