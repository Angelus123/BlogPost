import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = () => (
<ul className='NavigationItems'>
    <NavigationItem link ="/" active>About us</NavigationItem>
    <NavigationItem link ="/">Programing Language</NavigationItem>
    <NavigationItem link ="/">Maintainance</NavigationItem>
    <NavigationItem link ="/">Top ten</NavigationItem>
</ul>
)
export default navigationItems