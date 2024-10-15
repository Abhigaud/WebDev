// 8. Print first ‘n’ fibonacci numbers.
#include <iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter value of n : ";
    cin >> n;
    int a1 = 1, a2 = 1;
    int sum =0;
    for(int i= 1; i <= n; i++){
        cout << a1 <<" ";
        sum = a1 + a2;
        a1 = a2;
        a2 = sum;
    }
}
