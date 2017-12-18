import { createSelector } from 'reselect'
export const loginStatusSelector = createSelector(
   state=>state.get("loginStatus"),
   loginStatus=>loginStatus
)