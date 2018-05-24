using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiProject.Controllers
{
    [Route("api/test")]
    public class TestController
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "test Controllerr", "" };
        }

        // GET api/values/5
        [HttpGet("{check}")]
        public string Get(int id)
        {
            return "check";
        }

    }
}
