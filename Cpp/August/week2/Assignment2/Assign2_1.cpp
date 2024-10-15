/*(1)
Write a program to count the minimum number of notes in a given amount using the switch statement.
Input 1: 510
Output1 : notes of “500” = 1 and notes of “10” = 1*/
#include <iostream>
using namespace std;
int main(){
    int amount;
    int n1, n2, n5, n10, n20, n50, n100, n200, n500;
    n1 = n2 = n5 = n10 = n20 = n50 = n100 = n200 = n500 = 0;
    cout << "Please enter amount : ";
    cin >> amount;

    switch (amount >= 500)
    {
    case 1:
        n500 = amount/500;
        amount = amount - n500 * 500;
        break;
    } 
    switch (amount >= 200)
    {
    case 1:
        n200 = amount/200;
        amount = amount - n200 * 200;
        break;
    } 
    switch (amount >= 100)
    {
    case 1:
        n100 = amount/100;
        amount = amount - n100 * 100;
        break;
    } 
    switch (amount >= 50)
    {
    case 1:
        n50 = amount/50;
        amount = amount - n50 * 50;
        break;
    } 
    switch (amount >= 20)
    {
    case 1:
        n20 = amount/20;
        amount = amount - n20 * 20;
        break;
    } 
    switch (amount >= 10)
    {
    case 1:
        n10 = amount/10;
        amount = amount - n10 * 10;
        break;
    } 
    switch (amount >= 5)
    {
    case 1:
        n5 = amount/5;
        amount = amount - n5 * 5;
        break;
    }      
    switch (amount >= 2)
    {
    case 1:
        n2 = amount/2;
        amount = amount - n2 * 2;
        break;
    }  
    switch (amount >= 1)
    {
    case 1:
        n1 = amount/1;
        amount = amount - n1 * 1;
        break;
    } 

    cout << "Rs. 500 = " << n500 << endl;
    cout << "Rs. 200 = " << n200 << endl;
    cout << "Rs. 100 = " << n100 << endl;
    cout << "Rs. 50 = " << n50 << endl;
    cout << "Rs. 20 = " << n20 << endl;
    cout << "Rs. 10 = " << n10 << endl;
    cout << "Rs. 5 = " << n5 << endl;
    cout << "Rs. 2 = " << n2 << endl;
    cout << "Rs. 1 = " << n1 << endl;
        
}

