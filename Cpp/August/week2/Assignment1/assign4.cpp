/*4. Given the length and breadth of a rectangle, write a program to find whether numerically the area of the rectangle is greater than its perimeter.*/
#include <iostream>
using namespace std;
int main(){
    int length = 5;
    int breadth = 7;

    int area = length * breadth;
    int perimeter = 2 * (length + breadth);

    if(area > perimeter){
        cout << "area is greater than perimeter";
    }else{
        cout << "Perimeter is greater than area";
    }
}