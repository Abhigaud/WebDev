import java.util.Scanner;

public class F6input {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // For a word input
        System.out.println("enter a word");
        String input = sc.next();
        System.out.println(input);
        
        // For a line/ string input
        Scanner scn = new Scanner(System.in);
        System.out.println("enter a String");
        String fullName = scn.nextLine();
        System.out.println(fullName);
    }    
}
