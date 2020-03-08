using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace AngularVS.Models
{
    public class Usuario
    {
        [Key]
        public int Id { get; set; }

        public string Nome { get; set; }

        public int Idade { get; set; }

        [JsonIgnore]
        public ICollection<Postagem> Postagems { get; set; }

        [JsonIgnore]
        public ICollection<Comentario> Comentarios { get; set; }
    }
}
