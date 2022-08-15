using Exercise2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Exercise2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ShowsController : ControllerBase
    {
        private TvShowDbContext context = new TvShowDbContext();
        [HttpGet("getShows")]
        public List<Show> getShows()
        {
            return context.Shows.ToList();
        }

        [HttpGet("getShows/{id}")]
        public Show getShowbyId(int id)
        {
            return context.Shows.FirstOrDefault(s => s.Id == id);
        }
    }
}
