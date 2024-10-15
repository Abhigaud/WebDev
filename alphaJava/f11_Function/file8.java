public class file8 {

    public static boolean checkPrime(int n){
        boolean isPrime = true;
        for(int i =2; i<=Math.sqrt(n); i++){
            if(n % i == 0){ //Completely dividing 
                isPrime =false;
                break;
            }
        }
        return isPrime;
    }
    public static void main(String args[]){
        System.out.println(checkPrime(7));
    }    
    
}
