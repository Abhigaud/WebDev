// #include <iostream>
// using namespace std;
// int main(){
//     int n = 4;
//     int a =1;
//     for(int i = 1; i<=n; i++){
//         for(int j = 1; j<=i; j++){
//             if(a % 2 == 0){
//                 cout<<" 0";
//             }else{
//                 cout<<" 1";
//             }
//             a++;
//         }
//         cout << endl;
//     }
// }

// --------------------
#include <iostream>
using namespace std;
int main(){
    int n = 4;
    
    for(int i = 1; i<=n; i++){
        for(int j = 1; j<=i; j++){
            if((i+j) % 2 == 0){
                cout<<" 1";
            }else{
                cout<<" 0";
            }
        }
        cout << endl;
    }
}