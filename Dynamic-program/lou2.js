function lou2(n) {
    if (n == 1) {
        return 1;
    } else if (n == 2) {
        return 2;
    } else {
        var temp = 0,
            n1 = 1,
            n2 = 2;
        for (let i = 3; i < n; i++) {
            temp = n1 + n2;
            n1 = n2;
            n2 = temp;
        }
        return temp;
    }
}

console.log(lou2(1));
console.log(lou2(2));
console.log(lou2(250));