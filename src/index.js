import React from 'react'
import ReactDOM from 'react-dom'
import Message from './js/Message'

import './css/style.css'

ReactDOM.render(
  <Message />,
  document.getElementById('react-container') // eslint-disable-line no-undef
)

if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef  
  // Needed for Hot Module Replacement
  module.hot.accept() // eslint-disable-line no-undef  
}

