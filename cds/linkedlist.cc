//
//  main.cpp
//  Trees
//
//  Created by sandeek5 on 17/07/16.
//  Copyright © 2016 sandeek5. All rights reserved.
//

#include <iostream>
//#include <stdio>
#include <string>
//#include <stdlib>

typedef struct emp{
    
    int id;
    char name[20];
    struct emp *next;
}EMPLOYEE;

EMPLOYEE *head=NULL;
void CreateNewEmployee(int id,char* name)
{
    EMPLOYEE *e = (EMPLOYEE *)malloc(sizeof(EMPLOYEE));
//    printf("CreateNewEmployee 1");
    strcpy(e->name,name);
    e->id = id;
    e->next =NULL;
    
    if (head == NULL)
    {
        head = e;
    }
    else{
        
        EMPLOYEE *temp = head,*prev=NULL;
        while(temp != NULL)
        {   prev = temp;
            temp = temp->next;
        }
        
        prev->next = e;
    }
    
}
void printEmpDir()
{
    EMPLOYEE *temp = head;
    
    while(temp !=NULL)
    {
        printf("\n%d :: %s \n",temp->id,temp->name);
        temp = temp->next;
    }
}
int main(){
    
    //    EMPLOYEE empl;
    //    empl.id = 10;
    //    strcpy(empl.name,"sande");
    //
    //    printf("%d :: %s ", empl.id,empl.name);
    char name[] = "sande";
    CreateNewEmployee(1,name);
    CreateNewEmployee(2,name);
    CreateNewEmployee(3,name);
    
    printEmpDir();
    
    return 0;
}