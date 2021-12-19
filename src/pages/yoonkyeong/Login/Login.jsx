import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

export default function LoginYoonkyeong() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-yoonkyeong');
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      goToMain();
    }
  };
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const handleIdInput = e => {
    setId(e.target.value);
  };
  const handlePasswordInput = e => {
    setPassword(e.target.value);
  };
  const checkCondition = e => {
    return (id.includes('@') && password.length) > 5 ? true : false;
  };
  return (
    <div className="login">
      <div className="logoWrapper">
        <h1>Westagram</h1>
      </div>
      <div className="loginWrapper">
        <input
          type="text"
          id="idInput"
          onChange={handleIdInput}
          onKeyUp={checkCondition}
          onKeyPress={onKeyPress}
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          type="password"
          id="passwordInput"
          onChange={handlePasswordInput}
          onKeyUp={checkCondition}
          onKeyPress={onKeyPress}
          placeholder="비밀번호"
        />
        <button
          className={checkCondition() ? 'validBtn' : 'unvalidBtn'}
          //backgroundcolor를 바꾸려다 보니 클래스 이름을 바꾸게 되었습니다.
          //scss페이지의 요소 하나만 바꾸는 방법은 없을까요?
          disabled={checkCondition() ? false : 'disabled'}
          onClick={goToMain}
        >
          로그인
        </button>
        <div className="forgotPassword"> 비밀번호를 잊으셨나요? </div>
      </div>
    </div>
  );
}
