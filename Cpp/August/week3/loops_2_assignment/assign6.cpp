// 6. WAP to print the sum of a given number and its reverse.
#include <iostream>
using namespace std;
int main(){
    int n = 12;
    int ld;
    int reverse = 0;
    int a = n;
    while(n > 0){
        ld = n % 10;
        reverse =reverse * 10 +ld;
        n /=10;
    }
    int sum = a + reverse;
    cout << sum;
}