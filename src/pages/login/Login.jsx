import React, { useContext, useState } from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { publicRequest } from "../../Request";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://lh6.googleusercontent.com/WFftQho92lk3CmhtYlupzOuADqz5OPzOowa995yRsVPoRH3puyylVlsWI5nhCf6pjKw=w2400")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  ${mobile({ width: "77%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin: 0 0 10px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  font-size: 15px;
  color: white;
  cursor: pointer;
  margin: 15px 0 0 0;
  &:hover{
    background-color: rgb(15, 104, 104);
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  margin-top: 10px;
  color: red;
`;

const Links = styled.a`
  cursor: pointer;
`;

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  })
  const navigate = useNavigate();

  const {loading, error,dispatch} = useContext(AuthContext)

  const handleChange = (e) => {
    setCredentials((prev)=> ({...prev, [e.target.id]: e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"})
    try {
      const res = await publicRequest.post("/auth/login", credentials);
      dispatch({type: "LOGIN_SUCCESS", payload: res.data})
      console.log(res);
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error });
    }
  };
  console.log(credentials);

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Username"
            id="username"
            type="text"
            onChange={handleChange}
          />
          <Input
            placeholder="Password"
            id="password"
            type="password"
            onChange={handleChange}
          />
          <Link to="/register">
            <Links>Not a User? Create a new account!</Links>
          </Link>
          <Button disabled={loading} onClick={handleClick}>LOGIN</Button>
          {/* {error && <span>{error.message}</span>} */}
          {error && <Error>Something went wrong</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
