import {createReducer, on} from "@ngrx/store";
import {fetchProfile, fetchProfileFailure, fetchProfileSuccess, logoutUser} from "./profile.actions";

export interface ProfileState {
  value: any;
  error: string | null;
  state: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ProfileState = {
  value: null,
  error: null,
  state: "pending"
}

export const profileReducer = createReducer(
  initialState,
  on(fetchProfile, (state) => ({
    ...state,
    value: null,
    state: 'pending'
  })),
  on(logoutUser, (state) => ({
    value: null,
    error: null,
    state: 'pending'
  })),
  on(fetchProfileSuccess, (state, data) => {
    return ({
      ...state,
      value: data.user,
      error: null,
      state: 'success'
    })
  }),
  on(fetchProfileFailure, (state, {error}) => ({
    ...state,
    value: null,
    error: error,
    state: 'error'
  })),
)
