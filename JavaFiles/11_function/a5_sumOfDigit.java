import java.util.*;
public class a5_sumOfDigit{
    public static int sumOfDigit(int n){
        int sum = 0;
        while (n > 0) {
            int ld = n % 10;
            sum += ld;
            n = n/10;
        }
        return sum;
    }
    public static void main(String[] args) {
        System.out.println(sumOfDigit(1234));
    }
}