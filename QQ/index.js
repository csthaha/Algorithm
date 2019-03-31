//  破解QQ：
// 加密规则：1，删除第一位
//          2，将第二位移到最后一位
//          循环以上两步，直到最后一位删除。
// 如： 2434
// 一：删除第一位后： 434
//     将第二位移到最后一位：344
// 二： 删除第一位后： 44
//     将第二位移到最后一位： 44
// 三： 删除第一位后：4
//     将最后一位移到最后一位：4
// 四:删除第一位......

// 最终QQ为：2 3 4 4（删除放到新ＱＱ） 

let encrypt_qq = [2, 4, 3, 4, 8, 7, 4, 0, 3, 8],
    qq = [],
    head = 0,
    tail = encrypt_qq.length
while (head < tail) {
    qq.push(encrypt_qq[head]);
    head++;
    encrypt_qq[tail] = encrypt_qq[head];
    tail++;
    head++;
}


console.log(qq);