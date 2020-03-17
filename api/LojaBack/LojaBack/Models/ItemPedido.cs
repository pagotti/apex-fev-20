using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LojaBack.Models
{
    public class ItemPedido
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Pedido")]
        public int PedidoId { get; set; }

        public Pedido Pedido { get; set; }
        
        [ForeignKey("Produto")]
        public int ProdutoId { get; set; }

        public Produto Produto { get; set; }

        [Column(TypeName = "decimal(9, 4)")]
        public decimal Quantidade { get; set; }

        [Column(TypeName = "decimal(18, 2)")]
        public decimal ValorUnitario { get; set; }


    }
}
