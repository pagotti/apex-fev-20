using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LojaBack.Models
{
    public class FormaPagamento
    {
        [Key]
        public int Id { get; set; }
        
        [ForeignKey("Pedido")]
        public int PedidoId { get; set; }

        public Pedido Pedido { get; set; }

        public TipoPagamento Tipo { get; set; }

        [Column(TypeName = "decimal(18, 2)")]
        public decimal Valor { get; set; }

    }

}
