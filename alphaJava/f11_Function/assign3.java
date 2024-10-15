public class assign3 {
    public static int reverse(int n){
        int ld ;
        int rev = 0;
        while (n>0){
            ld = n % 10;
            rev = rev*10 +ld;
            n /= 10;
        }
        return rev;
    }
    public static boolean palindrome (int n){
        int rev = reverse(n);
        if(rev == n){
            return true; 
        }
        return false;
    }
    public static void main(String args[]){
        System.out.println(palindrome(121));
    }
}
