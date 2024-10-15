#include<iostream>
#include<vector>
using namespace std;
int main(){
    // vector<int> v(5,7);//initial size = 5, each element has value 7
    // cout<<v.size()<<endl;
    // cout<<v.capacity()<<endl;
    // cout<<v[2];


    vector<int> v(5);
    for (int i = 0; i < 5; i++)
    {
        cin >> v[i];
    }
    for (int i = 0; i < 5; i++)
    {
        cout<< v[i]<<" ";
    }
    
}