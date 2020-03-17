using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LojaBack.Models
{
    public class LojaDbContext: DbContext
    {
        public DbSet<Cliente> Clientes { get; set; }

        public DbSet<Produto> Produtos { get; set; }

        public DbSet<Pedido> Pedidos { get; set; }

        public DbSet<ItemPedido> ItensPedido { get; set; }

        public DbSet<FormaPagamento> PagamentosPedido { get; set; }
        
        public LojaDbContext(DbContextOptions<LojaDbContext> options)
            : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Produto>().
                HasMany<ItemPedido>().
                WithOne(p => p.Produto).
                HasForeignKey(p => p.ProdutoId).
                OnDelete(DeleteBehavior.Restrict);
        }
    }
}
