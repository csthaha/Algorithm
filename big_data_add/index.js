//大数字相加
// var str1 = '132',
//     str2 = '456';
// //实现 字符串转化为 数字
//     // 1. parseInt(str1)
//     // 2. Number(str1)
//     // 3. +str1
// console.log(+str1 + +str2)

var str1 = '111111111222222222333333333444444444555555555666666666777777777888888888999999999000000000999999999888888888111111111222222222333333333444444444555555555666666666777777777111111111222222222333333333444444444555555555666666666777777777888888888999999999000000000',
    str2 = '999888777666555444333222111'
var str3 = '123456789987654321111114456777777111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222123456789987654321111114456777777111111111111111111112222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222';
console.log(+str3 + +str2)  //Infinity

function addNum(str1, str2) {
    //我们得字符串化，然后通过每位去相加
    let carry = 0,// 是否会有进位
        len1 = str1.length, //len1 得长度
        len2 = str2.length,
        arr = [] //用于位得存储
    var max = Math.max(len1, len2)
    for (let i = len1 - 1, j = len2 - 1, n = max - 1; n >= 0; n-- , i-- , j--) {
        // var sum = (+str3[i] + +str2[j]) + carry
        //  (undefined + number = NaN)
        var sum = ((+str3[i] || 0) + (+str2[j] || 0)) + carry
        if (sum >= 10) {
            carry = 1;
            arr.push(sum - 10)
        } else {
            carry = 0;
            arr.push(sum)
        }
    }
    //当最高级位相加后大于10 则 carry = 1 ，push进去了 sum-10 ，所以还需push一次 carry
    if(carry > 0){
        arr.push(carry) 
    }

    // 我们push 完之后得数值顺序是反得 ，所以
    return arr.reverse().join('')
}

console.log(addNum(str2,str3)) 