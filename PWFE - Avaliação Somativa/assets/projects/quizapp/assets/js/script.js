const questionElement = document.querySelector('.question');
const answersElement = document.querySelector('.answers');
const spn_qts = document.querySelector('.spn-qts');
const text_finish = document.querySelector('.finish span');
const content = document.querySelector('.content');
const content_finish = document.querySelector('.finish');
const btn_restart = document.querySelector('.finish button');

const questions = [
    {
        question: 'Quem é considerado o "pai da computação" e desenvolveu a primeira máquina de computação mecânica programável?',
        answers: [
            {option: 'Alan Turing', correct: false},
            {option: 'Charles Babbage', correct: true},
            {option: 'John von Neumann', correct: false},
            {option: 'Tim Berners-Lee', correct: false}
        ],
    },
    {
        question: 'Qual foi o primeiro computador eletrônico digital de uso geral e em que ano foi concluído?',
        answers: [
            {option: 'ENIAC (1946)', correct: true},
            {option: 'UNIVAC I (1951)', correct: false},
            {option: 'Colossus (1943)', correct: false},
            {option: 'Difference Engine (1837)', correct: false}
        ],
    },
    {
        question: 'Qual foi o primeiro computador comercialmente disponível e em que ano foi lançado?',
        answers: [
            {option: 'Apple I (1976)', correct: false},
            {option: 'IBM PC (1981)', correct: false},
            {option: 'Altair 8800 (1975)', correct: false},
            {option: 'UNIVAC I (1951)', correct: true}
        ],
    },
    {
        question: 'Em que ano foi introduzido o primeiro microprocessador comercialmente viável?',
        answers: [
            {option: '1969', correct: false},
            {option: '1971', correct: true},
            {option: '1975', correct: false},
            {option: '1980', correct: false}
        ],
    },
    {
        question: 'Qual foi o primeiro computador pessoal a ser amplamente adotado, lançado em 1981?',
        answers: [
            {option: 'Apple II', correct: true},
            {option: 'IBM PC', correct: false},
            {option: 'Commodore PET', correct: false},
            {option: 'Altair 8800', correct: false}
        ],
    },
    {
        question: 'Quem inventou o World Wide Web (WWW) e em que ano?',
        answers: [
            {option: 'Bill Gates (1995)', correct: false},
            {option: 'Steve Jobs (1976)', correct: false},
            {option: 'Tim Berners-Lee (1989)', correct: true},
            {option: 'Larry Page (1998)', correct: false}
        ],
    },
    {
        question: 'Qual empresa lançou o primeiro navegador web gráfico amplamente utilizado?',
        answers: [
            {option: 'Netscape', correct: true},
            {option: 'Microsoft', correct: false},
            {option: 'Apple', correct: false},
            {option: 'Google', correct: false}
        ],
    },
    {
        question: 'Quem é considerado o fundador da Apple Inc. e em que ano foi fundada a empresa?',
        answers: [
            {option: 'Steve Wozniak (1976)', correct: false},
            {option: 'Bill Gates (1975)', correct: false},
            {option: 'Steve Jobs (1976)', correct: true},
            {option: 'Jeff Bezos (1994)', correct: false}
        ],
    },
    {
        question: 'Qual foi o primeiro sistema operacional amplamente utilizado desenvolvido pela Microsoft Corporation?',
        answers: [
            {option: 'MS-DOS', correct: true},
            {option: 'Windows 3.1', correct: false},
            {option: 'Windows 95', correct: false},
            {option: 'Windows XP', correct: false}
        ],
    },
    {
        question: 'Quem é considerado o pai do sistema operacional UNIX?',
        answers: [
            {option: 'Linus Torvalds', correct: false},
            {option: 'Bill Gates', correct: false},
            {option: 'Dennis Ritchie', correct: true},
            {option: 'Richard Stallman', correct: false}
        ],
    }
];

let current_index = 0;
let questionsCorrect = 0;

function loadQuestion() {
    spn_qts.innerHTML = `${current_index + 1} / ${questions.length}`;
    const item = questions[current_index];
    answersElement.innerHTML = '';
    questionElement.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement('div');

        div.innerHTML = `
            <button class="answer" data-correct="${answer.correct}">${answer.option}</button>
        `;
        answersElement.appendChild(div);
    });

    document.querySelectorAll('.answer').forEach((button) => {
        button.addEventListener('click', nextQuestion);
    });
}

loadQuestion();

function nextQuestion(e) {
    if (e.target.getAttribute('data-correct') === 'true') {
        questionsCorrect++;
    }
    if (current_index < questions.length - 1) {
        current_index++;
        loadQuestion();
    } else {
        finish();
    }
}

function finish() {
    text_finish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length} questões!`;
    content.style.display = 'none';
    content_finish.style.display = 'flex';
}


btn_restart.onclick = () => {
    content.style.display = 'flex';
    content_finish.style.display = 'none';
    current_index = 0;
    questionsCorrect = 0;
    loadQuestion();
};