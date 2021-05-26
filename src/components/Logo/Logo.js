import React from 'react'
import burgerLog from '../../assets/Logo/Logo.PNG'
import {Link} from 'react-router-dom'
import './Logo.css'
const logo = (props) => (
<Link to="/posts">
    <div className= 'Logo' style={{height:props.height}} onClick={props.close}>
    
    <img src ={burgerLog} alt ="MyBurger" />
</div>
</Link>
)
export default logo