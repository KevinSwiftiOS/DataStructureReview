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
#define MAX 101
using namespace std;


 struct TreeNode {
 int val;
 struct TreeNode *left;
 struct TreeNode *right;
 };
TreeNode *build() {
    int val;
    cin >> val;
    if(val == 0)
        return NULL;
        //先序创建树 当树的当前节点为0的时候，说明没有左节点或者右节点
    TreeNode *temp = (TreeNode *)malloc(sizeof(TreeNode));
    temp -> val = val;
    temp -> left = build();
    temp -> right = build();
    return temp;
}
//赋值树
    struct TreeNode*mycopy(struct TreeNode*p)
    {
        if(!p)  return NULL;
        //创建当前节点 左节点和右节点的递归调用
        struct TreeNode*pp=(struct TreeNode*)malloc(sizeof(struct TreeNode));
        pp->val=p->val;
        pp->left=mycopy(p->left);
        pp->right=mycopy(p->right);
        return pp;
        
    }
    //树的镜像 左右节点掉个头
    void Mirror(TreeNode *pRoot) {
        if(pRoot == NULL)
            return;
        if(pRoot -> left == NULL && pRoot -> right == NULL)
            return;
        TreeNode* tmp = NULL;
        tmp = pRoot -> right;
        pRoot -> right = pRoot -> left;
        pRoot -> left = tmp;
        if(pRoot -> left != NULL)
            Mirror(pRoot -> left);
        if(pRoot -> right != NULL)
            Mirror(pRoot -> right);
    }
    bool flag = true;
//先序遍历
void pre_order(TreeNode *head){
    if(head == NULL)
        return;
    cout<<head -> val;
    pre_order(head -> left);
    pre_order(head -> right);
}
vector<vector<int>>res;
int expected = 22;
//树的深度搜索
void dfs(TreeNode *head,vector<int> v){
    if(head -> left == NULL && head -> right == NULL){
       int  sum = 0;
        v.push_back(head -> val);
        vector<int>::iterator iter;
        for(iter = v.begin();iter != v.end();iter++){

            sum += *iter;
        }
        if(sum == expected)
            res.push_back(v);
        
        
     //  v.clear();
        return;
    }
    v.push_back(head -> val);
    if(head -> left)
    dfs(head -> left,v);
    if(head -> right)
    dfs(head -> right,v);
}