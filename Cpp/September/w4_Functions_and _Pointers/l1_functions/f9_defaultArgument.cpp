#include <iostream>
using namespace std;
void fun(int x =7, int y = 8){//x and y has default values
    cout<<x<<" "<<y<<endl;
}
int main(){
    fun();
    fun(5,6);
    fun(2);
}