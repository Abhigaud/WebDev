//Display this AP - 4,7,10,13,16.. upto ‘n’ terms.
#include <iostream>
using namespace std;
int main(){
    // = 4 + (n-1)3
    // = 3n+1
    int n=5;
    int a =4;
    for (int i=1; i<=n; i++ ){
        cout<< a <<endl;
        a+=3;
    }
}