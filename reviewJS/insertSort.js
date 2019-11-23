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
// console.log(bubbleSort([4,3,2,1],4));




// console.log(insertSort([1,4,3,2],4));
//插入排序
function insertSort(arr,length){
    for(var i = 0; i < length;i++){
        var temp = arr[i];
        var j = i - 1;
       for(j = i - 1; j >= 0;j--)
       if(temp > arr[j])
       break;
       var k;
       for(k = i - 1; arr[k] > temp && k > 0;k--)
       arr[k + 1] = arr[k];
       arr[k + 1] = temp;
    }
    return arr;
}
console.log(insertSort([2,5,6,3],4));
function bubbleSort1(arr,length){
    for(var i = 0; i < length;i++){
       var flag = 0;
    for(var j = length - 1; j > i;j--){
        if(arr[j - 1] > arr[j]){
            var temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            flag = 1;
        }
    }
    if(!flag)
    return arr;
    }
    return arr;
}
console.log(bubbleSort1([4,3,2,1],4));

//快速排序
function Partion(a,left,right){
    //一趟快速排序返回当前航标Pivo在数组中的位置
    while(left < right){
        var Pivo = a[left];
        while(left < right && a[right] > Pivo)
        right--;
        var temp = a[right];
        a[right] = a[left];
        a[left] = temp;
        while(left < right && a[left] < Pivo)
        left++;
        temp = a[right];
        a[right] = a[left];
        a[left] = temp;
    }
    return left;
}
function QuickSort(arr,left,right){
    if(left < right){
    var p = Partion(arr,left,right);
 //   console.log(p);
    QuickSort(arr,left,p - 1);
    QuickSort(arr,p + 1,right);
    }
}


function selectSort(a,length){
    for(var i = 0; i < length;i++){
        var min = i;
        for(var j = i + 1; j < length;j++){
              if(a[j] < a[min])
              min = j;
        }
        if(min != i){
            var temp = a[min];
            a[min] = a[i];
            a[i] = temp;
        }
    }
}

var arr = [8,9,7,6,5,10];
selectSort(arr,6);
arr.forEach((item,index,arr) => {
    console.log(item);
})
