//clase abstracta llamado submarino
public abstract class transportMaritimo {
    //atributo proceder en este caso para
    //navega en el mar
    private movilizar proceder;

    //resive un parametro movilizar    
    public void set_movilizar(movilizar m){
        //se le asigna al parametro
        this.proceder = m;
    }
    //metodo para navegar
    public void navegar(){
        //atributo proceder se le asigana de la
        //clase moverse
        this.proceder.moverse();
    }
}