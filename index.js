console.log('Top of the JS');

//question database
const STORE = [{
    card_title: 'Ready to Pineapple?',
    card_text: 'You currently have negative ten points. Did you think I was going to start you off with zero points? What sort of pinapple do you think I am?',
    answer_1: 'You\'re a terrible pineapple (said on opposite day)!',
    answer_2: 'I hate you (when \'I hate you\' means \' I love your infinite wisdom — it\' truly magisterial\')!',
    answer_3: 'Start the quiz',
    correct_answer_title: 'Great job!',
    correct_answer_text: 'All three of those were correct. I will bump you up to zero points. Now you have nothing. Which was more than you had before. You\'re welcome.',
    replay_card_title: 'Wow, you\'re back?',
    replay_card_text: 'I didn\'t think you\'d actually play again. Well ... I\'m still starting you off with negative ten points. You don\'t get special treatment just because you done pineappled before.'
  },
  {
    card_title: 'Question 1',
    card_text: 'Pineapples can...',
    answer_1: 'do advanced calculus',
    answer_2: 'regenerate',
    answer_3: 'maintain constant eye contact',
    the_correct_answer_is: 'regenerate',
    correct_answer_title: 'Correct!',
    correct_answer_text: 'You can plant pineapple leaves to grow a new plant.',
    wrong_answer_title: 'Absolutely not!',
    wrong_answer_text: 'Your choice was incredibly stupid, my apologies.',
  },
  {
    card_title: 'Question 2',
    card_text: 'Pineapples contain what enzyme which can break down proteins to tenderize meat?',
    answer_1: 'Helicopter! ... I mean... helicase ... yes ... helicase',
    answer_2: 'bromelain',
    answer_3: 'DNA polymerase',
    the_correct_answer_is: 'bromelain',
    correct_answer_title: 'Helicopter!',
    correct_answer_text: '... uh, bromelain, is correct. You\'re right ... facinating ... the answer to a question can be \'not\' helicopter ...',
    correct_answer_button_1: 'Next question',
    wrong_answer_title: 'What? No!',
    wrong_answer_text: 'Correct answer is bromelain. I don\'t even know what that is but, wow, why didn\'t you?',
    correct_answer_button_1: 'I\'ll try better next time!'
  },
  {
    card_title: 'Question 3',
    card_text: 'Pineapples take how long to become ready to harvest?',
    answer_1: 'meh, like, a few days or so',
    answer_2: '18-20 months',
    answer_3: '24 months',
    the_correct_answer_is: '18-20 months',
    correct_answer_title: 'Yup!',
    correct_answer_text: '18 to 20 months. Hurry up and be delicious, my precious perfect pineapple.',
    correct_answer_button_1: 'Next question',
    wrong_answer_title: 'What? No!',
    wrong_answer_text: 'Correct answer is 18 to 20 months. It\'s illegal to not know that - you\'re going to pineapple jail ... maybe.',
    correct_answer_button_1: 'I\'ll try better next time!'
  },
  {
    card_title: 'Question 4',
    card_text: 'One pineapple plant can produce how many pineapples at a time?',
    answer_1: 'That\'s a dangerous question to ask ...',
    answer_2: 'one',
    answer_3: 'depends on its nationality and procivity for sassiness',
    the_correct_answer_is: 'one',
    correct_answer_title: 'Absolutely!',
    correct_answer_text: 'It was a dangerous question... but the answer is one. Well played.',
    correct_answer_button_1: 'Next question',
    wrong_answer_title: 'What? No!',
    wrong_answer_text: 'Correct answer is one. That\'s one more than zero and one less than two.',
    correct_answer_button_1: 'I\'ll try better next time!'
  },
  {
    card_title: 'Question 5',
    card_text: 'Pineapples ripen faster when ...',
    answer_1: 'it explodes',
    answer_2: 'upside down',
    answer_3: 'rightside up',
    the_correct_answer_is: 'upside down',
    correct_answer_title: 'You got it!',
    correct_answer_text: 'Research is still pending on the explode-to-ripen method ... but until that research is completed ... they currently ripen faster upside down.',
    correct_answer_button_1: 'Next question',
    wrong_answer_title: 'Just ... no',
    wrong_answer_text: 'Correct answer is upside down. Rosie O\'Donnell cured her depression with inversion therapy.',
    correct_answer_button_1: 'I\'ll try better next time!'
  },
  {
    card_title: 'Final Score',
    perfect_score_text: 'You are well-versed in the pineapple. I am awed at your pineapple ways.',
    some_wrong_score_text: 'You didn\'t get a perfect score. Only only acceptable score in the land of pineapple',
    all_wrong_score_text: 'You got zero right. Which I guess is better than your starting score but ... well, you actually proved to me that this score is exactly equal to your worth and number of times you\'ve been incredibly successful in your life.',
    apologize_text: 'Look... I\'m sorry. I don\'t mean ... to be mean when you got a question wrong. It\'s just I know you\'re true potential'
  }
];

// User score starts at negative ten
let theScore = -10;
let questionNumber = 0;
let timesPlayed = 0
let questionsAnsweredCorrectly = 0;

function makeQuestionHTML() {
  return $(`
  <form>
  <fieldset>
    <legend><h1>${STORE[questionNumber].card_title}</h1></legend>
    <div>Your current score is: <span class="current-score">${theScore}</span></div>
    <p>${STORE[questionNumber].card_text}</p>
    <button type="submit" form="form" class="button" value="${STORE[questionNumber].answer_1}">${STORE[questionNumber].answer_1}</button>
    <button type="submit" form="form" class="button" value="${STORE[questionNumber].answer_2}">${STORE[questionNumber].answer_2}</button>
    <button type="submit" form="form" class="button" value="${STORE[questionNumber].answer_3}">${STORE[questionNumber].answer_3}</button>
  </fieldset>
</form>
  `)
}

// Run this to make the HTML code
function makeTheFirstQuestionHTML() {
  let questionHTML = $(`
  <form>
  <fieldset>
    <legend><h1>${STORE[questionNumber].card_title}</h1></legend>
    <div>Your current score is: <span class="current-score">${theScore}</span></div>
    <p>${STORE[questionNumber].card_text}</p>
    <button type="submit" form="form" value="${STORE[questionNumber].answer_1}">${STORE[questionNumber].answer_1}</button>
    <button type="submit" form="form" value="${STORE[questionNumber].answer_1}">${STORE[questionNumber].answer_2}</button>
    <button type="submit" form="form" value="${STORE[questionNumber].answer_1}">${STORE[questionNumber].answer_3}</button>
  </fieldset>
</form>
  `)
  return questionHTML
}

function updateScore(rightOrWrong) {
  if (rightOrWrong === 'right') {
    console.log('You answered correctly!');
  theScore += 10;
  $('.current-score').text(theScore);
} else {
  console.log('You answered correctly!');
  theScore -= 10;
  $('.current-score').text(theScore);
}
}

function updateQuestionNumber() {
  questionNumber++;
}

// Checks to see if this is the first time the user has played
// and, if so, runs a function to create the HTML
function generateQuestion() {
  if (timesPlayed === 0 && questionNumber !== 0) {
    console.log('generateQuestion ran');
    return makeTheFirstQuestionHTML()
  } else {
    console.log('generate a non-zero question');
    return makeQuestionHTML()
  }
}

// Run this first to load in the first question
function initializeQuiz() {
  if (questionNumber === 0) {
    console.log('initializeQuiz ran');
    $('.main-area').append(generateQuestion());
  } else if (questionNumber !== 0) {
    $('.main-area').append(generateQuestion());
  }
}

// Do this when the user gets the right answer
function correctAnswer() {
  console.log('correctAnswer ran');
  $('form').hide();
  $('.main-area').html(`<form>
    <fieldset>
      <legend><h1>${STORE[questionNumber].correct_answer_title}</h1></legend>
      <div>Your current score is: <span class="current-score">${theScore}</span></div>
      <p>${STORE[questionNumber].correct_answer_text}</p>
      <button type="button" class="nextButton">Next Question</button>
    </fieldset>
  </form>`)
  updateScore('correct');
}

function wrongAnswer() {
  $('form').hide();
  $('.main-area').html(`
  <form>
    <fieldset>
      <legend><h1>${STORE[questionNumber].wrong_answer_title}</h1></legend>
      <div>Your current score is: <span class="current-score">${theScore}</span></div>
      <p>${STORE[questionNumber].wrong_answer_text}</p>
      <button type="button" class="nextButton">Next Question</button>
    </fieldset>
  </form>
      `)
  updateScore('incorrect');
};

// When a user selects one of the answer buttons
function submitAnswer() {
  $('.announce-card').on('click', 'button', function (event) {
    event.preventDefault();
    let selected = event.currentTarget.value;
    let correct = STORE[questionNumber].the_correct_answer_is;
    console.log(`
      submitAnswer - The value of the selected button is: ${selected}
      `);
    if (questionNumber === 0) {
      console.log(`The question number is :${questionNumber} and should be 0. CORRECT ANSWER will run.`);
      correctAnswer();
    } else if (questionNumber !== 0) {
      if (selected === correct) {
        console.log(`The question number is :${questionNumber}. selected equals correct!`);
        correctAnswer();
      } else {
        console.log(`The question number is :${questionNumber}. selected equals wrong!`);
        wrongAnswer();
      }
    }
  });
}

function nextQuestion() {
  $('.annouce-card').on('click', '.nextButton', function (event) {
    $('form').hide();
    console.log('nextQuestion ran!');
    updateQuestionNumber();
    initializeQuiz()
  })
};


// This runs all the functions
function makeTheQuiz() {
  initializeQuiz();
  generateQuestion()
  submitAnswer()
}




$(makeTheQuiz);