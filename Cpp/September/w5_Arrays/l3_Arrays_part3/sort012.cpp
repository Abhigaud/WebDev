// #include<iostream>
// #include<vector>
// using namespace std;
// void display(vector<int>& v){
//     for(int i =0; i<v.size(); i++){
//         cout << v[i] <<" ";
//     }    
//     cout << endl;
// }
// void sortColors(vector<int>& nums){
//     int n = nums.size();
//     int numberOfZeros =0;
//     int numberOfOnes =0;
//     int numberOfTwo =0;
//     for(int i =0; i<n; i++){
//         if(nums[i] == 0) numberOfZeros++;
//         else if (nums[i] ==1) numberOfOnes++;
//         else numberOfTwo++;
//     }
//     // fill
//     for(int i =0; i<n; i++){
//         if(i <numberOfZeros) nums[i] =0;
//         else if(i<(numberOfZeros + numberOfOnes)) nums[i] =1;
//         else nums[i] = 2;
//     }
//     return;
// }
// int main(){
//     vector<int> nums;
//     //[2,0,2,1,1,0]
//     nums.push_back(2);
//     nums.push_back(0);
//     nums.push_back(2);
//     nums.push_back(1);
//     nums.push_back(1);
//     nums.push_back(0);
//     display(nums);
//     sortColors(nums);
//     display(nums);
// }

// ------------------------------------------
#include<iostream>
#include<vector>
using namespace std;
void display(vector<int>& v){
    int n = v.size();
    for(int i=0; i<n; i++){
        cout<<v[i]<<" ";
    }
    cout << endl;
}
void sort012(vector<int>& v){
    int n = v.size();
    int i =0; 
    int j = 0;
    int k =n-1;
    while (j<=k){
        if(v[j] == 0){
            int temp = v[i];
            v[i] = v[j];
            v[j] = temp;
            i++;
            j++;
        }else if(v[j] ==1){
            j++;
        }else if ( v[j]==2){
            int temp = v[j];
            v[j] = v[k];
            v[k] = temp;
            k--;
        }
    }
}
int main(){
    vector<int> v;
    v.push_back(2);
    v.push_back(0);
    v.push_back(2);
    v.push_back(1);
    v.push_back(1);
    v.push_back(0);
    display(v);
    sort012(v);
    display(v);
}
