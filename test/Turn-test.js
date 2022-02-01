const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', () => {
  let card1;
  let card2;
  let turn1;
  let turn2;

  beforeEach( () => {

    card1 = new Card(1, 'What is Henry\'s favorite foods?', ['chicken', 'peanutButter', 'apples'], 'chicken');
    card2 = new Card(2, 'What are Henry\'s favorite toys?', ['ball', 'rope', 'frisbee'], 'ball');
    turn1 = new Turn('apples', card1)
    turn2 = new Turn('ball', card2)

  });

  it('should be a function', () => {
    expect(turn1).to.be.a.instanceOf(Turn);
    expect(turn2).to.be.a.instanceOf(Turn);

  });

  it('should store a players guess', () => {
      expect(turn1.guess).to.deep.equal('apples');
      expect(turn2.guess).to.deep.equal('ball');
  })

})
