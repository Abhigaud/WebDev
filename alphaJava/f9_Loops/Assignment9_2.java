import java.util.Scanner;
public class Assignment9_2 {
    public static void main(String args[]){
        Scanner sc = new Scanner (System.in);

        int Number;
        int choice;

        int evenSum = 0;
        int oddSum = 0;

        do{
            System.out.println("Enter the Number : ");
            Number =sc.nextInt();

            if(Number % 2 ==0){
                evenSum += Number;
            }else{
                oddSum += Number;
            }

            System.out.println("Press 1for continue 0 for quit");
            choice =sc.nextInt();
    
        }while(choice == 1);

        System.out.println("Sum of Even numbers : "+evenSum);
        System.out.println("Sum of odd numbers : "+oddSum);
    } 
}
