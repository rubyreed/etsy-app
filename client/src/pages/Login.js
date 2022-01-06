import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Button, Container, Form} from "semantic-ui-react";
const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password }, navigate);
  };
  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <p>Email</p>
        <Form.Input placeholder='enter email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p>Password</p>
        <Form.Input placeholder= "enter password" type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br/>
        <Button>Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
