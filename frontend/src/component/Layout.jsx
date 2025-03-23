import React, { Children } from 'react'
import Nav from './nav/Nav'
import Buy from './Buy'
import FireRain from './FireRain'

const Layout = ({children}) => {
  return (
    <div>
      <Nav/>
      <FireRain/>
      {children}
      <Buy/>

    </div>
  )
}

export default Layout
