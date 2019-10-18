using System;
using System.Collections.Generic;
using System.Data;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using ReciclajeApi.Business.ICoordinators;
using ReciclajeApi.Business.Models.ApiModels;

namespace ReciclajeApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginCoordinator loginCoordinator;

        private readonly IDbConnection _cnn;
        public LoginController(IDbConnection cnn, ILoginCoordinator loginCoordinator)
        {
            _cnn = cnn;
            this.loginCoordinator = loginCoordinator;
        }

        [HttpGet("login")]
        public ActionResult<int> Login([FromBody] LoginApiModel login)
        {
            try
            {
                var result = loginCoordinator.Login(login);

                return StatusCode(int.Parse(HttpStatusCode.OK.ToString()), result);
            }
            catch (Exception)
            {
                return StatusCode(int.Parse(HttpStatusCode.Forbidden.ToString()));
            }
        }
    }
}