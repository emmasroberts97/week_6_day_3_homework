const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  let string = this.phrase.toLowerCase().replace(/[^a-z]/g,'').split('');
  alphabetCheck = [];
  string.forEach((character) => {
    if (!alphabetCheck.includes(character)){
      alphabetCheck.push(character);
    }
  });
  return this.checkResult();
};

PangramFinder.prototype.checkResult = function (){
  if (alphabetCheck.length === this.alphabet.length) {
    return true;
  } else {
    return false
  };
};

module.exports = PangramFinder;
