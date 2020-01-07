import React from 'react'
import Nav from './nav'


const Layout = ({ children }) => (
    <div className='main'>
        <Nav />

        {children}

        <style jsx>{`
            .main {
                width: 60%;
                margin: 0 auto;
            }
        `}</style>
    </div>
)

export default Layout
