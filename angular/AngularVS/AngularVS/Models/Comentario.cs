using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace AngularVS.Models
{
    public class Comentario
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(1000)]
        public string Texto { get; set; }

        public DateTime Data { get; set; }

        [ForeignKey("Autor")]
        public int AutorId { get; set; }

        public Usuario Autor { get; set; }

        [ForeignKey("Postagem")]
        public int PostagemId { get; set; }

        [JsonIgnore]
        public Postagem Postagem { get; set; }

    }
}
