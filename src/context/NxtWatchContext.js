import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideosList: [],
  saveVideoButtonClicked: () => {},
})

export default NxtWatchContext
