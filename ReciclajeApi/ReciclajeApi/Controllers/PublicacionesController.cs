using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Dapper;
using MailKit.Security;
using Microsoft.AspNetCore.Mvc;
using MimeKit;

namespace ReciclajeApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PublicacionesController : ControllerBase
    {

        private readonly IDbConnection _cnn;
        public PublicacionesController(IDbConnection cnn)
        {
            _cnn = cnn;
        }

        [HttpGet("[action]/{email}")]
        public async Task<IActionResult> GetPublicacionesCreadas(string email)
        {
            try
            {
                var query = "SELECT idUsuario FROM usuarios WHERE email = @email";
                var parameter = new DynamicParameters();
                parameter.Add("@email", email);

                int idUsuarioP = (await _cnn.QueryAsync<int>(query, parameter)).SingleOrDefault();

                query = "SELECT * FROM publicaciones WHERE idUsuarioP = @idUsuarioP";
                var parameter2 = new DynamicParameters();
                parameter2.Add("@idUsuarioP", idUsuarioP);

                var publicaciones = (await _cnn.QueryAsync<Publicacion>(query, parameter2)).ToList();

                return Ok(publicaciones);
            }
            catch (Exception e)
            {
                // TODO: Hacer algo en caso de error
                return Ok(null);
            }
        }

        [HttpGet("[action]/{email}")]
        public async Task<IActionResult> GetPublicacionesAceptadas(string email)
        {
            try
            {
                var query = "SELECT idUsuario FROM usuarios WHERE email = @email";
                var parameter = new DynamicParameters();
                parameter.Add("@email", email);

                int idUsuarioR = (await _cnn.QueryAsync<int>(query, parameter)).SingleOrDefault();

                query = "SELECT * FROM publicaciones WHERE idUsuarioR = @idUsuarioR";
                var parameter2 = new DynamicParameters();
                parameter2.Add("@idUsuarioR", idUsuarioR);

                var publicaciones = (await _cnn.QueryAsync<Publicacion>(query, parameter2)).ToList();

                return Ok(publicaciones);
            }
            catch (Exception e)
            {
                // TODO: Hacer algo en caso de error
                return Ok(null);
            }
        }

        // =============================
        //              METODOS
        // =============================

        public async Task<bool> enviarMail(string asunto, List<string> destinatarios, string mensaje)
        {
            try
            {

                string user = "";
                string password = "";
                string server = "";

                using (var client = new MailKit.Net.Smtp.SmtpClient())
                {
                    await client.ConnectAsync(server, 25, SecureSocketOptions.None);
                    await client.AuthenticateAsync(user, password); // autentificacion

                    var message = new MimeMessage();

                    foreach (var c in destinatarios)
                    {
                        message.To.Add(new MailboxAddress(c, c)); // Destinatarios
                    }

                    if (message.To.Count == 0) // Lista destinatario vacia
                    {
                        return false;
                    }

                    message.From.Add(new MailboxAddress("Reciclaje App", user)); // Origen
                    message.Subject = asunto; // Asunto

                    string body = ""; // Mensaje
                    message.Body = new TextPart("html") { Text = body }; // Agrego cuerpo del correo

                    var cancelSource = new CancellationTokenSource(10000);

                    await client.SendAsync(message, cancelSource.Token);
                    await client.DisconnectAsync(true);

                    return true;
                }
            }
            catch (Exception e)
            {
                return false;
            }
        }


    }
}