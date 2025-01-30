import java.util.Scanner;

public class a2_fever {
     public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter temperature of body: ");
        double temp = sc.nextDouble();
        if (temp > 100) {
            System.out.println("You have a fever");
        } else {
            System.out.println("You don't have a fever");
        }
    }   
}
