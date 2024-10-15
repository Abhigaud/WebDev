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

    int x;
    cout << "enter required element : ";
    cin >> x;

    int count =0;
    for(int i = 0; i<n; i++ ){
        if(arr[i] > x){
            count++;
        }
    }
    cout << count <<endl;
}
