//选择排序 每一趟 在后面的 n - i + 1个待排序的数组中选择最小的 作为有序数列的第i个元素
//复杂度为O(n2) 是一个不稳定的排序算法
void SelectSort(int arr[],int length){
    for(int i = 0; i < length;i++){
        int min = i;
        int j;
        for(j = i + 1; j < length;j++){
            if(arr[j] < arr[min])
                min = j;
        }
        if(min != i){
            int temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
}