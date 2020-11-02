import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser } from '../../actions';
import { StyleLoginPage, Select, Stylebox, ButtonNext } from './Login.styles';

import Background from '../../common/images/talking.jpg';
import COUNTRIES_LIST from '../../common/data/countries';
import GENDER_LIST from '../../common/data/genderList';
const AGE_LIST = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];


const LoginPage = (props) => {
  const [ age, setAge ] = useState(null);
  const [ gender, setGender ] = useState(null);
  const [ country, setCountry ] = useState(null);
  let history = useHistory();

  function handleClick() {

    props.addUserLocally({
      age,
      gender,
      country
    });

    history.push("/chat");
  }

  return (
    <div style={{
        backgroundImage: `url(${Background})`,
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
      <StyleLoginPage>
        <Stylebox>
          <h1>Welcome</h1>
          <Select onChange={(e) => setCountry(e.target.value)} defaultValue="">
            <option disabled={true} value="">Choose country...</option>
            {
              COUNTRIES_LIST.map(e => (
                <option key={e.name}>
                  {e.name}
                </option>
              ))
            }
          </Select>
          <Select onChange={(e) => setGender(e.target.value)} defaultValue="">
            <option disabled={true} value="">Choose gender...</option>
            {
              GENDER_LIST.map(e => (
                <option key={e.name}>
                  {e.name}
                </option>
              ))
            }
          </Select>
          <Select onChange={(e) => setAge(e.target.value)} defaultValue="">
            <option disabled={true} value="">Choose age...</option>
            {
              AGE_LIST.map(age => (
                <option key={age}>
                  { age }
                </option>
              ))
            }
          </Select>
          <ButtonNext disabled={!age || !gender|| !country} onClick={handleClick}>
            Next
          </ButtonNext>
        </Stylebox>

      </StyleLoginPage>
    </div>
  )

};

const mapDispatchToProps = {
  addUserLocally: addUser
};
const mapStateToProps = state => {
  console.log('Login state', state);
  return {
    state
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
