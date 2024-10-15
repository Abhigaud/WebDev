#include<iostream>
using namespace std;
int factorial(int n){
    int facto =1;
    for(int i=1; i<=n; i++){
        facto *=i;
    }
    return facto;
}
int combination(int n, int r){
    int ncr = factorial(n)/(factorial(r)*factorial(n-r));
    return ncr;
}

int permutation(int n, int r){
    int npr = factorial(n)/ factorial(n-r);
    return npr;

}
int main(){
    int n;
    cout<<"Enter n : ";
    cin>>n;
    int r;
    cout<<"Enter r : ";
    cin>>r;

    cout << combination(n,r)<<endl;
    cout << permutation(n,r)<<endl;
    
}