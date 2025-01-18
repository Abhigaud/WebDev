import java.util.*;
public class f2_sumOfFirstN {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int range = sc.nextInt();
        int i = 1;
        int sum = 0;

        while (i <= range) {
            sum += i;
            i++;
        }
        System.out.println(sum);
    }        
}
