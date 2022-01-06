import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, Header } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
const Register = () => {
  const navigate = useNavigate();
  const { handleRegister } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      // let user know these don't match
      alert("passwords do not match");
      return;
    }
    // handleRegister in AuthProvider
    handleRegister({ email, password }, navigate);
  };
  return (
    <Container>
      <Header as='h1'>Register New User</Header>
      <Form onSubmit={handleSubmit}>
        <Header as='h4'>Email</Header>
        <Form.Input placeholder="enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Header as='h4'>Password</Header>
        <Form.Input placeholder="create password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Header as='h4'>Password Confirmation</Header>
        <Form.Input placeholder="verify password"
          value={passwordConfirmation}
          onChange={(e) => {
            setPasswordConfirmation(e.target.value);
          }}
        />
        <Button>Register</Button>
      </Form>
    </Container>
  );
};

export default Register;
