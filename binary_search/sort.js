
// 找出数组中最小的一个数字
function search_min(Array){

    var min = Array[0],                //存储最小数的值

        len = Array.length,

        min_index = 0;                  //存取最小数的索引
    for(let i = 1; i < len; i++){
        if(min > Array[i]){
            min = Array[i]
            min_index = i;
        }
    }
    return min
}

var arr = [2,4,3,4,8,7,0,3,2]
console.log(search_min(arr))