import React,{Component} from 'react'
// import Aux from '../../hoc/Auxi/Auxilliary'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import './Layout.css'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
class Layout extends Component{
    state = {
        showSideDrawer:false
    }
    sideDrawerClosedHandler = () => {
                this.setState({showSideDrawer: false})

    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer}
            
        } )
      
    }
    render(){
        return (
            <React.Fragment>
                     <Toolbar 
        
                    open={this.state.showSideDrawer} 
                    toggle ={this.sideDrawerToggleHandler }
                    /> 
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed ={this.sideDrawerClosedHandler }/>
                <main className ='content'>
                    {this.props.children}  
                </main>
            </React.Fragment>
           
         
   
        )

    }
}

export default Layout