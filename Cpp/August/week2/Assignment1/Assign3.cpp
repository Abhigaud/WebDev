/*3. Any year is input through the keyboard. Write a program to determine whether the year is a leap year or not. (Considering leap year occurs after every 4 years)*/
#include <iostream>
using namespace std;
int main(){
    int year ;
    cout << "Enter Year : ";
    cin >> year;

    if(year % 4 == 0 ){
        cout << "Leap year";
    }else{
        cout << "not a Leap year";
    }
}