public class f5_binomialCoff {

    public static int factorialOfN(int n){
        int factorial = 1;
        for (int i = 1; i <=n ; i++) {
            factorial *= i;
        }
        return factorial;
    }
    public static int binCoff(int n, int r){
        int fac_n = factorialOfN(n);
        int fac_r = factorialOfN(r);
        int fac_nmr = factorialOfN(n-r);

        int binCoff = fac_n / (fac_r * fac_nmr);
        return binCoff;
    }
    public static void main(String[] args) {
        int n = 5, r = 2;
        System.out.println(binCoff(n, r));
    }
    
}
