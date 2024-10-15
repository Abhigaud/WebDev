/* 4) Move all zeros to the end of the array.*/
#include<iostream>
#include<vector>
using namespace std;
void ZeroAtEnd(vector<int>& v){
    int n = v.size();
    int j =0;
    for(int i =0; i<n; i++){
        if(v[i] != 0){
            swap(v[i], v[j]);
            j++;
        }
    }
}
void display(vector<int>& v){
    //changed array
    int n = v.size();
    cout << "the desired output is : "<< endl;
    for(int i =0; i<n; i++){
        cout<<v[i]<<" ";
    }
}
int main(){
    vector<int> v ={4,0,6,0,7,8};
    ZeroAtEnd(v);
    display(v);
}