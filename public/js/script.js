const quizData = [
    {
        question: 'What is the main oracle cryptocurrency ?',
        a: 'Band Protocol',
        b: 'Chainlink',
        c: 'Augur Porotocol',
        d: 'Dia',
        correct: 'b',
    }, {
        question: 'What is the main platform to borrow cryptocurrencies on the BSC ?',
        a: 'PancakeSwap',
        b: 'BakerySwap',
        c: 'Venus',
        d: 'JulSwap',
        correct: 'c',
    }, {
        question: 'What is the main decentralized exchange on the Solana ecosystem ?',
        a: 'Serum',
        b: 'Raydium',
        c: 'Uniswap',
        d: 'Quickswap',
        correct: 'a',
    }, {
        question: 'With which protocol can you buy tokenized actions on the Terra blockchain ?',
        a: 'Mirror Protocol',
        b: 'Anchor Protocol',
        c: 'Syntetix',
        d: 'FTX',
        correct: 'a',
    }, {
        question: 'What is the main decentralized exchange on the Matic ecosystem ?',
        a: 'Uniswap',
        b: 'Serum',
        c: 'PancakeSwap',
        d: 'Quickswap',
        correct: 'd',
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer)
    {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onClick="location.reload()">Reload</button>`;
        }
    }

});