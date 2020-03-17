using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LojaBack.Models
{
    public class Pedido
    {
        [Key]
        public int Id { get; set; }

        [StringLength(15)]
        public string NumeroPedido { get; set; }

        [ForeignKey("Cliente")]
        public int ClienteId { get; set; }
        
        public Cliente Cliente { get; set; }

        [Column(TypeName = "decimal(18, 2)")]
        public decimal Total { get; set; }

        [Column(TypeName = "decimal(18, 2)")]
        public decimal Desconto { get; set; }

        public ICollection<ItemPedido> ItensPedido { get; set; }

        public ICollection<FormaPagamento> FormasPagamento { get; set; }
    }
}
