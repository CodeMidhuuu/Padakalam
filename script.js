/* =========================================================
   PADAKKALAM - SCRIPT.JS
========================================================= */



const battleConfig = {
  id: 1,

  /* Active connection answers (updated dynamically per match) */
  finalAnswers: [],
  finalDisplayAnswer: '',

  /* POINTS */
  pointsPerRiddle: 100,
  finalPoints: 500,

  /* MEDIA PATHS */
  connectionVideo: '',
  successImage: 'assets/success.jpg',
  successVideo: '',
  wrongAudio1: 'assets/wrong1.mp3',
  wrongAudio2: 'assets/wrong2.mp3',
  successAudio: 'assets/ElevenLabs_congrats.mp3',
  failureImage: 'assets/failure.jpg',
  failureVideo: '',
  failureAudio: 'assets/failure.mp3',
  finalFailureAudio: 'assets/final_failure.mp3',
};

/* =========================================================
   GAME STATE
========================================================= */

let activeRiddles = [];
let currentRiddle = 0;
let attempts = 3;
let cluesUsed = 0;
let score = 0;
let riddleAnswers = [];
let modal;
let isGameOver = false;

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
const optionsContainer = document.getElementById('optionsContainer');
const feedback = document.getElementById('feedback');
const clueButton = document.getElementById('clueButton');
const clueText = document.getElementById('clueText');
const scoreElement = document.getElementById('score');

/* =========================================================
   INTRO AUDIO MANAGEMENT & SPLASH OVERLAY
========================================================= */

function playIntroAudio() {
  const introAudio = document.getElementById('introAudio');
  if (!introAudio) return;

  introAudio.currentTime = 0;
  introAudio.play().catch((err) => {
    console.warn('Audio playback waiting for splash interaction:', err);
  });
}

function stopIntroAudio() {
  const introAudio = document.getElementById('introAudio');
  if (introAudio) {
    introAudio.pause();
    introAudio.currentTime = 0;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splashOverlay');

  if (splash) {
    splash.addEventListener('click', () => {
      playIntroAudio();
      splash.style.display = 'none';
    });
  }
});

/* =========================================================
   START BATTLE (DYNAMIC GROUP SELECTION)
========================================================= */

function startBattle() {
  stopIntroAudio();

  // Safety check to ensure riddles pool is loaded
  if (typeof riddlesGroupedPool === 'undefined' || !riddlesGroupedPool.length) {
    console.error('riddlesGroupedPool is missing or empty! Check index.html script tags.');
    return;
  }

  // 1. Pick a random theme group from riddlesGroupedPool
  const selectedGroup = riddlesGroupedPool[Math.floor(Math.random() * riddlesGroupedPool.length)];

  // 2. Set the connection answers dynamically for this round
  battleConfig.finalAnswers = selectedGroup.finalAnswers || selectedGroup.connectionAnswers || [];
  battleConfig.finalDisplayAnswer = selectedGroup.finalDisplayAnswer || selectedGroup.groupName || 'Secret';

  // 3. Shuffle and pick 3 riddles from the chosen group
  const shuffled = [...selectedGroup.riddles].sort(() => 0.5 - Math.random());
  activeRiddles = shuffled.slice(0, 3);

  currentRiddle = 0;
  attempts = 3;
  cluesUsed = 0;
  score = 0;
  riddleAnswers = [];
  isGameOver = false;

  const connectionAudio = document.getElementById('connectionAudio');
  if (connectionAudio) {
    connectionAudio.pause();
    connectionAudio.currentTime = 0;
  }

  if (scoreElement) scoreElement.textContent = score;

  introScreen.classList.add('d-none');
  connectionScreen.classList.add('d-none');
  finalScreen.classList.add('d-none');
  resultScreen.classList.add('d-none');
  riddleScreen.classList.remove('d-none');

  loadRiddle();
}

/* =========================================================
   LOAD RIDDLE
========================================================= */

function loadRiddle() {
  const riddle = activeRiddles[currentRiddle];

  attempts = 3;
  cluesUsed = 0;

  questionElement.innerHTML = `<span style="font-size: 2.2rem; letter-spacing: 2px;">${riddle.question}</span>`;

  riddleNumberElement.textContent = `0${currentRiddle + 1}`;
  stageText.textContent = `Riddle ${currentRiddle + 1} of 3`;
  attemptsElement.textContent = attempts;
  progressBar.style.width = `${((currentRiddle + 1) / 3) * 100}%`;

  feedback.textContent = '';
  feedback.className = '';

  clueText.textContent = '';
  clueText.classList.add('d-none');
  clueButton.disabled = false;
  clueButton.textContent = '💡 Use Clue';

  optionsContainer.innerHTML = '';

  riddle.options.forEach((option) => {
    const btn = document.createElement('button');
    btn.className = 'btn option-btn w-100 my-2 fs-5';
    btn.textContent = option;
    btn.onclick = () => selectOption(option, btn);
    optionsContainer.appendChild(btn);
  });
}

/* =========================================================
   OPTION SELECTION LOGIC
========================================================= */

function selectOption(selectedOption, selectedBtn) {
  const riddle = activeRiddles[currentRiddle];
  const optionButtons = optionsContainer.querySelectorAll('.option-btn');

  /* CORRECT OPTION */
  if (selectedOption === riddle.correctAnswer) {
    riddleAnswers[currentRiddle] = riddle.cleanAnswer;
    score += battleConfig.pointsPerRiddle;
    if (scoreElement) scoreElement.textContent = score;

    selectedBtn.classList.add('correct-choice');
    optionButtons.forEach((b) => (b.disabled = true));

    feedback.textContent = 'Correct! 🔥';
    feedback.className = 'correct';

    setTimeout(() => {
      goToNextRiddle();
    }, 600);

    return;
  }

  /* WRONG OPTION */
  attempts--;
  attemptsElement.textContent = attempts;

  selectedBtn.classList.add('wrong-choice');
  selectedBtn.disabled = true;

  if (attempts === 2) {
    playSFX(battleConfig.wrongAudio1);
    feedback.textContent = `Wrong da 😂 ${attempts} chance koodi undu.`;
    feedback.className = 'wrong';
    return;
  }

  if (attempts === 1) {
    playSFX(battleConfig.wrongAudio2);
    feedback.textContent = `Wrong da 😂 Last 1 chance koodi!`;
    feedback.className = 'wrong';
    return;
  }

  /* FAILED RIDDLE (0 ATTEMPTS LEFT) */
  optionButtons.forEach((b) => (b.disabled = true));
  feedback.textContent = 'Mone... pani paali. 💀';
  feedback.className = 'wrong';

  isGameOver = true;
  playMeme('failure');
}

/* =========================================================
   NEXT RIDDLE & CLUES
========================================================= */

function goToNextRiddle() {
  currentRiddle++;

  if (currentRiddle >= 3) {
    showConnectionScreen();
    return;
  }

  loadRiddle();
}

function useClue() {
  const riddle = activeRiddles[currentRiddle];

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

  document.getElementById('answerOne').textContent = riddleAnswers[0] || '?';
  document.getElementById('answerTwo').textContent = riddleAnswers[1] || '?';
  document.getElementById('answerThree').textContent = riddleAnswers[2] || '?';

  const connectionAudio = document.getElementById('connectionAudio');

  if (connectionAudio) {
    connectionAudio.currentTime = 0;
    connectionAudio.play().catch((err) => {
      console.warn('Autoplay blocked by browser:', err);
    });
  }

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

  document.getElementById('finalAnswerOne').textContent = riddleAnswers[0] || '?';
  document.getElementById('finalAnswerTwo').textContent = riddleAnswers[1] || '?';
  document.getElementById('finalAnswerThree').textContent = riddleAnswers[2] || '?';

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

function normalizeAnswer(answer) {
  return answer
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[.,!?]/g, '');
}

function isAnswerCorrect(userAnswer, correctAnswers) {
  const normalizedUserAnswer = normalizeAnswer(userAnswer);
  return correctAnswers.some(
    (answer) => normalizeAnswer(answer) === normalizedUserAnswer,
  );
}

function submitFinalAnswer() {
  const input = document.getElementById('finalInput');
  const feedbackElement = document.getElementById('finalFeedback');
  const userAnswer = normalizeAnswer(input.value);

  if (!userAnswer) {
    feedbackElement.textContent = 'Final answer para mone. 😂';
    feedbackElement.className = 'wrong';
    return;
  }

  const correct = isAnswerCorrect(userAnswer, battleConfig.finalAnswers);

  if (correct) {
    score += battleConfig.finalPoints;
    if (scoreElement) scoreElement.textContent = score;

    feedbackElement.textContent = '';
    isGameOver = false;
    playMeme('success');
    return;
  }

  /* WRONG FINAL ANSWER LOGIC */
  feedbackElement.textContent =
    'Connection kandupidichilla da. Onnukoodi nokku! 💀';
  feedbackElement.className = 'wrong';
  input.value = '';

  playSFX(battleConfig.finalFailureAudio);
}

/* =========================================================
   SFX & MEME MODALS
========================================================= */

function playSFX(audioPath) {
  const sfxAudio = document.getElementById('sfxAudio');
  const sfxSource = document.getElementById('sfxAudioSource');

  if (!sfxAudio || !audioPath) return;

  sfxAudio.pause();
  sfxAudio.currentTime = 0;

  if (sfxSource) {
    sfxSource.src = audioPath;
  } else {
    sfxAudio.src = audioPath;
  }

  sfxAudio.load();
  sfxAudio.play().catch((err) => {
    console.warn('SFX playback prevented or interrupted:', err);
  });
}

function playMeme(type) {
  const modalElement = document.getElementById('memeModal');
  const audio = document.getElementById('memeAudio');
  const audioSource = document.getElementById('memeAudioSource');
  const memeImg = document.getElementById('memeImage');
  const title = document.getElementById('memeTitle');
  const sfxAudio = document.getElementById('sfxAudio');

  if (sfxAudio) {
    sfxAudio.pause();
    sfxAudio.currentTime = 0;
  }

  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  if (type === 'success') {
    title.textContent = '🎉 CONGRATULATIONS! 🎉';

    if (battleConfig.successImage && memeImg) {
      memeImg.src = battleConfig.successImage;
      memeImg.classList.remove('d-none');
    }

    if (battleConfig.successAudio && audioSource && audio) {
      audioSource.src = battleConfig.successAudio;
      audio.load();
      audio.play().catch((err) => {
        console.warn('Audio playback prevented:', err);
      });
    }
  } else {
    title.textContent = '💀 PANI PAALI!';

    if (battleConfig.failureImage && memeImg) {
      memeImg.src = battleConfig.failureImage;
      memeImg.classList.remove('d-none');
    }

    if (battleConfig.failureAudio && audioSource && audio) {
      audioSource.src = battleConfig.failureAudio;
      audio.load();
      audio.play().catch((err) => {});
    }
  }

  if (typeof bootstrap !== 'undefined' && bootstrap.Modal) {
    modal =
      bootstrap.Modal.getInstance(modalElement) ||
      new bootstrap.Modal(modalElement);
    modal.show();
  } else {
    modalElement.style.display = 'block';
    modalElement.classList.add('show');
    document.body.classList.add('modal-open');
  }
}

function continueAfterMeme() {
  const modalElement = document.getElementById('memeModal');
  const audio = document.getElementById('memeAudio');

  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  if (modal) {
    modal.hide();
  } else {
    modalElement.style.display = 'none';
    modalElement.classList.remove('show');
    document.body.classList.remove('modal-open');
  }

  showResult(!isGameOver);
}

/* =========================================================
   RESULT & RESTART
========================================================= */

function showResult(isWin = true) {
  introScreen.classList.add('d-none');
  riddleScreen.classList.add('d-none');
  connectionScreen.classList.add('d-none');
  finalScreen.classList.add('d-none');

  resultScreen.classList.remove('d-none');

  document.getElementById('finalScore').textContent = score;

  if (isWin) {
    document.getElementById('resultEmoji').textContent = '🏆';
    document.getElementById('resultHeading').textContent =
      'PADAKKALAM COMPLETE! ⚔️';
    document.getElementById('resultMessage').textContent =
      'Nee battlefield survive cheythu. Respect. 🫡';
  } else {
    document.getElementById('resultEmoji').textContent = '💀';
    document.getElementById('resultHeading').textContent =
      'PANI PAALI MONE! 💀';
    document.getElementById('resultMessage').textContent =
      'Nee battle-il thottu. Onnukoodi try cheyyu!';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function restartGame() {
  score = 0;
  if (scoreElement) scoreElement.textContent = score;

  resultScreen.classList.add('d-none');
  introScreen.classList.remove('d-none');
  playIntroAudio();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* =========================================================
   KEYBOARD LISTENER
========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const finalInput = document.getElementById('finalInput');
  if (finalInput) {
    finalInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        submitFinalAnswer();
      }
    });
  }
});