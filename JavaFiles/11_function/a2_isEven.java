public class a2_isEven {
    public static boolean isEven(int n){
        if (n % 2 == 0) {
            return true;
        }else{
            return false;
        }
    }
    public static void main(String[] args) {
        System.out.println(isEven(8));
        System.out.println(isEven(9));
    }
}
