#include <iostream>
using namespace std;
int main(){
    int n = 11;
    int sum=0;
    // for(int i=1; i<=n; i++){
    //     if( i % 2 == 0){
    //         sum -= i;
    //     }else{
    //         sum += i;
    //     }
    // }
    // cout<<sum;


    if(n % 2 == 0)sum = -n/2;
    else sum = -n/2 +n;
    cout<<sum;
}