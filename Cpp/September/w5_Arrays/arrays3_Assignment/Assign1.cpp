/* 1) Count the number of triplets whose sum is equal to the given value x. */
#include<iostream>
#include<vector>
using namespace std;
void triplets(vector<int>& v, int x){
    int n = v.size();
    for(int i = 0; i<n; i++){
        for(int j= i+1; j<n; j++){
            for(int k = j+1; k <n; k++){
                if(v[i]+v[j]+v[k]==x){
                    cout<<"index are "<<i<<","<<j<<","<<k<<endl; 
                }
            }
        }
    }
}
int main(){
    vector<int> v={2,1,4,5,2,6,3};
    triplets(v,6);
}