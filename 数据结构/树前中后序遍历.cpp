#include<iostream>
using namespace std;
#include<queue>
//树的存储结构
typedef struct binary_tree {
    struct binary_tree *left;
    struct binary_tree *right;
    int data;
}binary_tree;
//前序遍历
void pre_order(binary_tree *root){
    if(root != NULL){
        cout<<root -> data;
        pre_order(root -> left);
        pre_order(root -> right);
    }
}
//中序遍历
void in_order(binary_tree *root){
    if(root != NULL){
        in_order(root -> left);
        cout<< root -> data;
        in_order(root -> right);
    }
}
//后序遍历
void post_order(binary_tree *root){
    if(root != NULL){
        post_order(root -> left);
        post_order(root -> right);
        cout<<root -> data;
    }
}