function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let binN = N.toString(2);
    var zeroes = binN.split('1');
    if (zeroes[0] != '')
        zeroes.shift();
    if (zeroes[zeroes.length - 1] != '')
        zeroes.pop();
    let maxlen = 0;
    zeroes.forEach( function(item) {
        let n = item.length;
        if (n > maxlen) maxlen = n;
    } );
    return maxlen;
}
