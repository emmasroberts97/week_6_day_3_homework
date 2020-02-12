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

// IsogramFinder.prototype.isIsogram = function () {
//   let string = this.word.toLowerCase().split('');
//   isogramCheckerFalse = [];
//   isogramCheckerTrue = [];
//   string.forEach((character) => {
//     if (!isogramCheckerTrue.includes(character)){
//       isogramCheckerTrue.push(character);
//     } else {
//       isogramCheckerFalse.push(character);
//     };
//   });
//   return this.checkResult();
// };
//
// IsogramFinder.prototype.checkResult = function () {
//   if (isogramCheckerFalse.length === 0) {
//     return true;
//   } else {
//     return false
//   };
// };

module.exports = IsogramFinder;
