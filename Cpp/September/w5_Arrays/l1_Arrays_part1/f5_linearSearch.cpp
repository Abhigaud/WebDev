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
    cout << "enter element which you want to search : ";
    cin >> x;

    bool flag = false;
    for(int i = 0; i<n; i++ ){
        if(arr[i] == x){
            flag = true;
        }
    }
    if(flag == true) cout << "present"<<endl;
    else cout << "not present"<<endl;
}
