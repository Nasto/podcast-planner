namespace Domain.Podcast.Session
{
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Threading.Tasks;

  using Guest;


  /// <summary>
  /// Represents a recording session for a podcast.
  /// </summary>
  public class Session
  {
    /// <summary>
    /// The timestamp of the recording session.
    /// </summary>
    public DateTimeOffset Date { get; set; }

    /// <summary>
    /// The topic of the recording session.
    /// </summary>
    public string Topic { get; set; }

    /// <summary>
    /// The season of the podcast in which the session is released.
    /// </summary>
    public int Season { get; set; }

    /// <summary>
    /// The episode number in the season.
    /// </summary>
    public int Episode { get; set; }

    /// <summary>
    /// The overall counter of the episode.
    /// </summary>
    public int Number { get; set; }

    /// <summary>
    /// The guests joining the session.
    /// </summary>
    public IEnumerable<Guest> Guests { get; set; }

  }
}
