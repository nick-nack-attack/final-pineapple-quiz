// This get a random number out of three. Used to randomize stuff.
function num() {
  return [Math.floor(Math.random() * 3)]
}

function changeBannerImage() {
  let theBannerImage = random_images_array[Math.floor(Math.random() * 5)];
  return theBannerImage;
};


// When replying after first time, load in replay text
function determineAnnoucementText() {
  if (timesPlayed > 0) {
    STORE[0].card_title = STORE[0].replay_card_title
    STORE[0].card_text = STORE[0].replay_card_text
  }
}

// Create the form and fieldset
function createFormFrame(content) {
  return `<form><fieldset>${content}</fieldset></form>`
}

// Make all the question HTML and return it
function createAQuestion() {
  let theString = [];
  for (let i = 0; i < STORE[questionNumber].answers.length; i++) {
    theString.push(`<button type="submit" form="form" class="submitButton" value="${STORE[questionNumber].answers[i]}">${STORE[questionNumber].answers[i]}</button>`)
  }
  let theButtons = theString.join('');
  let content = `
  <legend><h1>${STORE[questionNumber].card_title}</h1></legend>
  <img src="images/${changeBannerImage()}" alt="image of pineapples" class="banner_image" >
  <div class="score-div">Your current score is: <span class="current-score">${theScore}</span></div>
  <p class="p_class">${STORE[questionNumber].card_text}</p>${theButtons}`;
  return createFormFrame(content);
}

//Run this to make the HTML code for first question
function makeHTMLQuestion() {
  let annoucementText = determineAnnoucementText();
  let answer_1 = STORE[questionNumber].answer_1;
  let answer_2 = STORE[questionNumber].answer_2;
  let answer_3 = STORE[questionNumber].answer_3;
  return createAQuestion();
}

// Determine Final Score text
function determineFinalSpeech() {
  let result;
  if (questionsAnsweredCorrectly === 6) {
    result = STORE[6].perfect_score_text[num()];
  } else if (questionsAnsweredCorrectly === 1) {
    result = STORE[6].all_wrong_score_text[num()];
  } else if (questionsAnsweredCorrectly < 5) {
    result = STORE[6].some_wrong_score_text[num()];
  };
  return result;
}

// Reset all values to beginning state
function resetEverything() {
  theScore = -10;
  questionNumber = 0;
  questionsAnsweredCorrectly = 0;
}

// This is HTML to display Final Score Card
function finalScore() {
  $('form').hide();
  let finalText = determineFinalSpeech();
  timesPlayed++;
  let content = `
      <legend><h1>Final Score</h1></legend>
      <img src="images/${changeBannerImage()}" alt="image of pineapples" class="banner_image" >
      <div class="score-div">Your current score is: <span class="current-score">${theScore}</span></div>
      <p class="p_class">${finalText}</p>
      <button type="submit" class="resetButton">Restart Quiz</button>
  `;
  $('.main-area').html(createFormFrame(content));
}

// Add or minus points depending on how they answer
function updateScore(rightOrWrong) {
  console.log('updateScore() is running...');
  rightOrWrong === 0 ? theScore += 10 : theScore -= 10;
  $('.current-score').text(theScore);
};

// Run this first to load in the first question
function startTheQuiz() {
  questionNumber === 6 ? $('.main-area').append(finalScore()) :
    $('.main-area').append(makeHTMLQuestion());
};

// Run this to handle if the answer is right or wrong
function handleUserAnswer(correct, selected) {
  $('form').hide();
  let answer_card_title;
  let answer_card_text;
  let main_response_image;
  if (correct == selected) {
    answer_card_title = STORE[questionNumber].correct_answer_title;
    answer_card_text = STORE[questionNumber].correct_answer_text;
    main_response_image = winning_image_losing_image[0];
    updateScore(0);
    questionsAnsweredCorrectly++;
  } else {
    answer_card_title = STORE[questionNumber].wrong_answer_title;
    answer_card_text = STORE[questionNumber].wrong_answer_text;
    main_response_image = winning_image_losing_image[1];
    updateScore(1);
  }
  questionNumber++;
  let content = `
      <legend><h1>${answer_card_title}</h1></legend>
      <img src="images/${main_response_image}" alt="image of pineapple" class="banner_image" >
      <div class="score-div">Your current score is: <span class="current-score">${theScore}</span></div>
      <p class="p_class">${answer_card_text}</p>
      <button type="submit" class="nextQuestionButton">Next Question</button>
  `;
  $('.main-area').html(createFormFrame(content));
}

// When user selects the button to go to next question
function handleNextQuestionButton() {
  $('.announce-card').on('click', '.nextQuestionButton', function (event) {
    console.log('handleNextQuestionButton() is running...')
    event.preventDefault();
    $('form').hide();
    startTheQuiz();
  });
};

// When the user selects an possible answer to question
function handleSubmitAnswer() {
  $('.announce-card').on('click', '.submitButton', function (event) {
    console.log('handleSubmitAnswer() is running...');
    event.preventDefault();
    let selected = event.currentTarget.value;
    let correct = STORE[questionNumber].the_correct_answer_is;
    questionNumber === 0 ? handleUserAnswer(selected, selected) : handleUserAnswer(correct, selected);
  })
};

// When user selects the reset button quiz
function handleReset_Quiz() {
  $('.announce-card').on('click', '.resetButton', function (event) {
    event.preventDefault();
    $('form').hide();
    resetEverything();
    startTheQuiz();
  })
};

// This runs all the functions
function makeTheQuiz() {
  startTheQuiz();
  handleSubmitAnswer()
  handleNextQuestionButton()
  handleReset_Quiz()
}

$(makeTheQuiz);