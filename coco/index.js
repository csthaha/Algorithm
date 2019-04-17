// 题： 有 piles 挂香蕉，每挂上的香蕉数量不相同。
//     要求再 H 小时内吃完，（吃的时候必须吃完 这一挂，才能吃下一挂），求 一小时最少吃几根，
//     可以在H 小时内吃完


/**
 * @description 在规定时间内吃完，最小吃香蕉的速度
 * @param {number[]} piles 
 * @param {number} H 
 * @return {number}
 */
function eatMin(piles, H) {
    var low = 1;
    //下面那个函数是我们手动从 1 开始试的。
    //我们要试多少次呢？ n 次，n为最大挂的香蕉数
    // 但是我们如何找到第一次就成功的 那个数呢？我们用 二分查找法
    var high = Math.max(...piles);
    while (low <= high) {
        let n = low + ((high - low) >> 1);
        if( eatAllBananas(piles, H, n)){
            high = n -1;
        }
        else{
            //返回false 的话，即没有吃完，则小的值没有意义了
            low = n + 1;
        }

    }
    return low;
}

/**
 * @description 吃完所有的香蕉
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} n 
 */
function eatAllBananas(piles, H, n) {
    let h = 0;
    for (let pile of piles) {
        h += Math.ceil(pile / n) //向上取整
    }

    // 怎么样才是吃完呢？吃的时间h 小于等于所花的时间H
    return (h <= H)
}
var piles = [4, 6, 9, 8,11];
console.log(eatAllBananas(piles, 8, 6));
console.log(eatMin(piles,8));
