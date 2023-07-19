import React from 'react'
import Header from './Header'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Layout = ({ isHome = false, children }) => {

    return (
        <div id="App" className="App">
            <Header isHome={isHome} />

            {children}
        </div>
    )
}

export default Layout