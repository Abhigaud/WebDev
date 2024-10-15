/* only work for positive numbers */
// #include<iostream>
// using namespace std;
// int main(){
//     int arr[] ={1, 2, 4, 7, 9};
//     int n = sizeof(arr)/4;
//     bool flag = false;
//     for(int i = 0 ; i<n; i++){
//         if(arr[i] != i+1){
//             flag = true;
//             cout << i+1;
//             break;
//         }
//     }
//     if(flag == false){
//         cout << "there was no missing element";
//     }
// }

/* works for positive negetive both */
#include<iostream>
using namespace std;
int main(){
    int arr[] ={-8, -2, 0, 1, 2, 4, 5};
    int n = sizeof(arr)/4;
    bool flag = false;
    int x =1; 
    for(int i = 0 ; i<n; i++){
        if(arr[i]<=0) continue;
        if(x != arr[i]){
            cout << x;
            flag = true;
            break;
        }else{
            x++;
        }
    }
    if(flag == false){
        cout << "there was no missing element";
    }
}