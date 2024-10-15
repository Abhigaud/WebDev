public class file6 {
    public static int  factorial(int n){
        int f =1;
        for(int i =1; i<=n; i++){
            f*=i;
        }
        return f;
    }
    public static int binCoeff(int n, int r){

        int fact_n = factorial(n);
        int fact_r = factorial(r);
        int fact_nmr = factorial(n-r);

        int binCoeff = fact_n /(fact_r *fact_nmr);
        return binCoeff;
    }
    public static void main(String args[]){
        int n = 5;
        int r =2 ;
        System.out.println(binCoeff(n, r));
    }
    
}
