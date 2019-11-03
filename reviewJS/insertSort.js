function insertSort(a,length){
    for(var i = 0; i < length;i++){
        for(j = i - 1; j >= 0;j--){
            if(a[i] > a[j])
            break;
        }
    
        var temp = a[i];
        for(var k = i - 1; k >= 0 && a[k] > temp;k--)
        a[k + 1] = a[k];
        a[k + 1] = temp;
      
    }
    return a;
}
//冒泡排序
function bubbleSort(a,length){
    //冒泡排序每一次都将一个小的冒泡上去
    for(var i = 0; i < length;i++){
        var isSwap = false;
        for(var j = length - 1; j > i;j--){
            if(a[j - 1] > a[j]){
                var temp = a[j - 1];
                a[j - 1] = a[j];
                a[j] = temp;
                isSwap = true;
            }
        }
        if(!isSwap)
        return a;
    }
}
console.log(bubbleSort([4,3,2,1],4));




console.log(insertSort([1,4,3,2],4));