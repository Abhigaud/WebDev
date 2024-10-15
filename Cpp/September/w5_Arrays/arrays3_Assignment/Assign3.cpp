/* 3)Find the first non-repeating element in the array .*/
#include<iostream>
#include<vector>
using namespace std;
void firstNonRepeat(vector<int>& v){
    int n = v.size();
    int num;
    bool flag = false;
    for(int i= 0; i<n; i++){
        int j;
        for(j = 0; j<n; j++){
            if(v[i]==v[j] && i != j){
                break;
            }
        }
        if( j == n){
            cout << v[i]<<" is the first non- repeating element. "<< endl;
            flag = true;
            break;
        }
    }
    if(!flag){
        cout<<"There is non- repeating element in the array."<<endl;
    }
}
int main(){
    vector<int> v = {2,5,3,3,4,5,2};
    firstNonRepeat(v);
}