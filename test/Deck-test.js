const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Card');
const data = require('../src/test-data');


describe('Deck', () => {
  let card;
  let deck;

  beforeEach( () => {

    card = new Card(1, 'What is Henry\'s favorite foods?', ['chicken', 'peanutButter', 'apples'], 'chicken');
    card2 = new Card(2, 'What are Henry\'s favorite toys?', ['ball', 'rope', 'frisbee'], 'ball');
    turn1 = new Turn('apples', card1)
    turn2 = new Turn('ball', card2)

  });
