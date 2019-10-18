namespace ReciclajeApi.Models {
    public class Localidad{
        public int idProvincia {get; set;}
        public Provincia provincia {get; set;}
        public int idLocalidad {get; set;}
        public string descripcion {get; set;}
    }
}