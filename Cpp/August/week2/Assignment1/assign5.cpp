/*Write a program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle.*/
#include <iostream>
using namespace std;
int main(){
    int a, b, c;
    cout << "Enter first side: ";
    cin >> a;
    cout << "Enter second side: ";
    cin >> b;
    cout << "Enter third side: ";
    cin >> c;

    if((a+b>c) && (a+c>b) && (b+c>a)){
        if((a==b) && (b==c) && (a==c)){
            cout << "equilateral traiangle";
        }else if ((a!=b) && (b!=c) && (a!=c)){
            cout << "scalene traiangle";
        }else if((a==b) || (a==c) || (b==c)){
            cout << "isosceles triangle";
        } 
    }
    else{
        cout<<a<<","<<b<<","<<c<<"cannot be the sides of a triangle";
    }
}