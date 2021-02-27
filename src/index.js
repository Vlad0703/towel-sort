
// You should implement your task here.

module.exports = function towelSort (matrix) {
  tow = matrix;
  if (typeof tow === 'undefined') {
    return tow = [];
  } else {
    for (let i = 1; i < tow.length; i += 2) {
      tow[i].reverse();
    }
    return tow.flat();
  }
}
