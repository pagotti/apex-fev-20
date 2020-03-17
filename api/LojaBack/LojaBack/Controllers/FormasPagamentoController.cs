using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LojaBack.Models;

namespace LojaBack.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormasPagamentoController : ControllerBase
    {
        private readonly LojaDbContext _context;

        public FormasPagamentoController(LojaDbContext context)
        {
            _context = context;
        }

        // GET: api/FormasPagamento
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FormaPagamento>>> GetPagamentosPedido()
        {
            return await _context.PagamentosPedido.ToListAsync();
        }

        // GET: api/FormasPagamento/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FormaPagamento>> GetFormaPagamento(int id)
        {
            var formaPagamento = await _context.PagamentosPedido.FindAsync(id);

            if (formaPagamento == null)
            {
                return NotFound();
            }

            return formaPagamento;
        }

        // PUT: api/FormasPagamento/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFormaPagamento(int id, FormaPagamento formaPagamento)
        {
            if (id != formaPagamento.Id)
            {
                return BadRequest();
            }

            _context.Entry(formaPagamento).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FormaPagamentoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/FormasPagamento
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<FormaPagamento>> PostFormaPagamento(FormaPagamento formaPagamento)
        {
            _context.PagamentosPedido.Add(formaPagamento);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFormaPagamento", new { id = formaPagamento.Id }, formaPagamento);
        }

        // DELETE: api/FormasPagamento/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<FormaPagamento>> DeleteFormaPagamento(int id)
        {
            var formaPagamento = await _context.PagamentosPedido.FindAsync(id);
            if (formaPagamento == null)
            {
                return NotFound();
            }

            _context.PagamentosPedido.Remove(formaPagamento);
            await _context.SaveChangesAsync();

            return formaPagamento;
        }

        private bool FormaPagamentoExists(int id)
        {
            return _context.PagamentosPedido.Any(e => e.Id == id);
        }
    }
}
