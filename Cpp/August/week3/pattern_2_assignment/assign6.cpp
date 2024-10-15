// #include <iostream>
// using namespace std;
// int main(){
//     int n = 5;
//     for(int i =1; i<=n; i++){
//         // spaces
//         for(int j = 1; j<i; j++ ){
//             cout<<"  ";
//         }
//         cout << " *";
//         for(int j = 1; j<= 2*(n-i)-1; j++){
//             cout<<"  ";
//         }
//         cout << endl;
//     }
//     for(int i = 0; i<n-1; i++){
//         cout << "*";
//     }
// }


#include <iostream>
using namespace std;
int main(){
    int n =5; 
    for(int i=1; i <=n; i++){
        for(int j=1; j<=n; j++){
            if( i == j) cout << " *";
            else cout<<"  ";
        }
        for(int j=1; j<=n-1; j++){
            if( i+j == n) cout << " *";
            else cout<<"  ";
        }
        

        cout << endl;
    }
}

