import { Action, Reducer } from 'redux';
import { Session } from './session';

export interface SessionState {
  sessions: Session[];
}

export interface LoadFutureSessionsAction {
  type: 'LOAD_FUTURE_SESSIONS';
}

export interface AddSessionAction {
  type: 'ADD_SESSION';
  session: Session;
}

export interface RemoveSessionAction {
  type: 'REMOVE_SESSION';
  date: Date;
}

export interface UpdateSessionAction {
  type: 'UPDATE_SESSION';
  session: Session;
}

export const actionCreators = {
  load: () => ({ type: 'LOAD_FUTURE_SESSIONS' } as LoadFutureSessionsAction),
};
