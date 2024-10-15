// Ques : Take positive integer input and tell if it is divisible by 5 and 3.
#include <iostream>
using namespace std;
int main(){
    int n;
    cin >> n;
    if(n % 5 == 0){
        if(n % 3 == 0){
            cout<<"number is divisible by 5 and 3";
        }else{
            cout<<"not matching condition";
        }
    }else{
        cout << "number is not divisible ";
    }
}