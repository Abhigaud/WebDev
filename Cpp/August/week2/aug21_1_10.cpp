/*
Ques : Take positive integer input and tell if it is divisible by 5 or 3 but not divisible by 15.*/
#include <iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter your number : ";
    cin >> n;
    if(n % 5 == 0 || n % 3 == 0){
        if(n % 15 !=0){
            cout << "number is divisible by 5 or 3 but not by 15";
        }else{
            cout<<"number is divisible by 5 or 3 and 15";
        }
    }else{
        cout<<"number is not divisible by 5 or 3";
    }
}