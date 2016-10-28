import {actionCreator} from '../utils/action'
import {
  PLAYER_PLAY,
  PLAYER_PAUSE,
  PLAYER_LIKE,
  PLAYER_UNLIKE,
  PLAYER_PREV,
  PLAYER_NEXT
} from '../constants'

export function play() {
  playPause() // TODO: move to app
  return actionCreator(PLAYER_PLAY)
}

export function pause() {
  playPause() // TODO: move to app
  return actionCreator(PLAYER_PAUSE)
}

export function prev() {
  prevTrack()
  return actionCreator(PLAYER_PREV)
}

export function next() {
  nextTrack()
  return actionCreator(PLAYER_NEXT)
}

export function like() {
  FavPlaying()
  return actionCreator(PLAYER_LIKE)
}

export function unlike() {
  FavPlaying()
  return actionCreator(PLAYER_UNLIKE)
}
