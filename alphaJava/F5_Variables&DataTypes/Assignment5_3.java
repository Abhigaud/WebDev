/*Enter cost of three items from the user(using float data type)- a pencil, a pen and an eraser. You have to output the total cost of the items back to the user as their bill.
 */
import java.util.Scanner;
public class Assignment5_3 {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        float pencil=sc.nextFloat();
        float pen=sc.nextFloat();
        float eraser=sc.nextFloat();

        float bill=pencil+pen+eraser;
        System.out.println(bill);
    }
}