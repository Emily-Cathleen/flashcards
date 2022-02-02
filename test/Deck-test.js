const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
// const Turn = require('../src/Turn');
// const data = require('../src/test-data');


describe('Deck', () => {
  let card1;
  let card2;
  let card3;
  let deck;

  beforeEach( () => {
    card1 = new Card(1, 'What is Henry\'s favorite foods?', ['chicken', 'peanutButter', 'apples'], 'chicken');
    card2 = new Card(2, 'What are Henry\'s favorite toys?', ['ball', 'rope', 'frisbee'], 'ball');
    card3 = new Card(3, 'What month was Henry born?', ['December', 'January', 'February'], 'February');
    deck = new Deck([card1, card2, card3]);

  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should accept a list of cards in the deck', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should know how many cards are in the deck', () => {
    expect(deck.countCards()).to.equal(3);
  });


});
