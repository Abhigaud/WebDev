#include <iostream>
using namespace std;
int main(){
    int n = 17;
    bool flag = false;
    for(int i=2; i<n ; i++){
        if(n % i == 0){
            flag = true;
            break;
        }
    }

    if(flag == true){
        cout<<"It is a composite number";
    }else{
        cout << "It is a prime number";
    }

}