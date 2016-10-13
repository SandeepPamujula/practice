//
//  main.cpp
//  Trees
//
//  Created by sandeek5 on 17/07/16.
//  Copyright © 2016 sandeek5. All rights reserved.
//

#include <iostream>
#include <string>

typedef struct node{
    
    int id;
    struct node *left;
    struct node *right;
}NODE_T;

NODE_T *head=NULL;

NODE_T* CreateNewNode(int id)
{
    NODE_T *node = (NODE_T *)malloc(sizeof(NODE_T));

    node->id = id;
    node->left = NULL;
    node->right = NULL;
    
    return node;
    
    
}

void InsertNode(NODE_T *node)
{
    if (head == NULL){
        head = node;
    }else {
        NODE_T *temp = head,*prev=NULL;
        
        while (temp != NULL) {
            
            prev = temp;
            
            if (temp->id > node->id){
                temp = temp->left;
            }
            else if(temp->id < node->id) {
                temp = temp->right;
            }
            else{
                break;
            }
        }
        if (temp != NULL){
            std::cout<<" Unable to Insert node\n";
            return;
        }
        else if (prev->id > node->id){
            prev->left = node;
        }
        else if (prev->id < node->id){
            prev->right = node;
        }

    }
    
}
void InOrderTraverse(NODE_T *node)
{
    if (node){
    
        InOrderTraverse(node->left);
        std::cout<<node->id<<"\n";
        InOrderTraverse(node->right);
    }
}
void findNode(int id,NODE_T *node)
{
    if (node == NULL ){
        return;
    }
    if(id == node->id){
        std::cout<<"node found "<<node->id<<"\n";
        return ;
    }

    std::cout<<"node :: "<<node->id<<"\n";
    if (id > node->id){
        findNode(id,node->right);
    }
    else
        findNode(id,node->left);

}
int main(){
    
    NODE_T *node = CreateNewNode(100);
    InsertNode(node);
    node = CreateNewNode(50);
    InsertNode(node);
    node = CreateNewNode(110);
    InsertNode(node);
    node = CreateNewNode(25);
    InsertNode(node);
    node = CreateNewNode(51);
    InsertNode(node);
    node = CreateNewNode(26);
    InsertNode(node);
    node = CreateNewNode(120);
    InsertNode(node);
    
    InOrderTraverse(head);
    
    findNode(110,head);
    findNode(51,head);
    return 0;
}