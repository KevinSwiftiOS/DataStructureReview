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