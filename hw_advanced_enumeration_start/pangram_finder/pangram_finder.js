const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  let string = this.phrase.toLowerCase().replace(/[^a-z]/g,'').split('');
  const alphabetCheck = [];
  string.forEach((character) => {
    if (!alphabetCheck.includes(character)){
      alphabetCheck.push(character);
    }
  });
  if (alphabetCheck.length === 26) {
    return true;
  } else {
    return false
  };
};

module.exports = PangramFinder;
