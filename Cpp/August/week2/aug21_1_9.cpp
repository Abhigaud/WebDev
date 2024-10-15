/*Ques : Write a program to check whether a character is an alphabet or not.*/
#include <iostream>
using  namespace std;
int main(){
    char ch ;
    cout <<"enter a character: ";
    cin >> ch;
    if((ch >= 97 && ch <= 122) || (ch >= 65 && ch <= 90) ){
        cout << "character is alphabet";
    }else{
        cout<< "not a alphabet";
    }
}