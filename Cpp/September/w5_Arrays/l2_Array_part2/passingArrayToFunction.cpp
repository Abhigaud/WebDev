#include<iostream>
using namespace std;
void display(int a[], int size){
    // int size = sizeof(a)/sizeof(a[0]);
    for(int i =0 ; i<size - 1; i++){
        cout<<a[i]<<" ";
    }
    cout<<endl;
}
void change (int b[], int size){
    b[0] = 100;
}
int main(){
    int arr[5] = {1,4,2,7,4};
    int size = sizeof(arr)/sizeof(arr[0]);
    cout << size << endl;
    // accessing the elements of array in another function
    // updation, pass by value
    display(arr, size);
    change(arr, size);
    display(arr, size);
}
// array --> pass by refrence