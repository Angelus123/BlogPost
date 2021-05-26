import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'
const navigationItems = (props) => (
<ul className='NavigationItems'>
    <NavigationItem link ="/" close={props.close}>About us</NavigationItem>
    <NavigationItem link ="/programming" close={props.close}>Programing Language</NavigationItem>
    <NavigationItem link ="/maintainance" close={props.close}>Maintainance</NavigationItem>
    <NavigationItem link ="/top-ten" close={props.close}>Top ten</NavigationItem>
    <NavigationItem link ="/" close={props.close}>About us</NavigationItem>
    <NavigationItem link ="/programming" close={props.close}>Programing Language</NavigationItem>
 
</ul>

)
export default navigationItems
// You are working on developing a website with HTML and are trying to embed a YouTube video on one of the pages, and use the code `<iframe width="420"height="315"src="https://www.youtube.com/url">` but when you view the build there is a block of code instead of the video. What could you do to fix this?