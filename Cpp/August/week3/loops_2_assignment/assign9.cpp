// 9. Write a program to print out all Armstrong numbers between 1 and 500. If the sum of cubes of each digit of the number is equal to the number itself, then the number is called an Armstrong number.

#include <iostream>
using namespace std;
int main(){
    for(int i =1; i<=500; i++){
        int a = i;
        int sum = 0;
        while(a > 0){
            int ld = a % 10;
            sum += ld * ld * ld;
            a /= 10;
        }
        if( i == sum ){
            cout<< i <<" ";
        }
    }
}