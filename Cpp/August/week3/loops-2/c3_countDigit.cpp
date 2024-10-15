#include <iostream>
using namespace std;
int main(){
    int n = 1234;
    int i = 0;
    int a = n;
    while(n>0){
        n /= 10;
        i++;
    }
    if(a==0) cout<<1;
    else cout<<i;
}