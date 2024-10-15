#include <iostream>
using namespace std;
int main(){
    int m = 4, n = 6;
    for(int i =1; i <=m; i++){
        for(int j =1 ; j<=n; j++){
            if( j ==1|| i==1 || i==m || j==n){
                cout<<"*";
            }else{
                cout<<" ";
            }
        }
        cout << endl;
    }
}