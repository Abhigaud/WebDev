import java.util.Scanner;

public class f6_calculator {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        char operator = sc.next().charAt(0);
        int b = sc.nextInt();

        switch (operator) {
            case '+':
                System.out.println(a+b);
                break;
                
            case '-':
                System.out.println(a-b);
                break;
                
            case '*':
                System.out.println(a*b);
                break;
                
            case '/':
                System.out.println(a/b);
                break;

            case '%':
                System.out.println(a%b);
                break;
                
            default:
                System.out.println("wrong operator");
                break;
        }
    }    
}
