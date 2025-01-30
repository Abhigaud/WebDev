import java.util.*;
public class a3_pelindrome {
    public static void main(String[] args) {
        System.out.println("Please eneter a number:  ");
        Scanner sc =  new Scanner(System.in);
        int palindrome = sc.nextInt();

        if (isPalindrome(palindrome)) {
            System.out.println("number : " + palindrome + " is a palindrome");
        }else{
            System.out.println("number : " + palindrome + "is not a palindrome");

        }
    }

    public static boolean isPalindrome(int number) {
        int palindrome = number;
        int reverse = 0;
        while (palindrome != 0) {
            int rem = palindrome % 10;
            reverse = reverse * 10 +rem;
            palindrome = palindrome /10;
        }

        if (number == reverse) {
            return true;
        }
        return false;
    }
}
