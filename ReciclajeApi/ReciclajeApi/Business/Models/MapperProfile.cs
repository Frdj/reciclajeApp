using AutoMapper;
using ReciclajeApi.Business.Models.ApiModels;
using ReciclajeApi.Business.Models.Domain;

namespace ReciclajeApi.Business.Models
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<Publicacion, PublicacionApiModel>();
            CreateMap<TipoResiduo, TipoResiduoApiModel>().ForMember(dest => dest.IdTipoResiduo, opt => opt.MapFrom(x => x.IdTipo));
            CreateMap<CategoriaResiduo, CategoriaResiduoApiModel>();
            CreateMap<Usuario, UsuarioApiModel>();
            CreateMap<Direccion, DireccionApiModel>();
            CreateMap<int, EstadoApiModel>();
            CreateMap<int, UsuarioApiModel>();
            CreateMap<int, LocalidadApiModel>();
            CreateMap<int, ProvinciaApiModel>();
            CreateMap<Estado, EstadoApiModel>();
            CreateMap<Localidad, LocalidadApiModel>();
            CreateMap<Provincia, ProvinciaApiModel>();
        }
    }
}