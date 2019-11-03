namespace ReciclajeApi.Business.Models.Domain
{
    public class Material
    {
        public int IdMaterial { get; set; }

        public string NombreMaterial { get; set; }

        public string Residuo { get; set; }

        public bool EsReciclable { get; set; }

        public byte[] Imagen { get; set; }

        public string Detalle { get; set; }
    }
}