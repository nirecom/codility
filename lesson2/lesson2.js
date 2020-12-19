function solution(A, K) {
    let len = A.length;
    let start = len - (K % len);
    var R = [];
    for (let i=start; i<len; i++) {
        R.push(A[i]);
    }
    for (let i=0; i<start; i++) {
        R.push(A[i]);
    }
    return R;
}
