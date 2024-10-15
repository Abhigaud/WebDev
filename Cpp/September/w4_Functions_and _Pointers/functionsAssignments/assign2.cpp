// Write a function to take the radius of a circle as an argument and return its area.
#include <iostream>
using namespace std;
float area(float r){
    return 3.14*r*r;
}
int main(){
    float r;
    cout<<"enter radius of circle : ";
    cin>>r;
    cout<< area(r);
}