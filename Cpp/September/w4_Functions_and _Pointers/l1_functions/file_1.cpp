#include <iostream> 
using namespace std;
void starTraingle(int x){
    for(int i=1; i<=x; i++){
        for (int j = 1; j<= i; j++)
        {
            cout<< "*";
        }
        cout<<endl;
    }
}

int main(){
    starTraingle(6);
}