﻿using ApiProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiProject.Data
{
    public class PokeContext :DbContext
    {
         public PokeContext(DbContextOptions<PokeContext> options) : base(options)
        {
          
        }
        

        public  DbSet<Trainer> Trainers { get; set; }
        public  DbSet<Pokemon> Pokemons { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Trainer>().ToTable("Trainer");
            modelBuilder.Entity<Pokemon>().ToTable("Pokemon");

        }

    }     
}
