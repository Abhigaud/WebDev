#include<iostream>
#include<vector>
using namespace std;
void display(vector<int>& v){
    for(int i =0; i<v.size(); i++){
        cout << v[i] <<" ";
    }    
    cout << endl;
}
int trap(vector<int>& height) {
        int n = height.size();
        //prev greatest element array
        int prev[n];
        prev[0] =-1;
        int max = height[0];
        for(int i =1; i<n ; i++){
            prev[i] = max;
            if(max < height[i]){
                max = height[i];
            }
        }
        //next greatest element array
        int next[n];
        next[n-1] = -1;
        max = height[n-1];
        for(int i = n-2; i>=0; i--){
            next[i] = max;
            if(max < height[i]){
                max = height[i];
            }
        }
        // minimum array
        int mini[n];
        for(int i =0; i<n; i++){
            mini[i] = min(prev[i], next[i]);
        }
        //calculating water
        int water = 0;
        for(int i =1; i<n-1; i++){
            if(height[i] < mini[i]){
                water += (mini[i]-height[i]);
            }
        }
        return water;
    }
//optimised approach
    // int trap(vector<int>& height) {
    //     int n = height.size();
    //     //prev greatest element array
    //     int prev[n];
    //     prev[0] =-1;
    //     int max = height[0];
    //     for(int i =1; i<n ; i++){
    //         prev[i] = max;
    //         if(max < height[i]){
    //             max = height[i];
    //         }
    //     }
    //     //next greatest element array
    //     int next[n];
    //     next[n-1] = -1;
    //     max = height[n-1];
    //     for(int i = n-2; i>=0; i--){
    //         next[i] = max;
    //         if(max < height[i]){
    //             max = height[i];
    //         }
    //     }
    //     // minimum array => prev as minimum
    //     for(int i =0; i<n; i++){
    //         prev[i] = min(prev[i], next[i]);
    //     }
    //     //calculating water
    //     int water = 0;
    //     for(int i =1; i<n-1; i++){
    //         if(height[i] <prev[i]){
    //             water += (prev[i]-height[i]);
    //         }
    //     }
    //     return water;
    // }
int main(){
    vector<int> height = {4,2,0,3,2,5};
    cout << trap(height);

}
