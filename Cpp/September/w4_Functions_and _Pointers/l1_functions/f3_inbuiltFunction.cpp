#include <iostream>
#include <cmath>
using namespace std;
int mini(int x, int y){
    int a;
    if(x<y) a =x;
    else a =y;
    return a;
}
int main(){
    int x, y;
    cin>> x >> y;
    cout<< mini(x,y)<<endl;
    cout<< min(5,6)<<endl;
    cout<< max(4,5)<<endl;
    cout<< sqrt(4)<<endl;
}