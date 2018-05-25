using ApiProject.Data;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ApiProject.Controllers
{
    [Route("api/trainers")]
    public class TrainerController :  Controller
    {

        private readonly PokeContext context;

        public TrainerController(PokeContext context)
        {
            this.context = context;
        }

    // public ListPlace _listplace = new ListPlace();
     // public List<Trainer> trainerList = new List<Trainer>();
        // GET api/trainers
        [HttpGet]
        public IEnumerable<Trainer> Get()
        {

            var trainers = context.Trainers.ToList();
            return trainers;
      //  return _listplace.GetTrainerList();
        
    }
        
        // GET api/trainers/All
        [HttpGet("{id}")]
        public IActionResult GetTrainer(int id)
        {


            var trainer = context.Trainers.SingleOrDefault(t => t.Id == id);
            if (trainer == null)
            {
                return NotFound();
            }
            return new OkObjectResult(trainer);

            // return _listplace.GetTrainerList().ElementAt(id-1);

        }

        [HttpPost]
        public IActionResult CreateTrainer([FromBody] Trainer newTrainer)
        {
            //newTrainer.Id = 3;
            Trainer trainer = new Trainer();
            trainer.Id = newTrainer.Id;
            trainer.Name = newTrainer.Name;
            trainer.League = newTrainer.League;
            trainer.Cards = newTrainer.Cards;
            context.Trainers.Add(trainer);
            context.SaveChanges();
            return new OkObjectResult(trainer);
            //return OkObjectResult("GetTrainer", new { id = newTrainer.Id });
        }



        /*[HttpPost("{post}")]
        public String PostTrainer(int id,String name, String league)
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
              })*/


           // _listplace.AddTrainer(id,name, league);
            //return "Created trainer";

            

        //}
        // GET api/trainers/

        /*  [HttpGet("{test}")]
          public String GetTrainer(int id)
          {

              return trainerList.ElementAt(0);
          }*/

    }

}



