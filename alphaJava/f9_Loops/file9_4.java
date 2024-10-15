import java.util.*;
public class file9_4 {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int sum=0;
        System.out.println("Enter value of n : ");
        int n = sc.nextInt();
        int i=0;
        while(i<=n){
            sum+=i;
            i++;
        } 
        System.out.println("Sum = "+sum);
    }
}
