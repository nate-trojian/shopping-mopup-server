import React from 'react'
import {Route, IndexRoute } from 'react-router'

import Player1 from './Player1'
import Player2 from './Player2'

export default (
  <Router>
    <Route path="/player1">
      <Player1 />
    </Route>
    <Route path="/player2">
      <Player2 />
    </Route>
  </Router>
)
