// The STORE for the app
const STORE = [{
    card_title: 'Ready to Pineapple?',
    card_text: 'You currently have negative ten points. Did you think I was going to start you off with zero points? What sort of pinapple do you think I am?',
    answers: [
      'You\'re a terrible pineapple (said on opposite day)!',
      'I hate you (when \'I hate you\' means \' I love your infinite wisdom. It\'s truly magisterial\')!',
      'You\'re a faultless, incredibly delicious source of infinite happiness'
    ],
    correct_answer_title: 'Great job!',
    correct_answer_text: 'All three of those were correct. I will bump you up to zero points. Now you have nothing. Which was more than you had before. You\'re welcome.',
    replay_card_title: 'Wow, you\'re back?',
    replay_card_text: 'I didn\'t think you\'d actually play again. Well ... I\'m still starting you off with negative ten points. You don\'t get special treatment just because you done pineapple\'d before.'
  },
  {
    card_title: 'Question 1',
    card_text: 'Pineapples can...',
    answers: [
      'do advanced calculus',
      'regenerate',
      'maintain constant eye contact'
    ],
    the_correct_answer_is: 'regenerate',
    correct_answer_title: 'Correct!',
    correct_answer_text: 'You can plant pineapple leaves to grow a new plant.',
    wrong_answer_title: 'Absolutely not!',
    wrong_answer_text: 'That was an incredibly, terrible choice, my dear. What were you thinking?',
  },
  {
    card_title: 'Question 2',
    card_text: 'Pineapples contain what enzyme which can break down proteins to tenderize meat?',
    answers: [
      'Helicopter! ... I mean... helicase ... yes ... helicase',
      'bromelain',
      'DNA polymerase'
    ],
    the_correct_answer_is: 'bromelain',
    correct_answer_title: 'Helicopter!',
    correct_answer_text: '... uh, bromelain, is correct. You\'re right ... facinating ... the answer to a question can be \'not\' helicopter ...',
    wrong_answer_title: 'What? No!',
    wrong_answer_text: 'Correct answer is bromelain. I don\'t even know what that is but, wow, why didn\'t you?',
  },
  {
    card_title: 'Question 3',
    card_text: 'Pineapples take how long to become ready to harvest?',
    answers: [
      'meh, like, a few days or so',
      '18-20 months',
      '24 months'
    ],
    the_correct_answer_is: '18-20 months',
    correct_answer_title: 'Yup!',
    correct_answer_text: '18 to 20 months. Hurry up and be delicious, my precious perfect pineapple.',
    wrong_answer_title: 'What? No!',
    wrong_answer_text: 'Correct answer is 18 to 20 months. It\'s illegal to not know that - you\'re going to pineapple jail ... maybe.',
  },
  {
    card_title: 'Question 4',
    card_text: 'One pineapple plant can produce how many pineapples at a time?',
    answers: [
      'That\'s a dangerous question to ask ...',
      'one',
      'depends on its nationality and proclivity for sassiness'
    ],
    the_correct_answer_is: 'one',
    correct_answer_title: 'Absolutely!',
    correct_answer_text: 'It was a dangerous question... but the answer is one. Well played.',
    wrong_answer_title: 'What? No!',
    wrong_answer_text: 'Correct answer is one. That\'s one more than zero and one less than two.',
  },
  {
    card_title: 'Question 5',
    card_text: 'Pineapples ripen faster when ...',
    answers: [
      'they explodes',
      'upside down',
      'rightside up'
    ],
    the_correct_answer_is: 'upside down',
    correct_answer_title: 'You got it!',
    correct_answer_text: 'Research is still pending on the explode-to-ripen method ... but until that research is completed ... they currently ripen faster upside down.',
    wrong_answer_title: 'Just ... no',
    wrong_answer_text: 'Correct answer is upside down. Rosie O\'Donnell cured her depression with inversion therapy.',
  },
  {
    card_title: 'Final Score',
    perfect_score_text: [
      'You are well-versed in the pineapple. I am awed at your pineapple ways.',
      'You got everything right. Wow you are just, like, totally pineapple.',
      'Perfect score? You pineapple\'d in such a way where only ... only pineapples could be this good ... '
    ],
    some_wrong_score_text: [
      'You didn\'t get a perfect score. Only only acceptable score in the land of pineapple',
      'You got some wrong. This isn\'t a suprise to me. Considering it was you that took this quiz',
      'You got some questions right. I am absolutely shock to be honest.'
    ],
    all_wrong_score_text: [
      'You got zero right. Which I guess is better than your starting score but ... well, you actually proved to me that this score is exactly equal to your worth and number of times you\'ve been incredibly successful in your life.',
      'You got nothing right. Except for the first question. Which you couldn\'t get wrong! I saved you from being a total loser.',
      'Lol look at your score. The only thing you got right was the first question ... which you couldn\'t get wrong'
    ]
  }
  ];
  
  let theScore = -10;
  let questionNumber = 0;
  let timesPlayed = 0;
  let questionsAnsweredCorrectly = 0;

  let random_images_array = ['pineapple-image-1.jpg','pineapple-image-2.jpg','pineapple-image-3.jpg', 'pineapple-image-4.jpg', 'pineapple-image-5.jpg'];

  let winning_image_losing_image = ['right_answer_image.jpg','wrong_answer_image.jpg']