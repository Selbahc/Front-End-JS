module.exports.formLetter = function(firstName, senderName, message) {
  return "Hello " + firstName + "," + "\n\n" + message + "\n\n" + "Sincerely," + "\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
  var first = bigString.slice(startA, endA)
  var last = bigString.slice(startB, endB);
  return first + last;
};

module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
  return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
  var first = text.indexOf(searchString) + searchString.length;
  var last = text.lastIndexOf(searchString);
  return text.slice(first, last);
};
