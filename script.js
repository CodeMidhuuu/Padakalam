/* =========================================================
   PADAKKALAM
   CONNECTED RIDDLE MODE
========================================================= */

/* =========================================================
   GAME DATA
========================================================= */

const battles = [
  {
    id: 1,

    /* RIDDLE 1 */
    riddles: [
      {
        question:
          'Njan vellathil jeevikkum. Vellam kudikkum. Vellathil thanne urangum. Njan aaranu?',
        answers: ['meen', 'fish', 'മീൻ'],
        clues: ['Enikku kaal illa.', 'Swimming aanu ente main talent.'],
      },

      /* RIDDLE 2 */
      {
        question:
          'Njan kaanilla, pakshe enne anubhavikkam. Enne pidikkan pattilla. Njan vannal marangal dance cheyyum. Njan aaranu?',
        answers: ['kaattu', 'kattu', 'wind', 'കാറ്റ്'],
        clues: [
          'Window adachillenkil njan veettil kayarum.',
          'Marangal enne kandappol aadi nadakkum.',
        ],
      },

      /* RIDDLE 3 */
      {
        question:
          'Njan raathriyil kaanum. Pakalil enne kaanilla. Enikku light undu, pakshe current bill illa. Njan aaranu?',
        answers: ['chandran', 'moon', 'ചന്ദ്രൻ'],
        clues: ['Njan aakashathil aanu.', 'Sooryan ente best friend alla.'],
      },
    ],

    /* FINAL CONNECTION */
    finalAnswers: ['nature', 'prakruthi', 'പ്രകൃതി'],
    finalDisplayAnswer: 'Nature',

    /* POINTS */
    pointsPerRiddle: 100,
    finalPoints: 500,

    /* MEDIA PATHS */
    connectionVideo: '',

    /* SUCCESS MEDIA */
    successImage: '/assets/images/success.jpg',
    successVideo: '',
    successAudio: '/assets/audio/success.mp3',

    /* FAILURE MEDIA */
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

  const connectionAudio = document.getElementById('connectionAudio');
  if (connectionAudio) {
    connectionAudio.pause();
    connectionAudio.currentTime = 0;
  }

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

  /* CORRECT */
  if (isAnswerCorrect(userAnswer, riddle.answers)) {
    riddleAnswers[currentRiddle] = userAnswer;
    score += getBattle().pointsPerRiddle;
    scoreElement.textContent = score;

    feedback.textContent = 'Correct! 🔥';
    feedback.className = 'correct';

    answerInput.disabled = true;
    submitButton.disabled = true;

    setTimeout(() => {
      goToNextRiddle();
    }, 400);

    return;
  }

  /* WRONG */
  attempts--;
  attemptsElement.textContent = attempts;

  if (attempts > 0) {
    feedback.textContent = `Wrong da 😂 ${attempts} chance koodi undu.`;
    feedback.className = 'wrong';
    answerInput.value = '';
    answerInput.focus();
    return;
  }

  /* FAILED RIDDLE */
  feedback.textContent = 'Mone... pani paali. 💀';
  feedback.className = 'wrong';

  answerInput.disabled = true;
  submitButton.disabled = true;

  riddleAnswers[currentRiddle] = riddle.answers[0];

  playMeme('failure');
}

/* =========================================================
   NEXT RIDDLE
========================================================= */

function goToNextRiddle() {
  currentRiddle++;

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

  const connectionAudio = document.getElementById('connectionAudio');

  if (connectionAudio) {
    connectionAudio.currentTime = 0;
    connectionAudio.play().catch((err) => {
      console.warn('Autoplay blocked by browser:', err);
    });
  }

  const battle = getBattle();
  const connectionVideo = document.getElementById('connectionVideo');
  if (battle.connectionVideo) {
    connectionVideo.src = battle.connectionVideo;
    connectionVideo.classList.remove('d-none');
    connectionVideo.play().catch(() => {});
  }

  /* AUTO-SCROLL DOWNWARD TO BOTTOM OF CONNECTION PAGE */
  setTimeout(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }, 200);
}

/* =========================================================
   START FINAL CHALLENGE
========================================================= */

function startFinalChallenge() {
  connectionScreen.classList.add('d-none');
  finalScreen.classList.remove('d-none');

  const connectionAudio = document.getElementById('connectionAudio');
  if (connectionAudio) {
    connectionAudio.pause();
    connectionAudio.currentTime = 0;
  }

  document.getElementById('finalAnswerOne').textContent = riddleAnswers[0];
  document.getElementById('finalAnswerTwo').textContent = riddleAnswers[1];
  document.getElementById('finalAnswerThree').textContent = riddleAnswers[2];

  const finalInput = document.getElementById('finalInput');
  finalInput.value = '';
  document.getElementById('finalFeedback').textContent = '';

  setTimeout(() => {
    finalInput.focus();
    finalInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 150);
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

  /* CORRECT FINAL ANSWER */
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

  /* WRONG FINAL ANSWER */
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

  image.classList.add('d-none');
  video.classList.add('d-none');
  audio.pause();

  if (type === 'success') {
    title.textContent = '🔥 AAHAA, ENTHORU PERFORMANCE!';
    message.textContent =
      'Ahaa! Sariyaya sthalathu thanne tight aayi kayatti... connection decode cheythu! 🧠💥 Brain maathram alla, adiyilulla B-complex vare onnu trigger aayi. Kandappol thanne chirichukondu chorinjirangiya aa timing undallo, pure mass! Adutha roundilum ithupole fasaakkalle ketto! 😉🚀';

    if (battle.successImage) {
      image.src = battle.successImage;
      image.classList.remove('d-none');
    }

    if (battle.successVideo) {
      videoSource.src = battle.successVideo;
      video.load();
      video.classList.remove('d-none');
      video.play().catch(() => {});
    }

    if (battle.successAudio) {
      audioSource.src = battle.successAudio;
      audio.load();
      audio.play().catch(() => {});
    }
  } else {
    title.textContent = '💀 PANI PAALI';
    message.textContent =
      'Moonu riddle solve cheythittum connection kandupidikkan pattiyilla. 😭';

    if (battle.failureImage) {
      image.src = battle.failureImage;
      image.classList.remove('d-none');
    }

    if (battle.failureVideo) {
      videoSource.src = battle.failureVideo;
      video.load();
      video.classList.remove('d-none');
      video.play().catch(() => {});
    }

    if (battle.failureAudio) {
      audioSource.src = battle.failureAudio;
      audio.load();
      audio.play().catch(() => {});
    }
  }

  modal = new Bootstrap.Modal(modalElement);
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

  window.scrollTo({ top: 0, behavior: 'smooth' });
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

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* =========================================================
   KEYBOARD EVENT LISTENERS
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
