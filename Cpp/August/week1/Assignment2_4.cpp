/*
4. WAP for finding the volume of the cylinder by taking radius and height as input.
*/
#include <iostream>
using namespace std;
int main(){
    float pi=3.14, radius, height;
    cout<<"Enter radius of cylinder : ";
    cin >> radius;
    cout<<"Enter height of Cylinder : ";
    cin >> height;
    float volume =pi * radius * radius * height;
    cout<<" Volume of Cylinder : "<<volume;
}