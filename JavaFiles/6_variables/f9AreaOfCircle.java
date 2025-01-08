import java.util.Scanner;

public class f9AreaOfCircle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        float pi = 3.14f;
        float r = sc.nextFloat();
        float area = pi * r * r;
        System.out.println(area);

    }
}
