//Q3: Given two numbers a and b, write a function to print all odd numbers between them.
#include <iostream>
using namespace std;
bool isOdd(int n){
    if(n % 2 != 0){
        return true;
    }
    return false;
}
void OddInRange(int a, int b){
    for(int i = a; i<=b; i++){
        if(isOdd(i)){
            cout << i <<endl;
        }
    }
}
int main(){
    int a, b;
    cout<<"enter starting number : ";
    cin >> a;
    cout << "enter ending index : ";
    cin >> b;
    OddInRange(a, b);
}