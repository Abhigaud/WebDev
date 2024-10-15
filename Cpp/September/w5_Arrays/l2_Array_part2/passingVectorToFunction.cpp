// #include<iostream>
// #include<vector>
// using namespace std;
// void change(vector<int> a){
//     a[0] =100;
//     for(int i = 0; i < a.size(); i++){
//         cout << a[i]<<" ";
//     }
//     cout << endl;
// }
// int main(){
//     vector<int> v;
//     v.push_back(9);
//     v.push_back(10);
//     v.push_back(6);
//     v.push_back(1);
//     int arr[4] ={9, 10, 6, 1};
//     for(int i = 0; i < v.size(); i++){
//         cout << v[i]<<" ";
//     }
//     cout<<endl;
//     change(v);
//     for(int i = 0; i < v.size(); i++){
//         cout << v[i]<<" ";
//     }
// }
// // vectors are passed by value : each time you pass, new vector is created.

// ---------------------------------------------------
// pass by reference
#include<iostream>
#include<vector>
using namespace std;
void change(vector<int>& a){
    a[0] =100;
}
int main(){
    vector<int> v;
    v.push_back(9);
    v.push_back(10);
    v.push_back(6);
    v.push_back(1);
    int arr[4] ={9, 10, 6, 1};
    for(int i = 0; i < v.size(); i++){
        cout << v[i]<<" ";
    }
    cout<<endl;
    change(v);
    for(int i = 0; i < v.size(); i++){
        cout << v[i]<<" ";
    }
}
// vectors are passed by value : each time you pass, new vector is created.