'use client'
import React from 'react'
import AppContext from './AppContext'

const AppState = ({
  children,
}

) => {
  return (
    <AppContext.Provider value={{ m:10}}> {children}</AppContext.Provider>
  )
}

export default AppState