public class assign5 {
    public static int sum(int n){
        int sum =0;
        int ld;
        while (n>0){
            ld = n%10;
            sum += ld;
            n/=10;
        }
        return sum;
    }   
    public static void main(String args[]){
        System.out.println(sum(1238));
    } 
}
