import React from "react";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../services/auth";

import styled from "styled-components";

// lesson: styled components HAVE to be above component declaration
const LoginContainerStyled = styled.div`
width: fit-content;
padding: 1rem;
margin: auto;
/* border: 1px solid black; */
`

const FormStyled = styled.form` 
display: flex;
flex-direction: column;
gap: 1.25rem;

label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

/* lesson: customize input focus if want to */
.input {
  padding: 0.25rem;
  border-radius: 10px;
  &:focus {
    /* outline: none; */
    /* box-shadow: 0px 0px 5px #61C5FA; */
    /* border:1px solid #5AB0DB; */
  }
}

.submit {
  margin-block-start: 1.25rem;
  /* width: 100%; */
  /* margin-bottom: 1rem; */
  background-color: var(--green-btn-background);
  border: 2px solid var(--btn-background-based-on-general);
  box-shadow: 0px 2px 1px var(--gray-light);
  color: var(--text-black);
  transition: all 0.35s ease-Out;
  cursor: pointer;
  min-width: -webkit-min-content;
  min-width: min-content;
  padding: 0.5rem;
  /* margin-inline: auto; */
  /* font-size: 16px; */
  border-radius: 10px;
  /* display: block; */
  &:hover {
  background-color: var(--btn-background-based-on-general);
  }
}
`
class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  };

  handleUpdate = (event) => {
    console.log(this.state)
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(this.state);
  };

  render() {
    if (isLoggedIn()) {
      // navigate(`/app/profile`);
      navigate(`/`);
    }


    return (
      <LoginContainerStyled>
        <h1>Log in</h1>
        <FormStyled
          method="post"
          onSubmit={(event) => {
            this.handleSubmit(event);
            // navigate(`/app/index`);
            navigate(`/`);
          }}
        >
          <label>
            Username
            <input
              className="input"
              type="text"
              name="username"
              onChange={this.handleUpdate}
              placeholder="test" />
          </label>

          <label>
            Password
            <input
              className="input"
              type="password"
              name="password"
              onChange={this.handleUpdate}
              placeholder="123"
            />
          </label>
          <input
            className="submit"
            type="submit"
            value="Log In" />
        </FormStyled>
      </LoginContainerStyled>
    );
  }
}

export default Login;
