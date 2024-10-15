#include <iostream>
using namespace std;
int main(){
    int n;
    cout<<"enter value of n : ";
    cin >> n;
    for (int i = 1; i <= 2*n-1; i = i+2)
    {
        cout << i <<" ";
    }
    
}
// AP formula-- 
// 4,7,10,13,17
/*
a = 4 \\here a is starting number
d = 3 //here d is common difference

an =  a + (n-1) d
    = 4 + (n-1)3
    = 4 + 3n -3
    = 3n + 1
*/