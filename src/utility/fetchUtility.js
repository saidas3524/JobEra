import fetch from "isomorphic-fetch";
export const  fetchUtility= (url,restInfo)=> {
    return fetch(url,restInfo)
      .then(response => ({ response }))
      .catch(error => ({ error }))
  }

