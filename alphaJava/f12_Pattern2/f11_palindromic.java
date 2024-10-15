public class f11_palindromic {
    public static void numberPyramid(int n){
        for(int i=1; i<=n; i++){
            // Spaces
            for(int j =1; j<=n-i; j++){
                System.out.print("  ");
            }
            // numbers
            for(int j = i; j >= 1; j--){
               System.out.print(j+" ");
            }
            for(int j =2; j<=i; j++){
                System.out.print(j+" ");
            }
            System.out.println();
        }
    }
    public static void main(String args[]){
        numberPyramid(5);
    }    
}
