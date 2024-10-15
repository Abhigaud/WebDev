#include <iostream>
#include <climits>
using namespace std;
int main(){
    int n; 
    cout << "Enter the length of Array : ";
    cin >> n;

    int arr[n];
    cout<<"enter the elements of array : "<<endl;
    for(int i = 0; i < n; i++){
        cin>>arr[i];
    }

    int min = INT_MAX;
    for(int i = 0; i < n; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    cout << "minimum value is : " << min << endl;
}