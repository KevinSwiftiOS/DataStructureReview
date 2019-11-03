//冒泡排序 从后往前两两进行比较，若为逆序，则交换他们，知道序列比较完为止。第一趟冒泡将最小的关键字浮了上来，
//第二趟将第二小的浮上来 稳定算法，时间复杂度on2
void bubbleSort(int a[],int length){
    for(int i = 0; i < length;i++){
        //本趟冒泡中是否发生了交换
        int flag = 0;
        for(int j = length - 1; j > i;j--){
            if(a[j - 1] > a[j]){
                int temp = a[j - 1];
                a[j - 1] = a[j];
                a[j] = temp;
                flag = 1;
            }
        }
        if(!flag){
            for(int i =0 ; i< length;i++)
                cout<<a[i];
        }
       
    }
}