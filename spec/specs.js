describe ('HangMan', function() {
  it("selects a random word for player to guess against", function() {
    var testHangMan = new HangMan("orange");
    expect(testHangMan.word).to.equal("orange");
  });
    it("splits a word into an array", function() {
      var testHangMan = new HangMan("orange");
      expect(testHangMan.splitWord()).to.eql(["o", "r", "a", "n", "g", "e"]);
  });
  it("selects a word from the array", function() {
    var testHangMan = new HangMan("orange");
    expect(testHangMan.randomWord()).to.be.a('string');
  });
  it("identifies length of word", function() {
    var testHangMan = new HangMan("labrador");
    expect(testHangMan.wordLength()).to.equal(8);
  });
});
//   it("adds the price method to the ticket", function() {
//     var testTicket = new Ticket("Star Wars", 7, 24);
//     expect(testTicket.price()).to.equal(9);
//   });
// });
