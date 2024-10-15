/*In a program, input 3 nubers: A, B and C.You have to output the average of these 3 numbers. */
import java.util.Scanner;
public class Assignment5_1 {
    public static void main (String args[]){
        Scanner sc =new Scanner(System.in);
        System.out.println("Enter value of A:");
        float A=sc.nextInt();
        System.out.println("Enter value of B:");
        float B=sc.nextInt();
        System.out.println("Enter value of C:");
        float C=sc.nextInt();
        float avg = (A+B+C)/3;
        System.out.println(avg);
    } 
}
