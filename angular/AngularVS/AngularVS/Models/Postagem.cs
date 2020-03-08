using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AngularVS.Models
{
    public class Postagem
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100)]
        public string Titulo { get; set; }

        [StringLength(1000)]
        public string Texto { get; set; }

        public DateTime Data { get; set; }

        public string Imagem { get; set; }

        [ForeignKey("Autor")]
        public int AutorId { get; set; }

        public Usuario Autor { get; set; }
        
        public ICollection<Comentario> Comentarios { get; set; }

    }
}
