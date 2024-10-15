/* WAP to find the largest three elements in the array. */
#include<iostream>
#include<climits>
using namespace std;
int main(){
    int arr[]={12, 23, 24, 31, 20};
    int max, smax, tmax ; 
    max = smax = tmax = INT_MIN ; 
    int n = sizeof(arr)/sizeof(arr[0]);
    for(int i =0; i<n ; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    for(int i = 0; i<n ; i++){
        if(arr[i] > smax && arr[i] != max){
            smax = arr[i];
        }
    }
    for(int i =0; i<n ; i++){
        if(arr[i] > tmax && arr[i] != max && arr[i] != smax ){
            tmax = arr[i];
        }
    }
    cout << "greatest number : "<<max <<endl;
    cout << "second greatest number : "<<smax <<endl;
    cout << "third greatest number : "<<tmax <<endl;
}