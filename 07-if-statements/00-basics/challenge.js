function favoriteNumber(toGuess, numTry) {
  return numTry == toGuess ? 'You got it!' : numTry < toGuess ? 'Too low' : 'Too high';
}

function checkLock(a, b, c, d) {
  if (a != 3 && a != 5 && a != 7) {
    return 'incorrect';
  } else if (b != 2) {
    return 'incorrect';
  } else if (c < 5 || c > 100) {
    return 'incorrect';
  } else if (d >= 9 && d <= 20) {
    return 'incorrect';
  } else {
    return 'correct';
  }
}

function canIGet() {

}
module.exports.favoriteNumber = favoriteNumber;

module.exports.checkLock = checkLock;

module.exports.canIGet = canIGet;
