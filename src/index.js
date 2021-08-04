module.exports = function reverse (n) {
     n = Math.abs(n);
     let nString = n.toString();
     let nArray = nString.split('');
     let res = nArray.reverse();
     return res.join('');
}
