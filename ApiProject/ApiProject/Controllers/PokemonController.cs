using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiProject.Data;
using ApiProject.Models;
using Microsoft.AspNetCore.Mvc;

namespace ApiProject.Controllers
{
    [Route("api/pokemons")]
    public class PokemonController : Controller
    {


        private readonly PokeContext context;

        public PokemonController(PokeContext context)
        {
            this.context = context;
        }

        // GET api/pokemons
       /* [HttpGet]
        public IEnumerable<Pokemon> Get()
        {
            //return new string[] { "test01", "test02" };
            var pokemons = context.Pokemons.ToList();
            return pokemons;
        }
        */
        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult GetPokemon(int id)
        {


            var pokemon = context.Pokemons.SingleOrDefault(t => t.Id == id);
            if (pokemon == null)
            {
                return NotFound();
            }
            return new OkObjectResult(pokemon);

            // return _listplace.GetTrainerList().ElementAt(id-1);

        }

       /* [HttpGet]
        public List<Pokemon> GetName( int? page , int length = 100)
        {
            IQueryable<Pokemon> query = context.Pokemons;

           /* if (!string.IsNullOrWhiteSpace(Naam))
            {
                query = query.Where(d => d.Name == Naam);
            }
            */

          /*  if (page.HasValue)
                query = query.Skip(page.Value * length);
            query = query.Take(length);


           
            return query.ToList();

            // return _listplace.GetTrainerList().ElementAt(id-1);

        }*/

         [HttpGet]
         public List<Pokemon> GetName(string Naam,int hp, string T,string sort , string dir = "asc")
         {
             IQueryable<Pokemon> query = context.Pokemons;

              if (!string.IsNullOrWhiteSpace(Naam))
              {
                  query = query.Where(d => d.Name == Naam);
              }
             if (!string.IsNullOrWhiteSpace(Naam))
             {
                 query = query.Where(d => d.Hp == hp);
             }
             if (!string.IsNullOrWhiteSpace(Naam))
             {
                 query = query.Where(d => d.Type == T);
             }



             if (string.IsNullOrWhiteSpace(sort))
             {
                 switch (sort)
                 {
                     case "Type":
                         if (dir == "asc")
                             query = query.OrderBy(d => d.Type);
                         else if (dir == "desc")
                             query = query.OrderByDescending(d => d.Type);
                         break;
                     case "Rarity":
                         if (dir == "asc")
                             query = query.OrderBy(d => d.Rarity);
                         else if (dir == "desc")
                             query = query.OrderByDescending(d => d.Rarity);
                         break;

                 }

             }
             return query.ToList();

             // return _listplace.GetTrainerList().ElementAt(id-1);

         }

       /* public Pokemon Get(string name)
        {
            var pokemon = context.Pokemons.SingleOrDefault(t => t.Name == name);
            
            return(pokemon);
        }*/

        /*[HttpGet("{naam}")]
        public IActionResult GetPo(string name)
        {


            var pokemon = context.Pokemons.SingleOrDefault(t => t.Name == name);
            if (pokemon == null)
            {
                return NotFound();
            }
            return new OkObjectResult(pokemon);

            // return _listplace.GetTrainerList().ElementAt(id-1);

        }*/
        /* [Route("find")]
         [HttpGet]
         public List<Pokemon> GetName(string Naam)
         {
             IQueryable<Pokemon> query = context.Pokemons;

             if (!string.IsNullOrWhiteSpace(Naam)) { 
             query = query.Where(d => d.Name == Naam);
             }
             return query.ToList();

             // return _listplace.GetTrainerList().ElementAt(id-1);

         }*/

        [HttpPost]
        public IActionResult CreatePokemon([FromBody] Pokemon newPokemon)
        {
            //newTrainer.Id = 3;
            Pokemon pokemon = new Pokemon();
            pokemon.Id = pokemon.Id;
            pokemon.Name = newPokemon.Name;
            pokemon.Rarity = newPokemon.Rarity;
            pokemon.Image = newPokemon.Image;
            pokemon.Hp = newPokemon.Hp;
            pokemon.Type = newPokemon.Type;
            context.Pokemons.Add(pokemon);
            context.SaveChanges();
            return new OkObjectResult(pokemon);
            //return OkObjectResult("GetTrainer", new { id = newTrainer.Id });
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePokemon(int id)
        {


            var pokemon = context.Pokemons.SingleOrDefault(t => t.Id == id);
            if (pokemon == null)
            {
                return NotFound();
            }

            context.Pokemons.Remove(pokemon);
            context.SaveChanges();

            return NoContent();

            // return _listplace.GetTrainerList().ElementAt(id-1);

        }

        [HttpPut]
        public IActionResult UpdatePokemon([FromBody] Pokemon PokeUpdate)
        {


            var pokemon = context.Pokemons.Find(PokeUpdate.Id);
            if (pokemon == null)
            {
                return NotFound();
            }

            pokemon.Hp = PokeUpdate.Hp;
            pokemon.Image = PokeUpdate.Image;
            pokemon.Name = PokeUpdate.Name;
            pokemon.Rarity = PokeUpdate.Rarity;
            pokemon.Type = PokeUpdate.Type;

    
            context.SaveChanges();

            return Ok(pokemon);

            // return _listplace.GetTrainerList().ElementAt(id-1);

        }





    }
}
