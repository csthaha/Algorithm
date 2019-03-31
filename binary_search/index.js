function binary(Array,num){
    var len = Array.length,
        low = 0,
        high = len-1;
        while(low <= high){
            var mid = Math.floor((low + high)/2)
            if (num == Array[mid]){
                return mid;
            }else if(num > Array[mid]){
                low = mid+1
            }else{
                high = mid-1;
            }
        }
        return Array
}

var arr = [1,6,7,8,9,5,12,35,15,32,65]
console.log(binary(arr,15));
console.log(binary(arr,12));