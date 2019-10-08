namespace ReciclajeApi{
    public class Direccion{
        public Usuario usuario {get; set;}
        public int nuDireccion {get; set;}
        public Provincia provincia {get; set;}
        public Localidad localidad {get; set;}
        public string domicilio {get; set;}
    }
}