namespace ReciclajeApi{
    public class Direccion{
        public int idUsuario {get; set;}
        public Usuario usuario {get; set;}
        public int nuDireccion {get; set;}
        public int idProvincia {get; set;}
        public Provincia provincia {get; set;}
        public int idLocalidad {get; set;}
        public Localidad localidad {get; set;}
        public string domicilio {get; set;}
    }
}