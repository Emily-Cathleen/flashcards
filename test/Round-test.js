const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');
// const data = require('../src/test-data');


describe('Round', () => {
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
  });

  it('should instantiate Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card being played', () => {
    round.returnCurrentCard();
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });



});
