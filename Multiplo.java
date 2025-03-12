import java.util.Scanner;

public class Multiplo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingrese el primer número: ");
        int num1 = scanner.nextInt();

        System.out.print("Ingrese el segundo número: ");
        int num2 = scanner.nextInt();

        if (num1 <= 0 || num2 <= 0) {
            System.out.println("ingrese números enteros positivos.");
        } else {
    
            int mayor = Math.max(num1, num2);
            int menor = Math.min(num1, num2);

            if (mayor % menor == 0) {
                System.out.println(mayor + " es múltiplo de " + menor);
            } else {
                System.out.println(mayor + " no es múltiplo de " + menor);
            }
        }
        
        scanner.close();
    }
}
