using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiProject.Controllers
{
    [Route("api/trainers")]
    public class TestController
    {
        // GET api/trainers
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "test Controllerr", "" };
        }
        
        // GET api/trainers/All
        [HttpGet("{all}")]
        public List<Trainer> GetTrainerList()
        {
            var trainerList = new List<Trainer>();

            trainerList.Add(new Trainer()
            {
                Id = 1,
                Name = "Trainer1",
                League = "Master",
            });

            trainerList.Add(new Trainer()
            {
                Id = 2,
                Name = "Trainer2",
                League = "Beginner",
            });


            return trainerList;
        }

    }
}
