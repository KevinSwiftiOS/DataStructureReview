//插入排序的实现
//算法的稳定性 如果待排序的2个元素 r1和r2,对应的关键字相同，且在排序前r1在r2之前，使用一种排序算法后，r1在r2之后了。则表示是不稳定的。
//否则是稳定的 基数排序不是基于比较的
//插入排序 在已经拍好序的数组中直接插入 是一个稳定的算法 复杂度为on2
void insertSort(int a[],int length){
    int i,j,k,temp;
    for(i = 0; i < length;i++){
        for(j = i - 1; j >= 0;j--)
            if(a[i] > a[j])
                break;
        temp = a[i];
        if(j != i - 1) {
            for(k = i - 1;k >= 0 && a[k] > temp;k--)
                a[k + 1] = a[k];
        a[k + 1] = temp;
        }
    }
}