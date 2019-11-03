#include<iostream>
#include<cstdio>
#include<cstdlib>
#include<cstring>
#include<string>
#include<algorithm>
#include<list>
#include<queue>
#include<vector>
#include<set>
#include<map>
#include<cmath>
#define MOD 1000007
#define pi acos(-1.0)
#define ll long long
#define MAX 1000000
using namespace std;
//参考https://www.cr173.com/html/18891_1.html
typedef struct TreeNode{
    struct TreeNode *left;
    struct TreeNode *right;
    char elem;
};
TreeNode* binaryTreeFromOrderings(char *inorder,char *preorder,int length){
    if(length == 0)
        return NULL;
    TreeNode *node = (TreeNode *)malloc(sizeof(TreeNode));
    node -> elem = *preorder; //当前的第一个
    int rootIndex = 0;
    //寻找rootIndex
    for(;rootIndex < length;rootIndex++)
        if(inorder[rootIndex] == *preorder)
            break;
    
   node -> left =  binaryTreeFromOrderings(inorder, preorder + 1, rootIndex);//左子树
   node -> right =  binaryTreeFromOrderings(inorder + rootIndex + 1, preorder + rootIndex + 1, length - rootIndex - 1);
    return node;
}
void post_order(TreeNode *root){
    if(root){
    if(root -> left)
    post_order(root -> left);
    if(root -> right)
    post_order(root -> right);
    cout<<root -> elem;
    }
        
}
int main() {
    char inorders[100] = {""};
     char preorders[100] = {""};
    TreeNode *root = binaryTreeFromOrderings(inorders, preorders, 0);
    post_order(root);
    return 0;
}


