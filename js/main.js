var writeLetterManyTimes = function (letter, times) {
  var i;

  for (i = 0; i < times; i++) {
    document.write(letter + '<br>');
  }
};

writeLetterManyTimes(prompt('Enter a letter:'), 10);
