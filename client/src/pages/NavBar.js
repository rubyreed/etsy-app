import React, {useContext} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {AuthContext} from "../providers/AuthProvider";
import { Container, Menu, Image, Button } from "semantic-ui-react";
import shoplogo from "../images/shoplogo.jpg";



const NavBar = () => {
  let nav = useNavigate();

  const { authenticated, handleLogout } = useContext(AuthContext);
  const renderAuthLinks = () => {
    if (authenticated) {
      return <Button style={{backgroundColor:"aqua", color:"grey"}} onClick={() => handleLogout(nav)}>Logout</Button>;
    }
  return (
    <Menu style={{backgroundColor:"aqua"}}>
      <Menu.Item>
         <Link style={{color:"grey"}} to="/register">Register</Link>
      </Menu.Item>
      <Menu.Item>
       <Link style={{color:"grey"}} to="/login">Login</Link>
       </Menu.Item>
    </Menu>
    )
  }
    return(
      <Menu style={{backgroundColor:"lightGrey"}}>
        <Image style={{width:"72px"}} src={shoplogo} alt="Ruby's Shop logo"/>
        <Menu.Item>
        <Link style={{color:"white"}} to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
        <Link style={{color:"white"}} to="/products">Products</Link>
        </Menu.Item>
        <Menu.Item>
        <Link style={{color:"white"}} to="/categories">Categories</Link>
        </Menu.Item>
        <Menu.Item>
        {renderAuthLinks()}
        </Menu.Item>
      <Container>
        <Outlet/>
      </Container>
    </Menu>
  )
};


export default NavBar;