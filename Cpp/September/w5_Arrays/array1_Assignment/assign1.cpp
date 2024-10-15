#include <iostream>
using namespace std;
int main(){
    int n;
    cout << "enter the size of array : ";
    cin >> n;

    int arr[n] ;
    cout << "Enter elements of Array : "<< endl;
    for(int i =0; i<n; i++){
        cin >> arr[i];
    }

    int product = 1;
    for(int i =0; i<n; i++){
        product *= arr[i];
    }
    cout << product;
}