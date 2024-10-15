//----leetcode 88---
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;
void display(vector<int>& nums1){
    for(int i=0; i<nums1.size(); i++){
        cout<<nums1[i]<<" ";
    }
    cout << endl;
}
 void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int i = m-1;
        int j = n-1;
        int k = m+n-1;
        while(i>=0 && j>=0){
            if(nums1[i] > nums2[j]){
                nums1[k] = nums1[i];
                i--;
                k--;
            }else{
                nums1[k] = nums2[j];
                j--;
                k--;
            }
        }
        while(j>=0){
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }
int main(){
    vector<int> nums1 = {1,2,3,0,0,0};
    vector<int> nums2 = {2,5,6};

    int m = 3;
    int n = 3;

    display(nums1);
    display(nums2);
    merge(nums1, m, nums2, n);
    display(nums1);
}