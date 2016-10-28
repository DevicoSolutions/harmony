import React from 'react'
import {render} from 'react-dom'
import PlayerControls from './components/player/PlayerControls'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

function Root() {
  const store = configureStore()

  return (
    <Provider store={store}>
      <PlayerControls />
    </Provider>
  )
}

render(<Root />, document.getElementById('player-controls'))

