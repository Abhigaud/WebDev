import java.util.Scanner;
public class Assignment9_3 {
    public static void main(String args[]){
        int factorial = 1;
        Scanner sc = new Scanner (System.in);
        System.out.println("Enter the value of n :");
        int n = sc.nextInt();
        for( int i = 1; i<=n; i++ ){
            factorial*=i;

        }
        System.out.println(factorial);
    }    
}
