#include<iostream>
using namespace std;
int main(){
    int n;
    cout<<"enter no. of students : ";
    cin >> n;
    int marks[n] ;

    // input
    cout<<"Enter marks of students : ";
    for(int i =0; i<n; i++ ){
        cin >> marks[i];
    }

    for(int i =0; i<n; i++ ){
        if(marks[i] < 35){
            cout<<i<<" ";
        }
    }
}