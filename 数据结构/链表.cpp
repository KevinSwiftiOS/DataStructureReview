#include<iostream>
#include<cstring>
#include<algorithm>
#include<map>
#include<vector>
using namespace std;
typedef struct Node{
    int data;
    struct Node *next;
}*NodeList;

//创建链表 头插法 返回头指针
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
//创建链表 尾插法 返回头指针
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
struct ListNode {
    int val;
    struct ListNode *next;
   
};
//删除重复的节点
ListNode* deleteDupl(ListNode* pHead)
{
      map<int,int>M;
    ListNode *head = pHead;
    ListNode *temp = head;
    M.insert(pair<int,int>(head -> val,1));
    ListNode *afterTemp = temp -> next;
  
    while(afterTemp){
        if(M.find(afterTemp -> val) == M.end()){
            M.insert(pair<int,int>(afterTemp -> val,1));
            temp = afterTemp;
            afterTemp = afterTemp -> next;
        }else{
            ListNode *p = afterTemp;
            temp -> next = afterTemp -> next;
            afterTemp = temp -> next;
            delete(p);
            
        }
        
    }
    return head;
}

//删除重复的节点
ListNode* deleteDuplication(ListNode* pHead)
{
    if(pHead == NULL)
        return NULL;
    map<int,int>M;
    ListNode *head = pHead;
    ListNode *temp = head;
   
    
    while(temp){
        if(M.find(temp -> val) == M.end()){
            M.insert(pair<int,int>(temp -> val,1));
           
          
        }else{
            int cnt = M[temp -> val];
            M[temp -> val] = ++cnt;
        }
       temp = temp -> next;
    }
    temp = head;
    ListNode *afterTemp = temp -> next;
    while (temp && M[temp -> val]!= 1) {
        ListNode *p = temp;
        temp = temp -> next;
        delete p;
    }
    head = temp;
    afterTemp = temp -> next;
    while (afterTemp) {
        if(M[afterTemp -> val] != 1){
            ListNode *p = afterTemp;
            temp -> next = afterTemp -> next;
            delete p;
            afterTemp = temp -> next;
        }else{
            temp = afterTemp;
            afterTemp = afterTemp -> next;
        }
    }
    
    
    return head;
}
