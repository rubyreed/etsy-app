import React, { useContext } from "react";
import {Link} from "react-router-dom";
import { Container, Header, Image, Button } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import shop from "../images/shop.jpg";

const Home = () => {
  const {authenticated} = useContext(AuthContext);
  if(authenticated){
  return (
    <Container>
      <Image style={{marginTop:"50px"}} className="shopImage" src={shop} alt="Ruby's Shop" fluid/>
    </Container>
  );
};
  return (
    <Container>
      <Header style={{margin:"50px", fontSize:"30px"}}>Welcome! Please &nbsp;
       <Button as={Link} to="/login" variant="text">Log In</Button> - or - <Button as={Link} to="/register" variant="text">Register</Button>
       </Header>
      <Image className="shopImage" src={shop} alt="Ruby's Shop" fluid/>
    </Container>
  )
};
export default Home;


