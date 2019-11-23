//直接插入排序
function insertSort(a, length){
 var i,j,k,temp;
 for(i = 0; i < length;i++){
     //从后向前移动
     for(j = i - 1; j >= 0;j--)
     if(a[i] > a[j])
     break;
     temp = a[i];
     if(j != i - 1){
         for(k = i - 1; k >= 0 && a[k] > temp;k--)
         a[k + 1] = a[k];
         a[k + 1] = temp;
     }
 }
 return a;
}
console.log(insertSort([1,2,4,3,5,2,10],7));


function Partion(a,left,right){
    var Pivo = a[left];
    while(left < right){
    
        while(left < right && a[right] > Pivo)
        right--;
        var temp = a[right];
        a[right] = a[left];
        a[left] = temp;
        while(left < right && a[left] < Pivo)
        left++;
        var temp = a[right];
        a[right] = a[left];
        a[left] = temp;
        
    }
    return left;
}
function QuickSort(arr,left,right){
    if(left < right){
        var p = Partion(arr,left,right);
        QuickSort(arr,left,p - 1);
        QuickSort(arr,p + 1,right);
    }
}
var arrs = [1,4,6,5,2,3];
QuickSort(arrs,0,5);
console.log(123);
console.log(arrs);
function selectSort(a,length){
    for(var i = 0; i < length;i++){
        var min = i;
        for(var j = i + 1; j < length;j++){
            if(a[j] < a[i])
            min = j;
        }
        if(min != i){
          var temp = a[min];
          a[min] = a[i];
          a[i] = temp;
        }
    }
}
arrs = [1,4,3];
selectSort(arrs,3);
console.log(arrs);
//debounce