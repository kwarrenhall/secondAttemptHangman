

function HangMan(word) {
  this.word = word;
}

HangMan.prototype.splitWord = function(word) {
  return this.word.split('');
}

HangMan.prototype.randomWord = function() {
  var randomWordArray = ["poodle", "doberman", "labrador"]
  var randomNum = Math.floor(Math.random() * randomWordArray.length);
  var randomWord = randomWordArray[randomNum];
  this.word = randomWord;
  return randomWord;
}

HangMan.prototype.wordLength = function() {
  var wordLength = this.word.length;
  return wordLength;
}

HangMan.prototype.placeHolderArray = function() {
  var wordLength = this.word.length;
  var placeHolderArray = []
  for (var i = 0; i < wordLength; i++) {
    placeHolderArray = placeHolderArray.concat("_");
  }
  this.word = placeHolderArray;
  return placeHolderArray;
}

// Ticket.prototype.price = function() {
//   var price = 8;
//   var newMovies = ["The Revenant", "Star Wars"];
//
//   for (var i = 0; i < newMovies.length; i++) {
//     if (this.movieName === newMovies[i]) {
//       price += 1;
//     }
//   }
//   if (this.age < 12 || this.age >= 55) {
//     price -= 1;
//   }
//   if (this.time < 4) {
//     price -= 1;
//   }
//   return price;
// };
