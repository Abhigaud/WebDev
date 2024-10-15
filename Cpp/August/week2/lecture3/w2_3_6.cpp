/*
Ques : Display this AP - 100,97,94,..upto all terms which are positive.
*/
#include <iostream>
using namespace std;
int main(){
// 100 , 97, 94, .....7, 4, 1 -> 34 term
    
    for(int i=100; i>0 ;i= i-3){
        cout <<i <<endl;
    }
}