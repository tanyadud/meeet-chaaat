import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createNewUser} from '../../actions';
import {Link} from 'react-router-dom';
import {Container, LoginForm, Button, Slogan, TextField, ErrorMessage, SignInLink, LoaderContainer, Overlay} from './SignUp.styles';
import Logo from '../../common/icons/logo64_64.svg'
import Background from '../../common/images/photos.png';
import Loader from "../../components/Loader";

const SignUpPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');


  function registerUser() {
    if (emailError) {
      setEmailError('')
    }

    if (passwordError) {
      setPasswordError('')
    }

    if (!isEmailValid()) {
      return setEmailError('Email is invalid')
    }
    if (!isPasswordValid()) {
      return setPasswordError('Password should have length > 6')
    }

    props.signUpUser({
      email,
      password
    })
  }

  const onEmailChange = ({target}) => {
    setEmail(target.value)
  };

  const onPasswordChange = ({target}) => {
    setPassword(target.value)
  };

  const isEmailValid = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(
      re.test(String(email).toLowerCase())
    );
    return re.test(String(email).toLowerCase());
  };

  const isPasswordValid = () => {
    return password.length > 6
  };

  return (
    <Container
      style={{backgroundImage: `url('${Background}')`}}>
      <Overlay>
        <LoginForm>
          <Slogan>
            <img src={Logo} alt=""/>
            <span>Meet. Chat. Enjoy.</span>
          </Slogan>
          <div>
            <h1>Sign up</h1>
            <div style={{marginBottom: 20}}>
              <TextField
                onChange={onEmailChange}
                placeholder={'Your email'}
              />
              {
                emailError && (
                  <ErrorMessage>{emailError}</ErrorMessage>
                )
              }
            </div>

            <div>
              <TextField
                type="password"
                onChange={onPasswordChange}
                placeholder={'Your password'}
              />
              {
                passwordError && (
                  <ErrorMessage>{passwordError}</ErrorMessage>
                )
              }
            </div>
            <SignInLink>
              If you have an account. Please <Link to="/sign-in">Sign in</Link>
            </SignInLink>

            {
              props.isLoading && (
                <LoaderContainer>
                  <Loader />
                </LoaderContainer>
              )
            }

            <Button
              onClick={registerUser}
            >NEXT
            </Button>
          </div>
        </LoginForm>
      </Overlay>
    </Container>
  )

};

const mapDispatchToProps = {
  signUpUser: createNewUser
};
const mapStateToProps = state => {
  return {
    state
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
