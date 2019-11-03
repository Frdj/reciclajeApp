namespace ReciclajeApi.Business.Models.ApiModels
{
    public class MaterialApiModel
    {
        public int IdMaterial { get; set; }

        public string Material { get; set; }

        public string Residuo { get; set; }

        public bool EsReciclable { get; set; }

        public string Imagen { get; set; }

        public string Detalle { get; set; }
    }
}