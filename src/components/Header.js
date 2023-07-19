import React, { useRef, useState } from 'react';
import Icons from './Icons';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useEffect } from 'react';
import { Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Header = ({ isHome = false }) => {
    const navigate = useNavigate();
    const tittleRef = useRef()


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const goToHome = () => {
        navigate("/");
    }

    const onLoad = () => {
        gsap.timeline().fromTo(".letter",
            {
                x: -100,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                margin: 10,
                stagger: 0.1,
                delay: 0.5,
                duration: 0.5,
            })
            .to(".tittle", {
                marginTop: 200,
                delay: 0.5,
                duration: 0.5
            })
            .to(window, {
                scrollTo: "#wrap-1",
                delay: 0.5,
                duration: 1,
            })
    }

    const slideinTop = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: -200,

            },
            {
                opacity: 1,
                y: 0,
                delay: 0.5,
                duration: 0.8,
            }
        )
    }

    const menuDisplay = (elem) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: -200,

            },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
            }
        )
    }

    useEffect(() => {
        onLoad()
    }, [])

    useEffect(() => {
        slideinTop("#tittle")
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        menuDisplay("#menuDetails")
    };

    const handleMenuItemClick = (key) => {
        console.log(key)
        setIsMenuOpen(false);
        gsap.to(window, {
            scrollTo: `#${key.key}`,
            duration: 1,
        });
    };

    return (
        <header id="header" className="header">
            {!isHome ? <Icons type="BiLeftArrowAlt" size="8rem" action={() => goToHome()} /> : ""}
            <div id="tittle" className="">
                <h1 className='tittle' ref={tittleRef}>
                    <span className='letter'>P</span>
                    <span className='letter'>i</span>
                    <span className='letter'>x</span>
                    <span className='letter'>e</span>
                    <span className='letter'>l</span>
                    <span className='letter'>-</span>
                    <span className='letter'>P</span>
                    <span className='letter'>e</span>
                    <span className='letter'>r</span>
                    <span className='letter'>f</span>
                    <span className='letter'>e</span>
                    <span className='letter'>c</span>
                    <span className='letter'>t</span>
                </h1>
            </div>
            <span className='menuContainer'>
                <div>
                    <Button
                        className="menu-button"
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={toggleMenu}
                    />
                </div>

                <div id="menuDetails">
                    <Menu
                        className={`menuPerso ${isMenuOpen ? 'open' : ''}`}
                        mode="vertical"
                        ref={menuRef}
                    >
                        <Menu.Item key="home" onClick={handleMenuItemClick}>
                            Home
                        </Menu.Item>
                        <Menu.Item key="wrap-1" onClick={handleMenuItemClick}>
                            Puzzle 1
                        </Menu.Item>
                        <Menu.Item key="wrap-2" onClick={handleMenuItemClick}>
                            Puzzle 2
                        </Menu.Item>
                        <Menu.Item key="wrap-3" onClick={handleMenuItemClick}>
                            Puzzle 3
                        </Menu.Item>
                        <Menu.Item key="about" onClick={handleMenuItemClick}>
                            A Propos
                        </Menu.Item>
                    </Menu>
                </div>
            </span>

        </header>
    )
}

export default Header;

