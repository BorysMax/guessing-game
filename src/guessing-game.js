class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.guess = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.guess = Math.floor((this.min + this.max) / 2)
    return this.guess;
  }

  lower() {
    this.max = this.guess-1;
  }

  greater() {
    this.min = this.guess+1;
  }
}

module.exports = GuessingGame;
