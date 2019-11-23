//快速排序 在一个数组中，通过一趟快排将数组分为2部分，左边的都小于它，右边的都大于它
//快排中用到的partion函数，是进行一趟快速排序，返回记录所在的位置p，p左边的
//记录都不大于关键字，右边的都大于他
int Partition(int a[],int left,int right){
    //定义交换的临时值
    int temp;
    //定义航标
    int Pivo = a[left];
    while(left < right){
        while (left < right && a[right] > Pivo) {
            right--;
        }
        temp = a[left];
        a[left] = a[right];
        a[right] = temp;
        while(left < right && a[left] < Pivo){
            left++;
        }
        temp = a[left];
        a[left] = a[right];
        a[right] = temp;
    }
    return left;
}
//时间复杂度为o(n2) 是一个不稳定的算法
void QuickSort(int a[],int left, int right){
    if(left < right){
        int p = Partition(a, left, right);
        QuickSort(a, left, p - 1);
        QuickSort(a, p + 1, right);
    }
}
