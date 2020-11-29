function Hangman(word) {
  this.errorsLeft = 6;

  this.wrongSymbols = [];

  this.guessTheWord = word;

  this.guessedArray = new Array(this.guessTheWord.length).fill('_');


  this.guess = (letter) => {
    let correct = 0;

    if (this.errorsLeft === 0) {
      console.log('you lose');

      return;
    }

    if (this.wrongSymbols.includes(letter) || this.guessedArray.includes(letter)) {
      console.log('you have already named this letter');
      console.log(this.getStatus());

      return;
    }

    for (let i = 0; i < this.guessTheWord.length; i++) {
      if (this.guessTheWord[i] === letter) {
        this.guessedArray[i] = letter;
        correct++;
      }
    }

    if (!this.guessedArray.includes('_')) {
      console.log(`${this.getGuessedString()} | You won!`);
      
      return;
    }

    if (correct) {
      console.log(this.getGuessedString());
    } else {
      this.wrongSymbols.push(letter);
      console.log(`wrong letter, errors left ${--this.errorsLeft} | [${this.getWrongSymbols()}]`);
      if (this.errorsLeft === 0) {
        console.log('you lose');
      }
    }
  };

  this.getStatus = () => {
    return `${this.getGuessedString()} | errors left ${this.errorsLeft} | wrong letters [${this.getWrongSymbols()}]`;
  };

  this.startAgain = (newWord) => {
    this.guessTheWord = newWord;
    this.errorsLeft = 6;
    this.wrongSymbols = [];
    this.guessedArray = new Array(this.guessTheWord.length).fill('_');
  };

  this.getGuessedString = () => {
    return this.guessedArray.join('');
  };

  this.getErrorsLeft = () => {
    return this.errorsLeft;
  };

  this.getWrongSymbols = () => {
    return this.wrongSymbols;
  };
}

let hangman = new Hangman('webpurple');

module.exports = hangman;
