public class f2_invertedRotated {
    public static void halfPyramid(int n) {
        for (int i = 1; i <= n ; i++) {
            for (int j = 1; j <= n-i; j++) {
                System.out.print("  ");
            }
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }
    
    public static void halfPyramidNum(int n) {
        for (int i = 1; i <= n ; i++) {
            for (int j = 1; j <= n-i+1; j++) {
                System.out.print(j);
            }
            System.out.println();
        }
    }

    
    public static void main(String[] args) {
        // halfPyramid(4);
        halfPyramidNum(5);
    }
    
}
