#include <iostream>
using namespace std;
int main(){
    int n = 4556;
    int lastDigit;
    int sum = 0;
    while(n>0){
        lastDigit = n % 10;
        n/=10;
        if(lastDigit % 2 ==0){
            sum += lastDigit;
        }
    }
    cout << sum;
}