public class file9 {
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

    public static void primeInRange(int n){
        for(int i = 2; i<=n; i++){
            if(checkPrime(i)){
                System.out.print(i+ " ");
            }
        }
    }
    public static void main(String args[]){
        primeInRange(200);
    }    
   
    
}
