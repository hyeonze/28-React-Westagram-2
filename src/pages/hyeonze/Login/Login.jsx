import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { inputId } from '../../../redux/userId';
import './Login.scss';

const Login = () => {
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');
  const [isValidatedUser, setIsValidatedUser] = useState(false);

  const navigate = useNavigate();
  const changeIdInput = e => {
    const { value } = e.target;
    setIdInput(value);
  };

  const changePwInput = e => {
    const { value } = e.target;
    setPwInput(value);
  };

  useEffect(() => {
    setIsValidatedUser(idInput.indexOf('@') !== -1 && pwInput.length > 4);
  }, [idInput, pwInput]);

  // 메인으로 이동할 때 로직
  const goToMain = () => {
    idUpdate(idInput);
    navigate('/main-hyeonze');
  };

  const goToMainByEnterKey = e => {
    if (e.key === 'Enter' && isValidatedUser) goToMain();
  };

  // 리덕스 튜토리얼
  // const userId = useSelector(store => store.userId);
  const dispatch = useDispatch();

  const idUpdate = txt => {
    dispatch(inputId(txt));
  };

  // 회원가입시 사용할 로직
  // const signup = () => {
  //   fetch('http://10.58.4.22:8000/users/signup', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: idInput,
  //       password: pwInput,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       //console.log('결과: ', result.message)
  //       if (result.message === 'EMAIL_ALREADY_EXISTS') {
  //         console.log('Error : Duplicated');
  //       }
  //     });
  // };

  // 로그인시 사용할 로직
  // const login = () => {
  //   fetch('http://10.58.4.22:8000/users/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: idInput,
  //       password: pwInput,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       //console.log('결과: ', result.message)
  //       if (result.message === 'SUCCESS') {
  //         console.log('login SUCCESS');
  //       }
  //     });
  // };

  return (
    <div className="login">
      <div id="wrapper">
        <h1>westagram</h1>
        <form className="login_form" onKeyPress={goToMainByEnterKey}>
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="username"
            onChange={changeIdInput}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="userpassword"
            onChange={changePwInput}
          />
          <input
            className={isValidatedUser ? 'activated' : ''}
            disabled={!isValidatedUser}
            type="button"
            value="로그인"
            onClick={goToMain}
          />
        </form>
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default Login;
