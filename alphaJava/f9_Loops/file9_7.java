public class file9_7 {
    public static void main(String args[]){
        int n=10899;
        
        int num=1;
        while(n>0){
            int lastDigit=n % 10;
            System.out.print(lastDigit+"");
            n = n / 10;
            
        }
    }
}
