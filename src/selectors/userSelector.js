import { createSelector } from 'reselect'
export const userSelector = createSelector(
   state=>state.get("userInfo"),
   userInfo=>userInfo
)


export const tokenSelector = createSelector(
    state=>state.get("token"),
    token=>token
 )