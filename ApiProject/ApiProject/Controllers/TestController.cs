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
     public ListPlace _listplace = new ListPlace();
     // public List<Trainer> trainerList = new List<Trainer>();
        // GET api/trainers
        [HttpGet]
        public IEnumerable<Trainer> Get()
        {
         /*   trainerList.Add(new Trainer()
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
            });*/

        return _listplace.GetTrainerList();
        //return trainerList;
    }
        
        // GET api/trainers/All
        [HttpGet("{id}")]
        public Trainer GetTrainerList(int id)
        {
          /*  trainerList.Add(new Trainer()
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
            });*/


            return _listplace.GetTrainerList().ElementAt(id-1);

        }
        // GET api/trainers/
       
      /*  [HttpGet("{test}")]
        public String GetTrainer(int id)
        {

            return trainerList.ElementAt(0);
        }*/
        
    }

}



