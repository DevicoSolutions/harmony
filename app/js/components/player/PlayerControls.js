import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions/player'

class PlayerControls extends Component {
  render() {
    const {
      isPlaying,
      isFavorite,
      prev,
      play,
      pause,
      next,
      like,
      unlike
    } = this.props
    return (
      <div id="new-player-controls">
        <span id="player_prevSong" onClick={prev}>
          <i className="icon icon-fast-backward thin"></i>
        </span>
        <span id="player_play-pause" onClick={isPlaying ? pause : play}>
          <i id="playpause_icon" className={`icon ${isPlaying ? 'icon-pause' : 'icon-play'}`}></i>
        </span>
        <span id="player_nextSong" onClick={next}>
          <i className="icon icon-fast-forward thin"></i>
        </span>
        <span id="player_favorite" onClick={isFavorite ? unlike : like} className={isFavorite ? 'active': ''}>
          <i className="icon icon-heart" ></i>
        </span>
      </div>
    )
  }
}

export default connect(
  state => ({
    isPlaying: state.player.isPlaying,
    isFavorite: state.player.isFavorite
  }),
  actions
)(PlayerControls)
