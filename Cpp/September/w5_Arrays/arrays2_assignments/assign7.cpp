/*If an array arr contains n elements, then check if the given array is a palindrome or not .*/
#include<iostream>
using namespace std;
int main(){
    int arr[] = {1,2,3,4,3,2,1};
    int n = sizeof(arr)/sizeof(arr[0]);
    bool flag = true;
    int i =0;
    int j = n-1;
    while (i < j)
    {
        if(arr[i] != arr[j]){
            flag =false;
            break;
        }
        i++;
        j--;
    }
    if(flag ==false) cout<<"not palindrome";
    else cout<<"palindrome";
}