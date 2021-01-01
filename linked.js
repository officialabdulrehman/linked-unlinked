// find all the users that have not been linked

import { linked, allUsers } from "./users";

function compareAndContrast(linked, allUsers){
  return unlinked = allUsers.filter(function(obj1){
    return !linked.some(function(obj2){
      return obj1.id === obj2.id
    })
  })
}
