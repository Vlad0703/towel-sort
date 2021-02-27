
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let tow = matrix;
    for (let i = 1; i < tow.length; i+=2 ) {
      tow[i].reverse();
    }
    return tow.flat();
}
