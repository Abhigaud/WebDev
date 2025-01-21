import java.util.*;;
public class f1_printStar {
    // int n = 4;
    public static void main(String[] args) {
        // print triangle
        for(int i = 1; i<= 4; i++){
            for(int j =1; j <= i; j++){
                System.out.print("* ");
            }
            System.out.println();
        }
        
        // print inverted triangle
        for(int i = 1; i<= 4; i++){
            for(int j = 1; j <= 4 - i + 1; j++){
                System.out.print("* ");
            }
            System.out.println();
        }
        
        // print half-Pyramid 
        for(int i = 1; i<= 4; i++){
            for(int j =1; j <= i; j++){
                System.out.print(j + " ");
            }
            System.out.println();
        }

        char ch = 'A';
        // print character pattern 
        for(int i = 1; i<= 4; i++){
            for(int j =1; j <= i; j++){
                System.out.print(ch + " ");
                ch++;
            }
            System.out.println();
        }
    }
}
