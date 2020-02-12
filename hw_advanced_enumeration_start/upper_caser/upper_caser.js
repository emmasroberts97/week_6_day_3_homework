const UpperCaser = function (words) {
  this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
  let result = this.words.map((word) => {
    return word.toUpperCase();
  });
  return result;
};

module.exports = UpperCaser;
