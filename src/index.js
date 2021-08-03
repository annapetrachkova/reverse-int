module.exports = function reverse (n) {
    n = Math.abs(n);
    let nStr = n.toString();
    let res = 0;
    let count = 1;
    for (let i = 0; i < nStr.length - 1; i++){
        count *= 10;
    }
    for (let i = 0; i < nStr.length; i++) {
        let ost = n % 10;
        res = res + ost * count;
        count /= 10;
        n = Math.trunc(n / 10);
    }
    return res;

}
