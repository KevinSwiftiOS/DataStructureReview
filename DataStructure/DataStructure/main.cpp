#include<iostream>
#include<cstring>
#include<algorithm>
using namespace std;
typedef struct Node{
    int data;
    struct Node *next;
}*NodeList;

//创建链表 返回头指针
NodeList headCreate(NodeList &L) {
    NodeList p;
    L = (NodeList)malloc(sizeof(Node));
    L -> next = NULL;
    int x;
    while (cin>>x && x != 0) {
        //采用头插法 在头部一个个插进去
        p = (NodeList)malloc(sizeof(Node));
        p -> data = x;
        p -> next = L -> next;
        L -> next = p;
    }
    return L;
    
}
//创建链表 返回头指针
NodeList tailCreate(NodeList &L) {
    NodeList p;
    L = (NodeList)malloc(sizeof(Node));
    NodeList temp = (NodeList)malloc(sizeof(Node));
    temp = L;
    int x;
    while (cin>>x && x != 0) {
        //采用头插法 在头部一个个插进去
        p = (NodeList)malloc(sizeof(Node));
        p -> data = x;
        p -> next = NULL;
        temp -> next = p;
        temp = p;
    }
    return L;
    
}

string LeftRotateString(string str, int n) {
    
    string start_str = str.substr(0,n);
    string end_str = str.substr(n,str.length() - n);
    return end_str + start_str;
}



int main() {
    cout<<LeftRotateString("abcXYZdef", 3);
}

