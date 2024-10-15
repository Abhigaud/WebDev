/*1. Count the number of elements strictly greater than x.
*/
#include<iostream>
#include<vector>
using namespace std;
void display(vector<int>& v){
    for(int i =0; i<v.size(); i++){
        cout << v[i]<<" ";
    }
}
void numberGreaterThanX(vector<int>& v, int x){
    int count = 0;
    for(int i = 0; i<v.size(); i++){
        if(x < v[i]){
            count++;
        }
    }
    cout <<"number greater then x : "<< count;
}
int main(){
    vector<int> v;
    v.push_back(3);
    v.push_back(6);
    v.push_back(7);
    v.push_back(8);
    v.push_back(5);
    v.push_back(4);

    numberGreaterThanX(v, 4);
}