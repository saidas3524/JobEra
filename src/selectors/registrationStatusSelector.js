import { createSelector } from 'reselect'
export const registrationStatusSelector = createSelector(
   state=>state.get("registrationStatus"),
   registrationStatus=>registrationStatus
)