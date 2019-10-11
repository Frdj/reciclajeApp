namespace ReciclajeApi{
    public class Categoria_Residuo{
        public int idTipoResiduo {get; set;}
        public Tipo_Residuo Tipo_Residuo {get; set;}
        public int idCategoria {get; set;}
        public string descripcion {get; set;}
        public bool reciclaje {get; set;}
        public object imagen {get; set;}       
    }
}