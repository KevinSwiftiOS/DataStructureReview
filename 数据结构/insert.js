function insertSort(arr,length){
    var i,j,k,temp;
   for(i = 0; i < length;i++){
       for(j = i - 1; j >= 0;j--){
           if(a[i] > a[j])
           break;
           
       }
       temp = a[i];
       for(k = i - 1; k >= 0 && a[k] > temp;k--)
       a[k + 1] = a[k];
a[k + 1] = temp;
   }
}