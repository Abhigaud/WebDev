/*Find the unique number in a given Array where all the elements are being repeated twice with one value being unique.*/
#include<iostream>
using namespace std;
int main(){
    int arr[] ={1,2,1,4,2,3,4,5,6,5};
    int size= sizeof(arr)/sizeof(arr[0]);
    for(int i = 0; i<size; i++){
        bool flag =true;//true --> unique
        for (int j = 0; j < size; j++){
            if(j==i)continue;
            if(arr[i] ==arr[j]){
                flag =false;
                break;
            }
        }
        if(flag==true){
            cout << arr[i] <<endl;
        }
    }
}