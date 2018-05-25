using ApiProject.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiProject
{
    public class Trainer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string League { get; set; }

        public int Cards { get; set; }

       
       

    }

    public class ListPlace {

        public List<Trainer> trainerList = new List<Trainer>();
        public ListPlace()
        {
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
        }

        public List<Trainer> GetTrainerList()
        {
            return trainerList;
        }

        public void AddTrainer(int id,String N, String L)
        {

            trainerList.Add(new Trainer()
            {
                Id = id,// trainerList[-1].Id + 1,
                Name = N,
                League = L,
            });
        }

    }

}
