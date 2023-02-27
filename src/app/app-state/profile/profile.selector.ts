import {createSelector} from "@ngrx/store";
import {ProfileState} from "./profile.reducer";
import {AppState} from "../app-state";

export const selectProfile = (state: AppState) => state.profile

export const profile = createSelector(
  selectProfile,
  (state: ProfileState) => state.value
);

export const profileState = createSelector(
  selectProfile,
  (state: ProfileState) => state.state
);
