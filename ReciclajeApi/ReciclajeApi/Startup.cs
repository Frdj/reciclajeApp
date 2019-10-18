using AutoMapper;
using System.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MySql.Data.MySqlClient;
using ReciclajeApi.Business.Coordinators;
using ReciclajeApi.Business.ICoordinators;
using ReciclajeApi.Persistance.Dao;
using ReciclajeApi.Persistance.IDao;

namespace ReciclajeApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddTransient<IDbConnection>((serviceProvider) => new MySqlConnection(Configuration.GetConnectionString("database")));
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddAutoMapper(typeof(Startup));
            services.AddTransient<IPublicacionCoordinator, PublicacionCoordinator>();
            services.AddTransient<IPublicacionDao, PublicacionDao>();
            services.AddTransient<IResiduoCoordinator, ResiduoCoordinator>();
            services.AddTransient<IResiduoDao, ResiduoDao>();
            services.AddTransient<IUsuarioCoordinator, UsuarioCoordinator>();
            services.AddTransient<IUsuarioDao, UsuarioDao>();
            services.AddTransient<IDireccionCoordinator, DireccionCoordinator>();
            services.AddTransient<IDireccionDao, DireccionDao>();
            services.AddTransient<IEstadoCoordinator, EstadoCoordinator>();
            services.AddTransient<IEstadoDao, EstadoDao>();
            services.AddTransient<ILocalidadCoordinator, LocalidadCoordinator>();
            services.AddTransient<ILocalidadDao, LocalidadDao>();
            services.AddTransient<IProvinciaCoordinator, ProvinciaCoordinator>();
            services.AddTransient<IProvinciaDao, ProvinciaDao>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseCors(options => options.WithOrigins("https://localhost:4200").AllowAnyMethod());

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
