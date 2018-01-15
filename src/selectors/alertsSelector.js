import { createSelector } from 'reselect';
export const alertsSelector = createSelector(
   state=>state.get("alerts"),
   alerts=>alerts
)