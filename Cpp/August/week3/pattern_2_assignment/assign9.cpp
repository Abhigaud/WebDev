/*
     *
    ***
   * * *
  *  *  *
 *   *   *
***********
 *   *   *
  *  *  *
   * * *
    ***
     *
*/
#include <iostream> 
using namespace std;
int main(){
    int n = 5;
    for(int i=1; i<=n;i++ ){
        for(int j =1; j<=n; j++){
            if( i+j == n+1) cout <<" *";
            else if (j == n || i==n) cout<<" *";
            else cout << "  ";   
        }
        for(int j = 1; j<=n-1; j++){
            if( j == i-1 || i==n) cout <<" *";
            else cout << "  ";
        }
        cout << endl;
    }
    n--;
    for(int i=1; i<=n; i++ ){
        cout << "  ";
        for(int j = 1; j<=n; j++){
            if( j ==  i) cout <<" *";
            else if(j==n) cout<<" *";
            else cout << "  ";
        }
        for(int j =1; j<=n-1; j++){
            if( i+j == n) cout <<" *";
            else cout << "  ";   
        }
        cout << endl;
    }
}