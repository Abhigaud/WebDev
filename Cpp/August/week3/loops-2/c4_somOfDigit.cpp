#include <iostream>
using namespace std;
int main(){
    int n = 12434;
    int sum = 0;
    int lastDigit;
    while(n>0){
        lastDigit = n % 10;
        sum += lastDigit;
        n /= 10;
    }
     cout<<sum;
}