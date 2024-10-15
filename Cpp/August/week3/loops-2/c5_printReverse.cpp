#include <iostream>
using namespace std;
int main(){
    int n = 12374;
    int lastDigit;
    int reverse =0;
    while(n>0){
        lastDigit = n%10;
        reverse = reverse *10+lastDigit;
        n /= 10;
        
    }
    cout<< reverse;
}