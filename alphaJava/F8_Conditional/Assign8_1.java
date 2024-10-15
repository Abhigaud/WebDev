/*
Question1: Write a Java program to get a number from the user and print whether it is positive or negative
 */
import java.util.*;
public class Assign8_1{
    public static void main(String args[]){
        Scanner sc= new Scanner (System.in);
        System.out.println("Enter number : ");
        int x = sc.nextInt();
        if(x > 0){
            System.out.println("Positive");
        }else{
            System.out.println("Negetive");
        }
    }
}