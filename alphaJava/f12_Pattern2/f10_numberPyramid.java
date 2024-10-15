public class f10_numberPyramid {
    public static void numberPyramid(int n){
        for(int i=1; i<=n; i++){
            // Spaces
            for(int j =1; j<=n-i; j++){
                System.out.print(" ");
            }
            // numbers
            for(int j =1; j<=2*i-1; j++){
                if(j%2==0){
                    System.out.print(" ");
                }else{
                    System.out.print(i);
                }
            }
            System.out.println();
        }
    }
    public static void main(String args[]){
        numberPyramid(5);
    }
}
