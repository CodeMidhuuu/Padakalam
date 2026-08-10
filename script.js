/* =====================================================
   PADAKKALAM GAME DATA
===================================================== */

const riddles = [
  {
    question:
      'Oru marathil 10 kilikal irunnu. Nee oru kiliye nokki chirichu. Baaki ethra?',

    answers: ['0', 'zero', '0 kili'],

    clues: ['Nee chirichath kandappol ellam pedichu parannu.'],

    points: 100,

    /* =============================================
           SUCCESS MEME

           PUT YOUR SUCCESS MEME IMAGE/VIDEO/AUDIO
           FILE PATH HERE.
        ============================================= */

    successImage: '/assets/memes/success.jpg',

    successVideo: '',

    successAudio: '/assets/audio/success.mp3',

    /* =============================================
           FAILURE MEME

           PUT YOUR FAILURE MEME IMAGE/VIDEO/AUDIO
           FILE PATH HERE.
        ============================================= */

    failureImage: '/assets/memes/failure.jpg',

    failureVideo: '',

    failureAudio: '/assets/audio/failure.mp3',
  },

  {
    question:
      'Njan vellathil jeevikkum. Vellam kudikkum. Vellathil urangum. Njan aaranu?',

    answers: ['meen', 'fish', 'മീൻ'],

    clues: ['Enikku kaal illa.', 'Njan swimming-il expert aanu.'],

    points: 100,

    successImage: '/assets/memes/success.jpg',

    successVideo: '',

    successAudio: '/assets/audio/success.mp3',

    failureImage: '/assets/memes/failure.jpg',

    failureVideo: '',

    failureAudio: '/assets/audio/failure.mp3',
  },

  {
    question:
      'Njan kaanilla, pakshe enne anubhavikkam. Njan pidikkan pattilla, pakshe enne thadayan pattum. Njan aaranu?',

    answers: ['kaattu', 'kattu', 'wind', 'കാറ്റ്'],

    clues: ['Marangal enne kandappol dance cheyyum.'],

    points: 150,

    successImage: '/assets/memes/success.jpg',

    successVideo: '',

    successAudio: '/assets/audio/success.mp3',

    failureImage: '/assets/memes/failure.jpg',

    failureVideo: '',

    failureAudio: '/assets/audio/failure.mp3',
  },
];

/* =====================================================
   GAME VARIABLES
===================================================== */

let currentQuestion = 0;

let attempts = 3;

let cluesUsed = 0;

let score = 0;

/* =====================================================
   HTML ELEMENTS
===================================================== */

const questionElement = document.getElementById('question');

const questionNumberElement = document.getElementById('questionNumber');

const attemptsElement = document.getElementById('attempts');

const scoreElement = document.getElementById('score');

const answerInput = document.getElementById('answerInput');

const feedbackElement = document.getElementById('feedback');

const clueText = document.getElementById('clueText');

const clueButton = document.getElementById('clueButton');

const submitButton = document.getElementById('submitButton');

/* =====================================================
   LOAD QUESTION
===================================================== */

function loadQuestion() {
  const riddle = riddles[currentQuestion];

  questionElement.textContent = riddle.question;

  questionNumberElement.textContent = `Question ${currentQuestion + 1} / ${riddles.length}`;

  attempts = 3;

  cluesUsed = 0;

  attemptsElement.textContent = attempts;

  answerInput.value = '';

  answerInput.disabled = false;

  submitButton.disabled = false;

  feedbackElement.textContent = '';

  feedbackElement.className = '';

  clueText.textContent = '';

  clueText.classList.add('d-none');

  clueButton.disabled = false;

  clueButton.textContent = '💡 Use a Clue';
}

/* =====================================================
   NORMALIZE ANSWER
===================================================== */

function normalizeAnswer(answer) {
  return answer.toLowerCase().trim().replace(/\s+/g, ' ');
}

/* =====================================================
   SUBMIT ANSWER
===================================================== */

function submitAnswer() {
  const userAnswer = normalizeAnswer(answerInput.value);

  if (!userAnswer) {
    feedbackElement.textContent = 'Answer onnu type cheyyeda. 😂';

    feedbackElement.className = 'wrong';

    return;
  }

  const riddle = riddles[currentQuestion];

  const isCorrect = riddle.answers.some(
    (answer) => normalizeAnswer(answer) === userAnswer,
  );

  /* =================================================
       CORRECT
    ================================================= */

  if (isCorrect) {
    score += riddle.points;

    scoreElement.textContent = score;

    feedbackElement.textContent = 'Correct! Enthoru buddhi! 🧠🔥';

    feedbackElement.className = 'correct';

    answerInput.disabled = true;

    submitButton.disabled = true;

    playMeme('success');

    return;
  }

  /* =================================================
       WRONG
    ================================================= */

  attempts--;

  attemptsElement.textContent = attempts;

  if (attempts > 0) {
    feedbackElement.textContent = `Wrong! Ini ${attempts} chance undu. 💀`;

    feedbackElement.className = 'wrong';

    answerInput.value = '';

    return;
  }

  /* =================================================
       THREE ATTEMPTS FAILED
    ================================================= */

  feedbackElement.textContent = 'Mone... pani paali. 💀';

  feedbackElement.className = 'wrong';

  answerInput.disabled = true;

  submitButton.disabled = true;

  playMeme('failure');
}

/* =====================================================
   USE CLUE
===================================================== */

function useClue() {
  const riddle = riddles[currentQuestion];

  if (cluesUsed >= riddle.clues.length) {
    clueButton.disabled = true;

    clueButton.textContent = 'No more clues 😭';

    return;
  }

  clueText.textContent = `💡 Clue: ${riddle.clues[cluesUsed]}`;

  clueText.classList.remove('d-none');

  cluesUsed++;

  if (cluesUsed >= riddle.clues.length) {
    clueButton.disabled = true;

    clueButton.textContent = 'Clues Finished 💀';
  } else {
    clueButton.textContent = '💡 Another Clue';
  }
}

/* =====================================================
   PLAY MEME
===================================================== */

function playMeme(type) {
  const riddle = riddles[currentQuestion];

  const image = document.getElementById('memeImage');

  const video = document.getElementById('memeVideo');

  const videoSource = document.getElementById('memeVideoSource');

  const audio = document.getElementById('memeAudio');

  const audioSource = document.getElementById('memeAudioSource');

  const title = document.getElementById('memeTitle');

  const message = document.getElementById('memeMessage');

  /* Reset media */

  image.classList.add('d-none');

  video.classList.add('d-none');

  audio.pause();

  /* =================================================
       SUCCESS
    ================================================= */

  if (type === 'success') {
    title.textContent = '🔥 SHERI MONE!';

    message.textContent = 'Buddhi undennu theliyichu. 😂';

    /* =============================================
           SUCCESS IMAGE

           PUT IMAGE PATH IN successImage ABOVE.
        ============================================= */

    if (riddle.successImage) {
      image.src = riddle.successImage;

      image.classList.remove('d-none');
    }

    /* =============================================
           SUCCESS VIDEO

           PUT VIDEO PATH IN successVideo ABOVE.
        ============================================= */

    if (riddle.successVideo) {
      videoSource.src = riddle.successVideo;

      video.load();

      video.classList.remove('d-none');

      video.play().catch(() => {});
    }

    /* =============================================
           SUCCESS AUDIO

           PUT AUDIO PATH IN successAudio ABOVE.
        ============================================= */

    if (riddle.successAudio) {
      audioSource.src = riddle.successAudio;

      audio.load();

      audio.play().catch(() => {});
    }
  } else {

  /* =================================================
       FAILURE
    ================================================= */
    title.textContent = '💀 PANI PAALI';

    message.textContent = 'Moonu chance kitti. Ennittum... 😭';

    /* =============================================
           FAILURE IMAGE

           PUT IMAGE PATH IN failureImage ABOVE.
        ============================================= */

    if (riddle.failureImage) {
      image.src = riddle.failureImage;

      image.classList.remove('d-none');
    }

    /* =============================================
           FAILURE VIDEO

           PUT VIDEO PATH IN failureVideo ABOVE.
        ============================================= */

    if (riddle.failureVideo) {
      videoSource.src = riddle.failureVideo;

      video.load();

      video.classList.remove('d-none');

      video.play().catch(() => {});
    }

    /* =============================================
           FAILURE AUDIO

           PUT AUDIO PATH IN failureAudio ABOVE.
        ============================================= */

    if (riddle.failureAudio) {
      audioSource.src = riddle.failureAudio;

      audio.load();

      audio.play().catch(() => {});
    }
  }

  /* =================================================
       SHOW MODAL
    ================================================= */

  const modal = new bootstrap.Modal(document.getElementById('memeModal'));

  modal.show();
}

/* =====================================================
   NEXT QUESTION
===================================================== */

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion >= riddles.length) {
    showGameOver();

    return;
  }

  loadQuestion();
}

/* =====================================================
   GAME OVER
===================================================== */

function showGameOver() {
  questionElement.textContent = 'Game Over! 🎉';

  questionNumberElement.textContent = 'PADAKKALAM COMPLETE';

  attemptsElement.textContent = '🏆';

  clueButton.disabled = true;

  answerInput.disabled = true;

  submitButton.disabled = true;

  feedbackElement.innerHTML = `
        <div class="correct">
            Final Score: ${score}
        </div>

        <br>

        <button
            class="btn btn-light"
            onclick="restartGame()"
        >
            🔄 Play Again
        </button>
        `;
}

/* =====================================================
   RESTART GAME
===================================================== */

function restartGame() {
  currentQuestion = 0;

  score = 0;

  scoreElement.textContent = score;

  loadQuestion();
}

/* =====================================================
   ENTER KEY SUPPORT
===================================================== */

answerInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    submitAnswer();
  }
});

/* =====================================================
   START GAME
===================================================== */

loadQuestion();
