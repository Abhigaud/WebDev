/*6. If the marks of A, B and C are input through the keyboard, write a program to determine the student scoring the least marks.*/
#include <iostream>
using namespace std;
int main(){
    int a, b, c;
    cout << "Enter first students marks ";
    cin >> a;
    cout << "Enter second students marks ";
    cin >> b;
    cout << "Enter third students marks ";
    cin >> c;

    if(a<b && a<c){
        cout<< a << " has the least marks";
    }else if(b<c && b<a){
        cout<< b << " has the least marks";
    }else{
        cout<< c << " has the least marks";
    }
}