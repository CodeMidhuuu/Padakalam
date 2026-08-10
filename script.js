/* =========================================================
   PADAKKALAM
   CONNECTED RIDDLE MODE
========================================================= */

/* =========================================================
   GAME DATA

   EACH BATTLE HAS:

   3 RIDDLES
   3 ANSWERS
   1 FINAL CONNECTION

========================================================= */

const battles = [
  {
    id: 1,

    /* =================================================
           RIDDLE 1
        ================================================== */

    riddles: [
      {
        question:
          'Njan vellathil jeevikkum. Vellam kudikkum. Vellathil thanne urangum. Njan aaranu?',

        answers: ['meen', 'fish', 'മീൻ'],

        clues: ['Enikku kaal illa.', 'Swimming aanu ente main talent.'],
      },

      /* =================================================
               RIDDLE 2
            ================================================== */

      {
        question:
          'Njan kaanilla, pakshe enne anubhavikkam. Enne pidikkan pattilla. Njan vannal marangal dance cheyyum. Njan aaranu?',

        answers: ['kaattu', 'kattu', 'wind', 'കാറ്റ്'],

        clues: [
          'Window adachillenkil njan veettil kayarum.',
          'Marangal enne kandappol aadi nadakkum.',
        ],
      },

      /* =================================================
               RIDDLE 3
            ================================================== */

      {
        question:
          'Njan raathriyil kaanum. Pakalil enne kaanilla. Enikku light undu, pakshe current bill illa. Njan aaranu?',

        answers: ['chandran', 'moon', 'ചന്ദ്രൻ'],

        clues: ['Njan aakashathil aanu.', 'Sooryan ente best friend alla.'],
      },
    ],

    /* =================================================
           FINAL CONNECTION

           THE PLAYER MUST FIGURE OUT
           WHAT CONNECTS THE THREE ANSWERS.

           Answers:

           MEEN
           KAATTU
           CHANDRAN

           Example final connection:
           "NATURE"

           CHANGE THIS TO WHATEVER CONNECTION
           YOUR THREE ANSWERS HAVE.
        ================================================== */

    finalAnswers: ['nature', 'prakruthi', 'പ്രകൃതി'],

    finalDisplayAnswer: 'Nature',

    /* =================================================
           POINTS
        ================================================== */

    pointsPerRiddle: 100,

    finalPoints: 500,

    /* =================================================
           CONNECTION REVEAL MEDIA

           PUT YOUR SETHURAMAYYAR CBI
           AUDIO / VIDEO HERE.

           IMPORTANT:
           If you don't have one, leave it empty.
        ================================================== */

    connectionAudio: '/assets/audio/connection-reveal.mp3',

    connectionVideo: '',

    /* =================================================
           SUCCESS MEDIA
        ================================================== */

    successImage: '/assets/images/success.jpg',

    successVideo: '',

    successAudio: '/assets/audio/success.mp3',

    /* =================================================
           FAILURE MEDIA
        ================================================== */

    failureImage: '/assets/images/failure.jpg',

    failureVideo: '',

    failureAudio: '/assets/audio/failure.mp3',
  },
];

/* =========================================================
   GAME STATE
========================================================= */

let currentBattle = 0;

let currentRiddle = 0;

let attempts = 3;

let cluesUsed = 0;

let score = 0;

let riddleAnswers = [];

let modal;

/* =========================================================
   DOM ELEMENTS
========================================================= */

const introScreen = document.getElementById('introScreen');

const riddleScreen = document.getElementById('riddleScreen');

const connectionScreen = document.getElementById('connectionScreen');

const finalScreen = document.getElementById('finalScreen');

const resultScreen = document.getElementById('resultScreen');

const questionElement = document.getElementById('question');

const riddleNumberElement = document.getElementById('riddleNumber');

const stageText = document.getElementById('stageText');

const attemptsElement = document.getElementById('attempts');

const progressBar = document.getElementById('progressBar');

const answerInput = document.getElementById('answerInput');

const submitButton = document.getElementById('submitButton');

const feedback = document.getElementById('feedback');

const clueButton = document.getElementById('clueButton');

const clueText = document.getElementById('clueText');

const scoreElement = document.getElementById('score');

/* =========================================================
   START BATTLE
========================================================= */

function startBattle() {
  currentBattle = 0;

  currentRiddle = 0;

  attempts = 3;

  cluesUsed = 0;

  score = 0;

  riddleAnswers = [];

  scoreElement.textContent = score;

  introScreen.classList.add('d-none');

  connectionScreen.classList.add('d-none');

  finalScreen.classList.add('d-none');

  resultScreen.classList.add('d-none');

  riddleScreen.classList.remove('d-none');

  loadRiddle();
}

/* =========================================================
   GET CURRENT BATTLE
========================================================= */

function getBattle() {
  return battles[currentBattle];
}

/* =========================================================
   GET CURRENT RIDDLE
========================================================= */

function getRiddle() {
  return getBattle().riddles[currentRiddle];
}

/* =========================================================
   LOAD RIDDLE
========================================================= */

function loadRiddle() {
  const riddle = getRiddle();

  attempts = 3;

  cluesUsed = 0;

  questionElement.textContent = riddle.question;

  riddleNumberElement.textContent = `0${currentRiddle + 1}`;

  stageText.textContent = `Riddle ${currentRiddle + 1} of 3`;

  attemptsElement.textContent = attempts;

  progressBar.style.width = `${((currentRiddle + 1) / 3) * 100}%`;

  answerInput.value = '';

  answerInput.disabled = false;

  submitButton.disabled = false;

  feedback.textContent = '';

  feedback.className = '';

  clueText.textContent = '';

  clueText.classList.add('d-none');

  clueButton.disabled = false;

  clueButton.textContent = '💡 Use Clue';

  answerInput.focus();
}

/* =========================================================
   NORMALIZE ANSWER
========================================================= */

function normalizeAnswer(answer) {
  return answer

    .toLowerCase()

    .trim()

    .replace(/\s+/g, ' ')

    .replace(/[.,!?]/g, '');
}

/* =========================================================
   CHECK ANSWER
========================================================= */

function isAnswerCorrect(userAnswer, correctAnswers) {
  const normalizedUserAnswer = normalizeAnswer(userAnswer);

  return correctAnswers.some(
    (answer) => normalizeAnswer(answer) === normalizedUserAnswer,
  );
}

/* =========================================================
   SUBMIT RIDDLE ANSWER
========================================================= */

function submitAnswer() {
  const userAnswer = answerInput.value;

  if (!userAnswer.trim()) {
    feedback.textContent = 'Answer onnu type cheyyeda. 😂';

    feedback.className = 'wrong';

    return;
  }

  const riddle = getRiddle();

  /* =================================================
       CORRECT
    ================================================== */

  if (isAnswerCorrect(userAnswer, riddle.answers)) {
    /* Save answer */

    riddleAnswers[currentRiddle] = userAnswer;

    /* Add points */

    score += getBattle().pointsPerRiddle;

    scoreElement.textContent = score;

    feedback.textContent = 'Correct! 🔥';

    feedback.className = 'correct';

    answerInput.disabled = true;

    submitButton.disabled = true;

    setTimeout(() => {
      goToNextRiddle();
    }, 700);

    return;
  }

  /* =================================================
       WRONG
    ================================================== */

  attempts--;

  attemptsElement.textContent = attempts;

  if (attempts > 0) {
    feedback.textContent = `Wrong da 😂 ${attempts} chance koodi undu.`;

    feedback.className = 'wrong';

    answerInput.value = '';

    answerInput.focus();

    return;
  }

  /* =================================================
       FAILED RIDDLE
    ================================================== */

  feedback.textContent = 'Mone... pani paali. 💀';

  feedback.className = 'wrong';

  answerInput.disabled = true;

  submitButton.disabled = true;

  /* Still save the correct answer */

  riddleAnswers[currentRiddle] = riddle.answers[0];

  playMeme('failure');
}

/* =========================================================
   NEXT RIDDLE
========================================================= */

function goToNextRiddle() {
  currentRiddle++;

  /* =================================================
       THREE RIDDLES COMPLETE
    ================================================== */

  if (currentRiddle >= 3) {
    showConnectionScreen();

    return;
  }

  loadRiddle();
}

/* =========================================================
   USE CLUE
========================================================= */

function useClue() {
  const riddle = getRiddle();

  if (cluesUsed >= riddle.clues.length) {
    clueButton.disabled = true;

    return;
  }

  clueText.textContent = `💡 ${riddle.clues[cluesUsed]}`;

  clueText.classList.remove('d-none');

  cluesUsed++;

  if (cluesUsed >= riddle.clues.length) {
    clueButton.textContent = 'No More Clues 💀';

    clueButton.disabled = true;
  } else {
    clueButton.textContent = '💡 Another Clue';
  }
}

/* =========================================================
   SHOW CONNECTION SCREEN
========================================================= */

function showConnectionScreen() {
  riddleScreen.classList.add('d-none');

  connectionScreen.classList.remove('d-none');

  document.getElementById('answerOne').textContent = riddleAnswers[0];

  document.getElementById('answerTwo').textContent = riddleAnswers[1];

  document.getElementById('answerThree').textContent = riddleAnswers[2];

  /* =================================================
       SET CONNECTION AUDIO

       YOUR SETHURAMAYYAR CBI AUDIO GOES HERE.
    ================================================== */

  const battle = getBattle();

  const connectionAudio = document.getElementById('connectionAudio');

  if (battle.connectionAudio) {
    connectionAudio.src = battle.connectionAudio;

    connectionAudio.load();
  }

  /* =================================================
       SET CONNECTION VIDEO
    ================================================== */

  const connectionVideo = document.getElementById('connectionVideo');

  if (battle.connectionVideo) {
    connectionVideo.src = battle.connectionVideo;

    connectionVideo.classList.remove('d-none');
  }
}

/* =========================================================
   START FINAL CHALLENGE
========================================================= */

function startFinalChallenge() {
  connectionScreen.classList.add('d-none');

  finalScreen.classList.remove('d-none');

  document.getElementById('finalAnswerOne').textContent = riddleAnswers[0];

  document.getElementById('finalAnswerTwo').textContent = riddleAnswers[1];

  document.getElementById('finalAnswerThree').textContent = riddleAnswers[2];

  document.getElementById('finalInput').value = '';

  document.getElementById('finalFeedback').textContent = '';

  document.getElementById('finalInput').focus();
}

/* =========================================================
   SUBMIT FINAL ANSWER
========================================================= */

function submitFinalAnswer() {
  const input = document.getElementById('finalInput');

  const feedbackElement = document.getElementById('finalFeedback');

  const userAnswer = normalizeAnswer(input.value);

  if (!userAnswer) {
    feedbackElement.textContent = 'Final answer para mone. 😂';

    feedbackElement.className = 'wrong';

    return;
  }

  const battle = getBattle();

  const correct = isAnswerCorrect(userAnswer, battle.finalAnswers);

  /* =================================================
       CORRECT FINAL ANSWER
    ================================================== */

  if (correct) {
    score += battle.finalPoints;

    scoreElement.textContent = score;

    feedbackElement.textContent = 'DAAAAA! Connection kandupidichu! 🔥🧠';

    feedbackElement.className = 'correct';

    setTimeout(() => {
      playMeme('success');
    }, 500);

    return;
  }

  /* =================================================
       WRONG FINAL ANSWER
    ================================================== */

  feedbackElement.textContent = 'Connection kandupidichilla. 💀';

  feedbackElement.className = 'wrong';

  input.value = '';
}

/* =========================================================
   PLAY MEME
========================================================= */

function playMeme(type) {
  const battle = getBattle();

  const modalElement = document.getElementById('memeModal');

  const image = document.getElementById('memeImage');

  const video = document.getElementById('memeVideo');

  const videoSource = document.getElementById('memeVideoSource');

  const audio = document.getElementById('memeAudio');

  const audioSource = document.getElementById('memeAudioSource');

  const title = document.getElementById('memeTitle');

  const message = document.getElementById('memeMessage');

  /* Reset everything */

  image.classList.add('d-none');

  video.classList.add('d-none');

  audio.pause();

  /* =================================================
       SUCCESS MEME
    ================================================== */

  if (type === 'success') {
    title.textContent = '🔥 SHERI MONE!';

    message.textContent =
      'Connection decode cheythu. Buddhi undennu prove cheythu. 😂';

    /* =============================================
           SUCCESS IMAGE

           PUT IMAGE HERE.
        ============================================= */

    if (battle.successImage) {
      image.src = battle.successImage;

      image.classList.remove('d-none');
    }

    /* =============================================
           SUCCESS VIDEO

           PUT VIDEO HERE.
        ============================================= */

    if (battle.successVideo) {
      videoSource.src = battle.successVideo;

      video.load();

      video.classList.remove('d-none');

      video.play().catch(() => {});
    }

    /* =============================================
           SUCCESS AUDIO

           PUT AUDIO HERE.
        ============================================= */

    if (battle.successAudio) {
      audioSource.src = battle.successAudio;

      audio.load();

      audio.play().catch(() => {});
    }
  } else {

  /* =================================================
       FAILURE MEME
    ================================================== */
    title.textContent = '💀 PANI PAALI';

    message.textContent =
      'Moonu riddle solve cheythittum connection kandupidikkan pattiyilla. 😭';

    /* =============================================
           FAILURE IMAGE

           PUT IMAGE HERE.
        ============================================= */

    if (battle.failureImage) {
      image.src = battle.failureImage;

      image.classList.remove('d-none');
    }

    /* =============================================
           FAILURE VIDEO

           PUT VIDEO HERE.
        ============================================= */

    if (battle.failureVideo) {
      videoSource.src = battle.failureVideo;

      video.load();

      video.classList.remove('d-none');

      video.play().catch(() => {});
    }

    /* =============================================
           FAILURE AUDIO

           PUT AUDIO HERE.
        ============================================= */

    if (battle.failureAudio) {
      audioSource.src = battle.failureAudio;

      audio.load();

      audio.play().catch(() => {});
    }
  }

  /* =================================================
       SHOW MODAL
    ================================================== */

  modal = new bootstrap.Modal(modalElement);

  modal.show();
}

/* =========================================================
   CONTINUE AFTER MEME
========================================================= */

function continueAfterMeme() {
  if (currentRiddle >= 3) {
    showResult();
  }
}

/* =========================================================
   SHOW RESULT
========================================================= */

function showResult() {
  introScreen.classList.add('d-none');

  riddleScreen.classList.add('d-none');

  connectionScreen.classList.add('d-none');

  finalScreen.classList.add('d-none');

  resultScreen.classList.remove('d-none');

  document.getElementById('finalScore').textContent = score;

  document.getElementById('resultHeading').textContent =
    'PADAKKALAM COMPLETE! ⚔️';

  document.getElementById('resultMessage').textContent =
    'Nee battlefield survive cheythu. Respect. 🫡';
}

/* =========================================================
   RESTART
========================================================= */

function restartGame() {
  currentBattle = 0;

  currentRiddle = 0;

  attempts = 3;

  cluesUsed = 0;

  score = 0;

  riddleAnswers = [];

  scoreElement.textContent = score;

  resultScreen.classList.add('d-none');

  introScreen.classList.remove('d-none');
}

/* =========================================================
   ENTER KEY
========================================================= */

answerInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    submitAnswer();
  }
});

document
  .getElementById('finalInput')
  .addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      submitFinalAnswer();
    }
  });
