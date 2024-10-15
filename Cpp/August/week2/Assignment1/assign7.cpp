/*7. Given a point (x, y), write a program to find out if it lies on the x-axis, y-axis or at the origin, viz. (0, 0).
*/
#include <iostream>
using namespace std;
int main(){
    int x = 2;
    int y = 0;

    if(x==0 && y==0){
        cout << "point lies on Origin";
    }else if(x != 0 && y==0){
        cout << "point lies on X- axis";
    }else if(x==0 && y!=0){
        cout << "point lies on Y-axis";
    }else{
        cout << "point lies on plane";
    }
}