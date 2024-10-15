/*
Ques : Take 3 positive integers input and print the greatest of them.*/
#include <iostream>
using namespace std;
int main (){
    int num1, num2, num3;
    cout << "Enter first num : ";
    cin >> num1;
    cout << "Enter second num : ";
    cin >> num2;
    cout << "Enter third num : ";
    cin >> num3;

    if(num1 > num2 && num1 >num3){
        cout<< num1 << " is largest";
    }
    if(num2 > num1 && num2 >num3){
        cout<< num2 << " is largest";
    }
    if(num3 > num2 && num3 >num1){
        cout<< num3 << " is largest";
    }
}