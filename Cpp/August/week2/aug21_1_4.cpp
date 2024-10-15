/*
Ques : If cost price and selling price of an item is input through the keyboard, write a program to determine whether the seller has made profit or incurred loss. Also determine how much profit he made or loss he incurred.*/
#include <iostream>
using namespace std;
int main(){
    int costPrice ;
    int sellingPrice ;
    cout<< "Enter Cost price : " ;
    cin >> costPrice;
    cout << "Enter Selling Price : " ;
    cin >> sellingPrice;

    if(costPrice > sellingPrice){
        cout << "loss = "<< costPrice - sellingPrice ;
    }else{
        cout << "profit = "<<sellingPrice - costPrice ;
    }
}