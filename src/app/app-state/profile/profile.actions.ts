import {createAction, props} from "@ngrx/store";

export const fetchProfile = createAction(
  'Fetch Profile',
)

export const fetchProfileSuccess = createAction(
  'Fetch Profile Success',
  props<{ user: any }>()
)

export const fetchProfileFailure = createAction(
  'Fetch Profile Failure',
  props<{ error: string }>()
)

export const logoutUser = createAction(
  'logout user'
)
