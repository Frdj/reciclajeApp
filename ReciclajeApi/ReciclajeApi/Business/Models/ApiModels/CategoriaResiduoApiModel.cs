namespace ReciclajeApi.Business.Models.ApiModels
{
    public class CategoriaResiduoApiModel
    {
        public int IdCategoria { get; set; }

        public TipoResiduoApiModel TipoResiduo { get; set; }

        public string Descripcion { get; set; }

        public bool Reciclable { get; set; }

        public string Imagen { get; set; }
    }
}
