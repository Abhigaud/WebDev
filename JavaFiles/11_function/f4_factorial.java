public class f4_factorial {
    public static int factorialOfN(int n){
        int factorial = 1;
        for (int i = 1; i <=n ; i++) {
            factorial *= i;
        }
        return factorial;
    }
    public static void main(String[] args) {
        System.out.println(factorialOfN(5));
    }
    
}
