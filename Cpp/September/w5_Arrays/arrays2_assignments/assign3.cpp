/*Check if the given array is sorted or not*/
#include<iostream>
using namespace std;
void isSorted(int arr[]){
    int size = sizeof(arr)/sizeof(arr[0]);
    bool flag =true;
    for(int i = 1; i<size; i++){
        if(arr[i-1] > arr[i]){
            flag = false;
            break;
        }
    }
    if(flag == true) cout <<"Array is Sorted";
    else cout<< "array is unsorted";
}
int main(){
    int arr[]={2,3,4,5,6,8,10};
    isSorted(arr);  
}