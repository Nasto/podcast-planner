import { Guest } from './guest';

export interface Session {
  /** The date of recording for the session */
  date: Date;

  /** The topic that is talked about. */
  topic: string;

  /** The guests joining the session. */
  guests: Guest[];

  /** The season of the podcast in which the session is released. */
  season: number;

  /** The episode number in the season. */
  episode: number;

  /** The overall counter of the episode. */
  number: number;
}
