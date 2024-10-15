#include <iostream>
using namespace std;
int main(){
    // int x = 4;
    // int* p =&x;
    
    // char x = 'a';
    // char* p =&x;
    
    // bool x = true;
    // bool* p =&x;

    // cout<<&x <<endl;
    // cout<<p;

// -----------------------------------
//dereference

    int x =122;
    int* p = &x;
    cout << *p <<endl;
    cout << x <<endl;
    *p =6;
    cout<<x;



}