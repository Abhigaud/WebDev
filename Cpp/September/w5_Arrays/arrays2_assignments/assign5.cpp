/* 5. Given an array of integers, change the value of all odd indexed elements to its second multiple and increment all even indexed values by 10.*/
#include<iostream>
using namespace std;
int main(){
    int arr[] ={1,2,3,4,5,4,7,9,11};
    int size= sizeof(arr)/sizeof(arr[0]);
    int indexEven=0;
    int indexOdd=0;
    for(int i = 0; i<size; i++){
        if(i % 2 !=0){
            arr[i]*= 2 ;
        }else{
            arr[i]+=10; 
        }
         cout<<arr[i]<<" ";
    }
}