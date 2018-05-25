using ApiProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiProject.Data
{
    public class DbInitializer
    {
        public static void Initialize(PokeContext context)
        {
            context.Database.EnsureCreated();


            if (context.Trainers.Any())
            {
                return;
            }

            context.Trainers.AddRange(
              new Trainer { Name = "TrainerTest" , League = "Master" , Cards = 2},
              new Trainer { Name = "TrainerTest2", League = "Master2", Cards = 5 },
              new Trainer { Name = "TrainerTes3", League = "Master3", Cards = 7 }

                );

            context.SaveChanges();


            context.Pokemons.AddRange(
             new Pokemon { Name = "Mew" , Hp = 420, Rarity = "Legendary" , Type ="Physic" , Image= "https://images.pokemontcg.io/ex15/101.png" },
             new Pokemon { Name = "pikachu", Hp = 4, Rarity = "normal", Type = "Electric" , Image= "https://images.pokemontcg.io/xyp/XY124.png" },
             new Pokemon { Name = "charmander", Hp = 42, Rarity = "Cute", Type = "Fire" , Image= "https://images.pokemontcg.io/base1/46.png" }

               );

            context.SaveChanges();
            // zelfde pokemons


        }
    }
}
