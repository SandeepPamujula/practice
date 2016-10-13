#include <stdio.h>
#include <string.h>
int main(){
    
    
    char *str="malayalam";
    int i=0,status=1;
    char *ptr = str + (strlen(str)-1);
    char *ptr1 = str;
    int len = strlen(str)/2;
    printf("%s\n",str);
    printf("%s :: %s :: %d \n",ptr1,ptr,len);
    for (i=0;i<len;i++){
        if (*ptr1 != *ptr){
            status = 0;
            break;
        }
        ptr1++;
        ptr--;
        
    }
    
    status? printf("%s is palindrome \n",str) : printf("%s is not a palindrome \n",str);
    printf("%s  %s\n",ptr1,ptr);
    return 0;
}