const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
const dog = require('../src/test-data');


describe('Round', () => {
  let cards;
  let deck;
  let round;


  beforeEach(() => {
    cards = dog.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    // card2 = new Card(2, 'What are Henry\'s favorite toys?', ['ball', 'rope', 'frisbee'], 'ball');
    // card3 = new Card(3, 'What month was Henry born?', ['December', 'January', 'February'], 'February');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should instantiate Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card being played', () => {
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  it('should keep track of turns, starting at 0', () => {
    expect(round.turn).to.equal(0);
  });

});
