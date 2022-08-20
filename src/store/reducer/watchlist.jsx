const initState = []

function reducWatch(state = initState, action){
  if(action.type == "addd"){
    let currenState = [... state]
    currenState.push(action.payload)

    return state = currenState
  }

  return state
}

export {reducWatch}