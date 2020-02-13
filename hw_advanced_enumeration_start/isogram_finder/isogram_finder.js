const IsogramFinder = function (word) {
 this.word = word;
}

IsogramFinder.prototype.isIsogram = function (){
  let string = this.word.toLowerCase().split('');
  result = string.every((character, index) => {
    return string.indexOf(character) == index;
  });
  return result;
};

module.exports = IsogramFinder;
