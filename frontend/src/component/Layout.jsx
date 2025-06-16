import React, { Children } from 'react'
import Nav from './nav/Nav'
import Buy from './Buy'
import FuturisticFooter from './FuturisticFooter'
const Layout = ({children}) => {
  return (
    <div>
      <Nav/>
      {children}
<FuturisticFooter/>
    </div>
  )
}

export default Layout
