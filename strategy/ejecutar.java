
public class ejecutar {

	public ejecutar() {
		// TODO Auto-generated constructor stub
	}
	
	public static void main(String[] args) {
		//creando los objetos
        barco barco = new barco();
        submarino subma = new submarino();
        //estados del barco
        System.out.println("Estados del barco:");
        barco.set_movilizar(new tierra());
        barco.navegar();
        barco.set_movilizar((new agua()));
        barco.navegar();
        //estados del submarino
        System.out.println("\nEstados del submarino:");
        subma.set_movilizar(new tierra());
        subma.navegar();
        subma.set_movilizar(new agua());
        subma.navegar();
        //nueva característica del barco
        System.out.println("\nEstado del barco nuevamente");
        barco.set_movilizar(new profundoStrategy());
        barco.navegar();
	}

}
