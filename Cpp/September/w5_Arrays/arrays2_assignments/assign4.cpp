/* 4. Find the difference between the sum of elements at even indices to the sum of elements at odd indices.
*/
#include<iostream>
using namespace std;
int main(){
    int arr[] = {1,2,3,4,5,6,7,7,8,9,9,11,11,2};
    int size= sizeof(arr)/sizeof(arr[0]);
    int sumEven=0;
    int sumOdd=0;
    for(int i = 0; i<size; i++){
        if(i % 2 ==0){
            sumEven += arr[i];
        }else{
            sumOdd += arr[i]; 
        }
    }
    int difference = sumEven - sumOdd;
    cout<<difference;
}
