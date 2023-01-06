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
const ErrorAlert = styled.div`
    font-size: 0.75rem;
    text-align: center;
    background-color: var(--red-btn-color);
    padding: 0.75rem 0.75rem;
    border: 1px solid var(--red-btn-color-darker);
    border-radius: 10px;
    margin-block-end: 1rem;
    transition: all 0.35s ease-Out;
    /* display: none; */

    .block {
      display: block;
    }

    .no-error {
      display: none;
    }
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
  // lesson: class components have a special method state and setState. This is where the state goes
  state = {
    username: ``,
    password: ``,
    // put all state under the state object, then update keys 
    error: false,
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

  // lesson proper async await
  fireError = async () => {
    const shortTimeOut = delay => new Promise(resolve => setTimeout(resolve, delay));

    console.log("fire error fired!")
    // lesson: how I was able to change the state, changing just the one object within the state. rest stays same
    this.setState((state) => (state.error = true));
    await shortTimeOut(3000)
    this.setState((state) => (state.error = false));


  }

  render() {
    if (isLoggedIn()) {
      navigate(`/`);
    }




    return (
      <LoginContainerStyled>
        <h1>Log in</h1>
        {/* lesson conditional rendering of an element over another */}
        <div>{this.state.error ? <ErrorAlert>Wrong username or password</ErrorAlert> : null}</div>
        <FormStyled
          method="post"
          onSubmit={(event) => {
            this.handleSubmit(event);
            if (isLoggedIn()) {
              navigate(`/`);
            } else if (!isLoggedIn()) {
              // lesson: needed to use this.fireError() to be defined. w/o this. it was undefined. 
              this.fireError()
            }
          }
          }
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
      </LoginContainerStyled >
    );
  }
}

export default Login;
