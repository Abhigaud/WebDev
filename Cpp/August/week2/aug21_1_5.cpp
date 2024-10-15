/*
Ques : Take positive integer input and tell if it is a three digit number or not.*/
#include <iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter number: "<<endl;
    cin >> n;
    if(n >= 100 && n <= 999){
        cout << "this is a three digit number";
    } else {
        cout<< "not a three digit number";
    }
}