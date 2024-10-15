public class file7 {
    public static boolean checkPrime(int n){
        boolean isPrime = true;
        for(int i =2; i<=n-1; i++){
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
