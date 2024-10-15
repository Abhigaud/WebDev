#include<iostream>
using namespace std;
int main(){
    int n, m;
    cout<<"enter number of rows :"<< endl;
    cin >> m;
    cout<<"enter number of columns :"<< endl;
    cin >> n;
    int arr[m][n];
    for(int i =0; i<m; i++){
        for(int j =0; j<n; j++){
            cin >> arr[i][j];
        }
    }
    // print 
    for(int i=0; i<m; i++){
        for(int j = 0; j < n; j++){
            cout << arr[i][j]<<" ";
        }
        cout<<endl;
    }
}