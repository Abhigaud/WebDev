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

    int max = INT_MIN;
    int smax = INT_MIN;
    for(int i = 0; i < n; i++){
        if(max < arr[i]){
            smax = max;
            max = arr[i];
        }else if(smax < arr[i] && arr[i] != max){
            smax = arr[i];
        }
    }
    if(smax == INT_MIN){
        cout << "No second element exists"<<endl;
    }else{
        cout << smax << endl;
        return 0;
    }
}