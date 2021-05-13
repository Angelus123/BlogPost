import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = () => (
<ul className='NavigationItems'>
    <NavigationItem link ="/" active>About us</NavigationItem>
    <NavigationItem link ="/programming">Programing Language</NavigationItem>
    <NavigationItem link ="/maintainance">Maintainance</NavigationItem>
    <NavigationItem link ="/top-ten">Top ten</NavigationItem>
</ul>
)
export default navigationItems