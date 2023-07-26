import React from 'react'
import Header from './Header'

const Layout = ({ isHome = false, children }) => {

    return (
        <div id="App" className="App">
            <Header isHome={isHome} />

            {children}
        </div>
    )
}

export default Layout