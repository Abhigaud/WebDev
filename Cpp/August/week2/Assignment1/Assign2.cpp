/*Ques 2: Given the radius of the circle predict whether numerically area of this circle is larger than the circumference or not.*/
#include <iostream>
using namespace std;
int main(){
    float radius =4;
    float pi =3.14;
    float cirumference = 2*pi*radius;
    float area = pi*radius*radius;
    if(area > cirumference ){
        cout << "area is greater than circumference";
    }else{
                cout << "circumference is greater than area";
    }
}