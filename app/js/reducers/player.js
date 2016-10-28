import {combineReducers} from 'redux'
import {
  PLAYER_PLAY,
  PLAYER_PAUSE
} from '../constants'

function isPlaying(state = false, action) {
  switch(action.type) {
    case PLAYER_PLAY:
      return true
    case PLAYER_PAUSE:
      return false
    default:
      return state
  }
}

function isFavorite(state = false, action) {
  switch(action.type) {
    default:
      return state
  }
}

export default combineReducers({
  isPlaying,
  isFavorite
})
