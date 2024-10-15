/*Ques : Take positive integer input and tell if it is divisible by 5 or not.*/
#include <iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
    if(n % 5==0){
        cout<<"divisible";
    }else{
        cout<<"not divisible";
    }
}