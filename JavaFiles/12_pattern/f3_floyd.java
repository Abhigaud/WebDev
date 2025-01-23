public class f3_floyd {
    public static void floydsTriangle(int n) {
        int flo = 1;
        for (int i = 1; i <= n ; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(flo +" ");
                flo++;
            }
            System.out.println();
        }
    }
    public static void zeroOne(int n) {
        for (int i = 1; i <= n ; i++) {
            for (int j = 1; j <= i; j++) {
                if ((i+j) % 2 == 0) {
                    System.out.print("1 ");
                }else {
                    System.out.print("0 ");
                }
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        // floydsTriangle(5);
        zeroOne(5);
    }
}
