import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {logInUser} from '../../actions';
import Dropdown from '../../components/Dropdown';
import {Container, Overlay, LoginForm, Button, Slogan, LoaderContainer, SignInLink, TextField, ErrorMessage} from './Login.styles';
import { COUNTRIES_LIST } from '../../common/data/countries';
import { GENDER_LIST } from '../../common/data/genderList';
import Logo from '../../common/icons/logo64_64.svg'
import Background from '../../common/images/photos.png';
// import { ErrorMessage, SignInLink, TextField } from "../SignUp/SignUp.styles";
import Loader from '../../components/Loader';

const SignInPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function registerUser() {

    props.signInUser({
      email,
      password
    })
  }

  const onEmailChange = ({ target }) => {
    setEmail(target.value)
  };

  const onPasswordChange = ({ target }) => {
    setPassword(target.value)
  };


  // const [gender, setGender] = useState('');
  // const [country, setCountry] = useState('');
  // const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  // const [showCountriesDropdown, setShowCountriesDropdown] = useState(false);
  // const history = useHistory();
  //
  // function redirectToChat() {
  //   props.addUserLocally({
  //     gender,
  //     country
  //   });
  //
  //   history.push("/chat");
  // }
  //
  // const onClickAway = () => {
  //   setShowGenderDropdown(false);
  //   setShowCountriesDropdown(false);
  // };
  //
  // const onCountriesSelectHandler = (val) => {
  //   setCountry(val);
  //   setShowCountriesDropdown(false);
  // };
  //
  // const onGenderSelectHandler = (val) => {
  //   setGender(val);
  //   setShowGenderDropdown(false);
  // };
  //
  // const onCountriesListTrigger = () => {
  //   setShowCountriesDropdown(!showCountriesDropdown);
  //   setShowGenderDropdown(false);
  // };
  //
  // const onGenderListOpenTrigger = () => {
  //   setShowGenderDropdown(!showGenderDropdown);
  //   setShowCountriesDropdown(false);
  // };

  return (
    <Container
      style={{ backgroundImage: `url('${Background}')`}}
      // onClick={onClickAway}
    >
      <Overlay>
        <LoginForm>
          <Slogan>
            <img src={Logo} alt=""/>
            <span>Meet. Chat. Enjoy.</span>
          </Slogan>
          <div>
            <h1>Log in</h1>
            <div style={{ marginBottom: 20 }}>
              <TextField
                onChange={onEmailChange}
                placeholder={'Your email'}
              />
            </div>

            <div>
              <TextField
                type="password"
                onChange={onPasswordChange}
                placeholder={'Your password'}
              />
            </div>

            {
              props.errorMessage && (
                <ErrorMessage>{props.errorMessage}</ErrorMessage>
              )
            }

            <SignInLink>
              <Link to="/sign-in">Forgot password?</Link>
            </SignInLink>

            {
              props.isLoading && (
                <LoaderContainer>
                  <Loader />
                </LoaderContainer>
              )
            }

            <Button
              disabled={!email || !password}
              onClick={registerUser}
            >Log In
            </Button>
          </div>
        </LoginForm>

        {/*<LoginForm>*/}
        {/*  <Slogan>*/}
        {/*    <img src={Logo} alt=""/>*/}
        {/*    <span>Meet. Chat. Enjoy.</span>*/}
        {/*  </Slogan>*/}
        {/*  <div>*/}
        {/*    <h1>Welcome.</h1>*/}
        {/*    <div style={{ marginBottom: 20 }}>*/}
        {/*      <Dropdown*/}
        {/*        isOpen={showGenderDropdown}*/}
        {/*        options={GENDER_LIST}*/}
        {/*        value={gender}*/}
        {/*        onSelect={onGenderSelectHandler}*/}
        {/*        onClickHandler={onGenderListOpenTrigger}*/}
        {/*        placeholder={'Choose yor gender'} />*/}
        {/*    </div>*/}

        {/*    <div style={{ marginBottom: 20 }}>*/}
        {/*      <Dropdown*/}
        {/*        isOpen={showCountriesDropdown}*/}
        {/*        options={COUNTRIES_LIST}*/}
        {/*        value={country}*/}
        {/*        onClickHandler={onCountriesListTrigger}*/}
        {/*        onSelect={onCountriesSelectHandler}*/}
        {/*        placeholder={'Choose yor country'} />*/}
        {/*    </div>*/}

        {/*    <Button*/}
        {/*      onClick={redirectToChat}*/}
        {/*      disabled={!gender || !country}*/}
        {/*    >NEXT*/}
        {/*    </Button>*/}
        {/*  </div>*/}
        {/*</LoginForm>*/}
      </Overlay>
    </Container>
  )

};

const mapDispatchToProps = {
  signInUser: logInUser
};
const mapStateToProps = state => {
  return {
    errorMessage: state.userReducer.errorMessage,
    isLoading: state.userReducer.loading
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
