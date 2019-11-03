namespace ReciclajeApi.Business.Models.ApiModels
{
    public class DireccionRequest
    {
        public int NuDireccion { get; set; }

        public int IdProvincia { get; set; }

        public int IdLocalidad { get; set; }

        public string Domicilio { get; set; }

        public string Barrio { get; set; }
    }
}