namespace Api.Rest.Controllers
{
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Threading.Tasks;

  using Microsoft.AspNetCore.Mvc;

  using Domain.Podcast.Session;
  using Domain.Podcast.Guest;

  [ApiController]
  [Route("api/[controller]")]
  public class SessionController : ControllerBase
  {
    [HttpGet("Get")]
    public ActionResult<IEnumerable<Session>> GetAll()
    {
      return Ok(new List<Session>
          {
            new Session {
              Date = DateTimeOffset.Now,
              Topic = "Sample interview",
              Season = 1,
              Episode = 1,
              Number = 1,
              Guests = new List<Guest> {
                new Guest {
                  Name = "Jane Doe",
                  CompanyName = "Contoso",
                  WorkTitle = "Queen of Chaos",
                  Comment = "Cool gal"
                },
                new Guest {
                  Name = "Edward Dillinger",
                  CompanyName = "Tailwind Traders",
                  WorkTitle = "Master of Desaster",
                  Comment = "Beautiful guy"
                }
              }
            }
          }
      );
    }
  }
}
