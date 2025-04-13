"use client";

import { useState, useEffect } from "react";
import AppData from "@data/app.json";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { gsap } from "gsap";

const SidebarLayout = ( { onepage } ) => {
    const [toggle, setToggle] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const asPath = usePathname();

    const isPathActive = (path) => {
        return (asPath.indexOf(path) !== -1) && asPath === path;
    };

    const handleSubMenuClick = (index, e) => {
        e.preventDefault();
        setActiveSubMenu(activeSubMenu === index ? null : index);
    };
    
    useEffect(() => {
        // close mobile menu
        setToggle(false);
    }, [asPath])

    const menuOpen = () => {
        setToggle(!toggle);
    }

    const handleOneMenuClick = (index, e) => {
        e.preventDefault();

        console.log('test3');
        
        const target = e.target || e.srcElement;
        const targetId = document.querySelector(target.getAttribute('href'));
        const offsetY = window.innerWidth < 992 ? 180 : 90;
  
        gsap.to(window, {
          duration: 1,
          ease: 'sine',
          scrollTo: {
              y: targetId,
              offsetY: offsetY
          }
        });

        setToggle(false);
    };

    return (
        <>
            {/* top panel */}
            <div className="mil-top-panel">
                <Link href="/" className="mil-logo mil-c-gone">{AppData.header.logoSymbol}</Link>
                <div className={`mil-menu-btn ${toggle ? "mil-active" : ""}`} onClick={() => menuOpen() }><span></span></div>
            </div>
            {/* top panel end */}

            <div className={`mil-sidebar ${toggle ? "mil-active" : ""}`}>
                <ul className="mil-social mil-c-gone">
                    {AppData.header.social.map((item, index) => (
                    <li key={`header-social-item-${index}`}><a href={item.link} target="blank">{item.label}</a></li>
                    ))}
                </ul>
                <div>
                    <h2 className="mil-fs24 mil-mb60">{AppData.profile.name}</h2>
                    {onepage == 1 ? (
                    <ul className="mil-main-menu mil-onepage-menu mil-c-gone">
                        {AppData.header.menuOnepage.map((item, index) => (
                        <li className={`menu-item ${item.children.length > 0 ? "menu-item-has-children" : ""} ${isPathActive(item.link) ? "current-menu-item" : ""}`} key={`header-menu-item-${index}`}>
                            <Link href={item.link} onClick={item.link.includes('#') ? (e) => handleOneMenuClick(index, e) : null}>{item.label}</Link>
                            {item.children.length > 0 && (
                            <ul className={activeSubMenu === index ? 'sub-menu mil-active' : 'sub-menu'}>
                                {item.children.map((subitem, subIndex) => (
                                <li key={`header-submenu-${index}-item-${subIndex}`} className={isPathActive(subitem.link) ? "menu-item current-menu-item" : "menu-item"}>
                                    <Link href={subitem.link}>
                                        {subitem.label}
                                    </Link>
                                </li>
                                ))}
                            </ul>
                            )}
                        </li>
                        ))}
                    </ul>
                    ) : (
                    <ul className="mil-main-menu mil-c-gone">
                        {AppData.header.menu.map((item, index) => (
                        <li className={`menu-item ${item.children.length > 0 ? "menu-item-has-children" : ""} ${isPathActive(item.link) ? "current-menu-item" : ""}`} key={`header-menu-item-${index}`}>
                            <Link href={item.link} onClick={item.children.length > 0  ? (e) => handleSubMenuClick(index, e) : null}>{item.label}</Link>
                            {item.children.length > 0 && (
                            <ul className={activeSubMenu === index ? 'sub-menu mil-active' : 'sub-menu'}>
                                {item.children.map((subitem, subIndex) => (
                                <li key={`header-submenu-${index}-item-${subIndex}`} className={isPathActive(subitem.link) ? "menu-item current-menu-item" : "menu-item"}>
                                    <Link href={subitem.link}>
                                        {subitem.label}
                                    </Link>
                                </li>
                                ))}
                            </ul>
                            )}
                        </li>
                        ))}
                    </ul>
                    )}
                </div>
                <p className="mil-soft" dangerouslySetInnerHTML={{__html : AppData.footer.copy}} />
            </div>
        </>
    );
};
export default SidebarLayout;