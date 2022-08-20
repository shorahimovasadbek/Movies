import {configureStore} from '@reduxjs/toolkit'
import {reducFavorite} from './reducer/favorite'
import {reducWatch} from './reducer/watchlist'

const store = configureStore({
  reducer: {
    favorite: reducFavorite,
    watchlist: reducWatch
  }
})

export default store