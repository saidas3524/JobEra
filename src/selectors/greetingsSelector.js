import { createSelector } from 'reselect'
export const greetingsSelector = createSelector(
   state=>state.get("greetings"),
   greetings=>greetings
)