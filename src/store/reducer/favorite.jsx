const initState = []

function reducFavorite(state = initState, action){
  if(action.type == "add"){
    let currenState = [... state]
    currenState.push(action.payload)

    return state = currenState
  }

  return state
}

export {reducFavorite}