#include <iostream>
using namespace std;
int main(){
    int n =4; 
    for(int i=1; i<=n; i++){
        char a='A';
        for(int j=1; j<=n; j++){
            cout <<" "<< a;
            a++;
        }
        cout<<endl;
    }
}