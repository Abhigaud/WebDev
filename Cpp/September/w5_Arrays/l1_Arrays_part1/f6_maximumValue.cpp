#include<climits>
#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "enter size of array : ";
    cin >> n;

    cout << "enter elements of array : ";
    int arr[n];
    for(int i = 0; i<n; i++ ){
        cin >> arr[i];
    }

    // int maxNum = arr[0];
    int maxNum = INT_MIN;
    for(int i = 1; i<n; i++ ){
        if(arr[i]  >maxNum){
            maxNum = arr[i];
        }
    }
    cout << maxNum;
}
 