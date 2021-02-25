import React, {useState} from 'react';
import {connect} from 'react-redux';
import {createNewUser} from '../../actions';
import {Link} from 'react-router-dom';
import {Container, LoginForm, Button, Slogan, TextField, ErrorMessage, SendAgainLink} from './Confirm.styles';
import Logo from '../../common/icons/logo64_64.svg'
import Background from '../../common/images/photos.png';
import { Overlay } from "./Confirm.styles";

const SignUpPage = (props) => {
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
            <h1>Confirm your email</h1>

            <div>
              <p style={{marginBottom: 10}}>
                Please check your email and confirm your account.
              </p>
              <SendAgainLink>
                Have not receive email? <a href="">Send again</a>
              </SendAgainLink>
            </div>

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
