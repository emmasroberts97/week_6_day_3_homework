const AnagramFinder = function(word) {
  this.word = word;
};

AnagramFinder.prototype.findAnagrams = function(otherWords) {
newWord = this.sort(this.word);
let result = otherWords.filter((word) => {
  if (word.length === this.word.length && word !== this.word){
    newSecondWord = this.sort(word);
    return newSecondWord === newWord;
  };
});
  return result;
};

AnagramFinder.prototype.sort = function(word) {
  word = word.toLowerCase();
  let arr = word.split('');
  let sorted = arr.sort();
  return sorted.join('');
};

module.exports = AnagramFinder;
