#include <iostream>
using namespace std;
int square(int num){
    return num*num;
}
int firstNSquares(int n){
    for(int i=1; i<=n; i++){
        cout<< square(i)<<endl;
    }
} 

int main(){
    firstNSquares(14);
}