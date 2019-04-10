//红包规则：
// 随机性 并且 公平：total/num
// 变量：总金额-total  总人数-num 余下金额-restAmount 未领取人数-restNum  存放领取的金额--数组- arr[]
// 领取红包总金额 等于 发放金额（怎样算随机，公平）：
//     假如 n 个人 n-1人随机，最后一人 拿剩下的 

function hongbao(total, num) {
    const arr = []; //用于存放 领取的金额
    let restAmount = total,
        restNum = num;
    for (let i = 1; i < num; i++) {
        // 怎么样随机才能显示公平

        // 比如 100 元 10人 分
        // 1. 100/10 * 2 （0，20）区间随机 平均 10元
        // 剩余 90元 9人
        // 2. 90/10 *2 （0，20）区间随机 平均 10元 ... 如此算法 体现公平性

        let amount = parseFloat(Math.random() * ((restAmount / restNum) * 2 - 0)).toFixed(2);
        restAmount = restAmount - amount;
        restNum--;
        arr.push(amount);
    }

    arr.push(restAmount.toFixed(2));
    
    return arr;
}
// console.log(hongbao(100, 10));
console.log(hongbao(1, 2));