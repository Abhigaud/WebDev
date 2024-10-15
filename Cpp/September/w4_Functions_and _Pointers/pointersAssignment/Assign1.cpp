//Q1 : Write a program to find the product of two numbers using pointers.
#include<iostream>
using namespace std;
int productOfAB(int* x, int* y){
    int product = (*x)*(*y);
    int* pr = &product;
    return *pr;
}
int main(){
    int a, b;
    cout<<"Enter value of a : ";
    cin >> a;
    cout<<"Enter value of b : ";
    cin >> b;
    int product;
    int* x = &a;
    int* y = &b;
    cout << productOfAB(x,y);
}