#include <iostream>
using namespace std;
int main(){
    int n =4;
    for(int i=1; i<n; i++){
        cout<<"  ";
    }
    cout<<" "<< 1 <<endl;
    for(int i=2; i<=n; ++i){
        for(int j =1; j<=n-i; j++){
            cout <<"  ";
        }
        cout <<" "<< i;
        for(int j =1; j < 2*i-1; j++){
            cout << "  ";
        }
        cout <<i;
        cout << endl;
    }
}

