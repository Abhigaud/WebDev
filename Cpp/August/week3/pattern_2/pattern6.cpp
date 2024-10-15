#include <iostream>
using namespace std;
int main(){
    int n = 4;
    int m =n-1;
    int nsp = 1;
    for(int i=1; i<= 2*n-1; i++){
        cout<<i;
    }
    cout<< endl;
    for(int i =1; i<=m; i++){
        int num =1;
        for(int j = 1; j<=m+1 -i; j++){
            cout << num;
            num++;
        }
        // spaces
        for(int k =1; k<=nsp; k++ ){
            cout<<" ";
            num++;
        }
        nsp+=2;
         for(int j = 1; j<=m+1 -i; j++){
            cout<<num;
            num++;
        }
    
        cout << endl;
    }
}
