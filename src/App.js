import React from 'react'
import Pages from './pages/Pages'
import { DataProvider } from './GlobalState'

const App = () => {
  return (
    <DataProvider>
      <Pages />
    </DataProvider>
  )

}

export default App
