#include<iostream>
using namespace std;
int main(){
    int m, n;
    cout << "Enter number of rows : "<< endl;
    cin >> m;
    cout << "Enter number of columns : "<< endl;
    cin >> n;
    int arr[m][n];

    // input
    cout << "enter your 2D matrix : "<< endl;
    for(int i =0; i<m; i++){
        for(int j =0; j<n; j++){
            cin>>arr[i][j];
        }
    }

    int sum = 0;
    for(int i =0; i<m; i++){
        for(int j =0; j<n; j++){
            sum += arr[i][j];
        }
    }
    cout<<sum;
}