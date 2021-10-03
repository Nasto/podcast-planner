using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Domain.Podcast.Guest
{
  /// <summary>
  /// Represents a guest in the podcast.
  /// </summary>
  public class Guest
  {
    /// <summary>
    /// The name of the guest.
    /// </summary>
    public string Name { get; set; }

    /// <summary>
    /// The name of the company the guest works for.
    /// </summary>
    public string CompanyName { get; set; }

    /// <summary>
    /// The title for the job the guest is working in.
    /// </summary>
    public string WorkTitle { get; set; }

    /// <summary>
    /// Arbritary comments about the guest.
    /// </summary>
    public string Comment { get; set; }


  }
}
