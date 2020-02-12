const IsogramFinder = function (word) {
 this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
  let string = this.word.toLowerCase().split('');
  let isogramCheckerFalse = [];
  let isogramCheckerTrue = [];
  string.forEach((character) => {
    if (!isogramCheckerTrue.includes(character)){
      isogramCheckerTrue.push(character);
    } else {
      isogramCheckerFalse.push(character);
    };
  });
  if (isogramCheckerFalse.length === 0) {
    return true;
  } else {
    return false
  };
};

module.exports = IsogramFinder;
