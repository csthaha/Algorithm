function binary_search(arr, num) {
    //利用二分查找法，数组必须得是有序得
    let min = 0,
        max = arr.length - 1,
        mid;

    while (min <= max) {
        // mid = parseInt((min + max) / 2)
        // mid = min + parseInt((max - min) / 2)
        mid = min +( (max - min) >> 1)
        
        if (arr[mid] < num) {
            min = mid + 1
        } else if (arr[mid] > num) {
            max = mid - 1
        } else {
            return mid;
        }


    }
    return -1;
}
var Arr =[]
for(let i = 0; i< 5; i++){
    Arr.push(i);
}
console.log(Arr.reverse().join(''))
let arr = [1, 5, 2, 3, 8, 45, 2019, 16, 2024];
console.log(binary_search(arr.sort((a, b) => a - b), 2019))
console.log(binary_search(Arr,2019))