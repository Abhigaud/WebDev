/*
Print the following pattern
Input: n = 4
Output:
      A
    A B C
  A B C D E
A B C D E F G
*/
#include <iostream>
using namespace std;
int main(){
    int n;
    cout << "enter line : ";
    cin >> n;
    for(int i = 1; i <= n; i++) {
        for(int j=1; j<=n-i; j++){
            cout << "  ";
        }
        char ch ='A';
        for(int j=1; j<=2*i-1; j++ ){
            cout <<" "<< ch;
            ch++;
        }
        cout << endl;
    }
}