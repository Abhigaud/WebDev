// Q4: Write a function to count the number of digits in a number and then print the square of this number.
#include <iostream>
using namespace std;
int square(int n){
    return n*n;
}
int numberOfDigits(int num){
    int count=0;
    while(num > 0){
        num /= 10;
        count++;
    }
    int sqr = square(count);
    return sqr;
}
int main(){
    int num;
    cout << "enter number : ";
    cin >> num;
    cout<<numberOfDigits(num);
}