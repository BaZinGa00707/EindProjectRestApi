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

        // GET api/values
        [HttpGet]
        public IEnumerable<Pokemon> Get()
        {
            //return new string[] { "test01", "test02" };
            var pokemons = context.Pokemons.ToList();
            return pokemons;
        }

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


      
    }
}
