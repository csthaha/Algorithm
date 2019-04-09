// 计算 n 阶楼梯 一次只能走一阶或者两阶一共有多少种方法

// 最优子结构：f(n) = f(n - 1) + f(n - 2);
// 边界：f(1) = 1; f(2) = 2
// 状态转移公式：f(4)=f(3)+f(2); ...
                // f(3)=f(2)+f(1)
                // f(2)=2
                // f(1)=1
// 所以这里出现一个问题 ，就是后面会重复计算 导致时间复杂度过大

function lou(n) {
    if (n == 1) {
        return 1;
    } else if (n == 2) {
        return 2;
    } else {
        return lou(n - 1) + lou(n - 2);
    }
}

console.log(lou(1));
console.log(lou(2));
console.log(lou(12));