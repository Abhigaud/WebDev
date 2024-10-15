public class file9_10 {
    public static void main(String args[]){
        int n = 5;
        boolean isPrime =true;
        for(int i=2; i<Math.sqrt(n); i++){
            if(n % i == 0 ){
                isPrime = false;
            }
        }
        if(isPrime == true){
            System.out.println("Number is prime");
        }else{
            System.out.println("Number is not prime");
        }
    }
}
