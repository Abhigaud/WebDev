#include <iostream>
#include <climits>
using namespace std;
int main(){
    int arr[5] = { 1, 2, 4, 4 ,5};
    bool flag = false;

    for(int i = 0; i < 5; i++){
        for(int j = i+1; j < 5; j++){
            if(arr[i] == arr[j]){
                flag = true;
                cout << arr[i];
                break;
            }
        }   
    }
    if(flag == false){
        cout << "No duplicate " << endl;
        return 0;
    }
}