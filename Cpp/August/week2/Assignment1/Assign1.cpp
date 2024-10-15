/*Ques : Take 2 integers input and print the greatest of them.*/
#include <iostream>
using namespace std;
int main(){
    int a, b;
    cout << "Enter first number : ";
    cin >> a;
    cout << "Enter second number : ";
    cin >> b;

    if(a > b)
        cout << a<<" is greatest";
    else
    cout << b<<" is greatest";
}