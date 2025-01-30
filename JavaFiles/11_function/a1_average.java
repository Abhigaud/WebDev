import java.util.*;
public class a1_average {
    public static int average(int a, int b, int c) {
        int average = (a+b+c)/3;
        return average;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter value of a");
        int a = sc.nextInt();
        System.out.println("Enter value of b");
        int b = sc.nextInt();
        System.out.println("Enter value of c");
        int c = sc.nextInt();
        
        System.out.println("Average of "+a +", "+ b +", "+ c + " = "+ average(a, b, c));
    }
}
