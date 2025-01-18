import java.util.*;;
public class f7_except10 {
    public static void main(String[] args) {
        Scanner scs = new Scanner(System.in);

        do{
            System.out.print("enter your number: ");
            int n = scs.nextInt();

            if (n % 10 == 0) {
                continue;
            }
            System.out.println(n);
        }while(true);
    }

}
