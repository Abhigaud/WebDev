// 7. Print the factorials of first ‘n’ numbers
#include <iostream>
using namespace std;
int main(){
    int n ;
    cout << "Enter value of n : ";
    cin >> n;
    int fac =1;
    for(int i=1; i<=n ; i++){
        fac = fac * i;
        cout << fac <<endl;
    }
}