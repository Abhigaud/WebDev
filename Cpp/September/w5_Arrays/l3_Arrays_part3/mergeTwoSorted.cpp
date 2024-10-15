// #include<iostream>
// #include<vector>
// using namespace std;
// void display(vector<int>& v){
//     for(int i =0; i<v.size(); i++){
//         cout << v[i] <<" ";
//     }    
//     cout << endl;
// }
// vector<int> merge(vector<int>& arr1, vector<int>& arr2){
//    int n = arr1.size();
//    int m = arr2.size();
//    vector<int> res(m+n);
//    int i, j, k;
//    i = j = k = 0;
//    while( i<n && j<m){
//         if(arr1[i] < arr2[j]){
//         res[k] = arr1[i];
//         i++;
//         k++;
//         }
//         else{
//         res[k] = arr2[j];
//         j++;
//         k++;
//         }
//     }
//     if(i == n){
//         while(j<m){
//             res[k] =arr2[j];
//             k++;
//             j++;
//         }
//     }
//     if(j == m){
//         while(i<n){
//             res[k] =arr1[i];
//             k++;
//             i++;
//         }
//     }
//     return res;
// }
// int main(){
//     vector<int> arr1;
//     vector<int> arr2;
//     arr1.push_back(1);
//     arr1.push_back(4);
//     arr1.push_back(5);
//     arr1.push_back(8);
    
//     arr2.push_back(2);
//     arr2.push_back(3);
//     arr2.push_back(6);
//     arr2.push_back(7);
//     arr2.push_back(10);
//     arr2.push_back(12);
//     display(arr1);
//     display(arr2);
    
//     vector<int> res = merge(arr1, arr2);
//     display(res);
// }

//---------------------------------------------------------------
// #include<iostream>
// #include<vector>
// #include<algorithm>
// using namespace std;
// void display(vector<int>& v){
//     int n = v.size();
//     for(int i=0; i<n; i++){
//         cout<<v[i]<<" ";
//     }
//     cout << endl;
// }
// vector<int> mergeV(vector<int>& arr1, int n, vector<int>& arr2, int m){
//     vector<int> res(n+m);
//     int i =0; 
//     int j =0; 
//     int k =0; 
//     while(i<n && j<m){
//         if(arr1[i] <arr2[j]){
//             res[k] = arr1[i];
//             i++;
//         }else{
//             res[k] = arr2[j];
//             j++;            
//         }
//         k++;
//     }
//     //for remaining
//     if(i == n){//arr1 ke saare elements utha chuka hu
//         while (j<m){
//             res[k] = arr2[j];
//             k++;
//             j++;
//         }
//     }
//     if( j == m){//arr2 ke saare elements utha chuka hu 
//         while (i<n){
//             res[k] = arr1[i];
//             k++;
//             i++;
//         }
        
//     }
//     return res;
// }
// int main(){
//     vector<int> arr1;
//     arr1.push_back(1);
//     arr1.push_back(4);
//     arr1.push_back(5);
//     arr1.push_back(8);
//     int n = arr1.size();

//     vector<int> arr2;
//     arr2.push_back(2);
//     arr2.push_back(3);
//     arr2.push_back(6);
//     arr2.push_back(7);
//     arr2.push_back(10);
//     arr2.push_back(12);
//     int m = arr2.size();

//     display(arr1);
//     display(arr2);

//     vector<int> res = mergeV(arr1, n, arr2, m);
//     display(res);
// }



