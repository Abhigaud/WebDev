import java.util.*;
public class f1_file {
    public static void printHello(){
        System.out.println("hello World");
    }

    public static int calculateSum(int a, int b){
        int sum = a + b;
        return sum;
    }
    public static void main(String[] args) {
        // printHello();
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt(); 
        int b = sc.nextInt();
        int sum = calculateSum(a, b); 
        System.out.println("sum = "+ sum);
    }    

}
