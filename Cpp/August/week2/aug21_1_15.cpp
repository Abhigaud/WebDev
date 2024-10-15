// Ques : Take 3 numbers input and tell if they can be the sides of a triangle.
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
        cout<<a<<","<<b<<","<<c<<"can be the sides of a triangle";
    }
    else{
        cout<<a<<","<<b<<","<<c<<"cannot be the sides of a triangle";
    }
}