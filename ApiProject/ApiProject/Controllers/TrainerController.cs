﻿using ApiProject.Data;
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
       /* [HttpGet]
        public IEnumerable<Trainer> Get()
        {

            var trainers = context.Trainers.ToList();
            return trainers;
      //  return _listplace.GetTrainerList();
        
    }*/
        
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

        /* [HttpGet]
         public List<Trainer> GetName(string Naam,string L, int C,string sort , string dir = "asc")
         {
             IQueryable<Trainer> query = context.Trainers;

              if (!string.IsNullOrWhiteSpace(Naam))
              {
                  query = query.Where(d => d.Name == Naam);
              }
             if (!string.IsNullOrWhiteSpace(Naam))
             {
                 query = query.Where(d => d.League == L);
             }
             if (!string.IsNullOrWhiteSpace(Naam))
             {
                 query = query.Where(d => d.Cards == C);
             }



             if (string.IsNullOrWhiteSpace(sort))
             {
                 switch (sort)
                 {
                     case "league":
                         if (dir == "asc")
                             query = query.OrderBy(d => d.League);
                         else if (dir == "desc")
                             query = query.OrderByDescending(d => d.League);
                         break;
                     case "Cards":
                         if (dir == "asc")
                             query = query.OrderBy(d => d.Cards);
                         else if (dir == "desc")
                             query = query.OrderByDescending(d => d.Cards);
                         break;

                 }

             }
             return query.ToList();

             // return _listplace.GetTrainerList().ElementAt(id-1);

         }*/

        [HttpGet]
        public List<Trainer> Getlength(int? page, int length = 100)
        {
            IQueryable<Trainer> query = context.Trainers;

            /* if (!string.IsNullOrWhiteSpace(Naam))
             {
                 query = query.Where(d => d.Name == Naam);
             }
             */

            if (page.HasValue)
                query = query.Skip(page.Value * length);
            query = query.Take(length);



            return query.ToList();

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

        [HttpDelete("{id}")]
        public IActionResult DeleteTrainer(int id)
        {


            var trainer = context.Trainers.SingleOrDefault(t => t.Id == id);
            if (trainer == null)
            {
                return NotFound();
            }

            context.Trainers.Remove(trainer);
            context.SaveChanges();

            return NoContent();

            // return _listplace.GetTrainerList().ElementAt(id-1);

        }

        [HttpPut]
        public IActionResult UpdateTrainer([FromBody] Trainer TrainerUpdate)
        {


            var trainer = context.Trainers.Find(TrainerUpdate.Id);
            if (trainer == null)
            {
                return NotFound();
            }

            trainer.Name = TrainerUpdate.Name;
            trainer.Cards = TrainerUpdate.Cards;
            trainer.League = TrainerUpdate.League;
          

            context.SaveChanges();

            return Ok(trainer);

            // return _listplace.GetTrainerList().ElementAt(id-1);

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



