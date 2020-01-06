import React from 'react'
import Nav from './nav'


const Layout = ({ children }) => (
    <div>
        <Nav />

        {children}
        <style jsx>{`
      
    `}</style>
    </div>
)

export default Layout
