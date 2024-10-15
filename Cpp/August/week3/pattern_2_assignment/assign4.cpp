#include <iostream>
using namespace std;
int main(){
    int n = 4;
    
    for(int i =0; i<2*n-1; i++){
        cout << (char)('A'+i) ;
    } 
    cout<< endl;
    for(int i = 1; i < n; i++){
        char ch ='A';
        for(int j = n-i; j>=1; j--){
            cout << ch;
            ch++;
        }
        for(int j =1; j<=2*i-1; j++){
            cout<<" ";
            ch++;
        }
        for(int j = n-i; j>=1; j--){
            cout << ch;
            ch++;
        }
        cout<<endl;
    }
}