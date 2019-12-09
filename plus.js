function bigNumberSum(a, b) {
    // 123456789
    // 000009876

    // padding
    let x = String(a);
    let y = String(b);
    let cur = 0;
    while (cur < x.length || cur < y.length) {
        if (!x[cur]) {
            x = '0' + x;
        } else if (!y[cur]) {
            y = '0' + y;
        }
        cur++;
    }

    let carried = 0;
    const res = [];

    for (let i = x.length - 1; i > -1; i--) {
        const sum = carried + +x[i] + +y[i];
        if (sum > 9) {
            carried = 1;
        } else {
            carried = 0;
        }
        res[i] = sum % 10;
    }
    if (carried === 1) {
        res.unshift(1);
    }

    return res.join("");
}

console.log(bigNumberSum(123, 111111111));