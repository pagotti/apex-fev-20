using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularVS.Models
{
    public class AngularVSDbContext : DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<Postagem> Postagens { get; set; }

        public DbSet<Comentario> Comentarios { get; set; }

        public AngularVSDbContext(DbContextOptions<AngularVSDbContext> options): base(options) 
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Comentario>().
                HasOne(p => p.Autor).
                WithMany(p => p.Comentarios).
                HasForeignKey(p => p.AutorId).
                OnDelete(DeleteBehavior.ClientNoAction);
        }
    }
}
