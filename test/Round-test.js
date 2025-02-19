const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
// const testData = require('../src/test-data');


describe('Round', () => {
  // let cards;
  let card1;
  let card2;
  let card3;
  let deck;
  let round;


  beforeEach(() => {
    card1 = new Card(1, 'What is Henry\'s favorite foods?', ['chicken', 'peanutButter', 'apples'], 'chicken');
    card2 = new Card(2, 'What are Henry\'s favorite toys?', ['ball', 'rope', 'frisbee'], 'ball');
    card3 = new Card(3, 'What month was Henry born?', ['December', 'January', 'February'], 'February');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);

    // cards = testData.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));

  });

  it('should instantiate Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card being played', () => {
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should keep track of turns, starting at 0', () => {
    expect(round.turn).to.equal(0);
  });

  it('should update the turn count after each guess', () => {
    round.takeTurn('chicken');
    expect(round.turn).to.equal(1)

    round.takeTurn('ball')
    expect(round.turn).to.equal(2)
  });

  it('should replace the current card with the next card', () => {
    round.takeTurn('chicken');
    expect(round.returnCurrentCard()).to.equal(card2);

    //this is not card1, bc once we invoke takeTurn, it will swicth to card2

    round.takeTurn('ball');
    expect(round.returnCurrentCard()).to.equal(card3);
  });


  it('should keep track of incorrect guesses', () => {
    round.takeTurn('apple');
    round.takeTurn('ANYTHING');
    expect(round.incorrectGuesses.length).to.equal(2);
  });

  it('should calculate the percentage of correct guesses', () => {
    round.takeTurn('apple');
    round.takeTurn('ball');
    round.takeTurn('February');
    // round.calculatePercentCorrect();

    expect(round.calculatePercentCorrect()).to.equal(66.67)
  });







});
