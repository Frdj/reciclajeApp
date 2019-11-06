namespace ReciclajeApi.Business.Models.Domain{
    public class PublicacionDetalle{
        
        public int IdPublicacion {get; set;}

        public int IdTipoResiduo {get; set;}

        public int IdCategoriaResiduo {get; set;}

        public int Cantidad {get; set;}

        public string Medida {get; set;}
    }
}