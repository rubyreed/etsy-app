import { useContext } from "react";
import { Container, Header, Button } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import {Link} from "react-router-dom";
const Protected = () => {
  const auth = useContext(AuthContext);
  return (
    <Container>
      <Header as='h1' style={{marginBottom:"20px"}}>Welcome to Ruby's Shop!</Header>
      <Header as='h4'>Hey {auth.email}, click below to see what we have for sale.</Header>
      <Button style={{marginTop:"50px"}} as={Link} to="/products" variant="text">Shop Products</Button>
      {auth.authenticated && <p style={{marginTop:"20px"}}>You are logged in!</p>}
      {!auth.authenticated && <p>ERROR SHOULD NOT BE HERE</p>}
    </Container>
  );
};
export default Protected;
