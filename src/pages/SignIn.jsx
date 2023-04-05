import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";

import FormInput from "../component/formInput";
import FormButton from "../component/button";
import Divider from "../component/divider";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrormsg, setEmailErrormsg] = useState('');
  const [passwordErrormsg, setPasswordErrormsg] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const currentValue = e.target.value;
    setEmail(currentValue);

    if(!currentValue){
      setEmailErrormsg('이메일을 입력해주세요.');
    } else if(currentValue.trim() === ''){
      setEmailErrormsg('공백문자는 사용할 수 없습니다.');      
    } else if(!currentValue.includes('@')){
      setEmailErrormsg('@는 반드시 포함되어야 합니다.');
    } else if(currentValue.split('@').length > 2){
      setEmailErrormsg('@는 한번만 사용 가능합니다.');
    } else{
      setEmailErrormsg('');
    }
  }
  
  const handlePasswordChange = (e) => {
    const currentValue = e.target.value;
    setPassword(currentValue);

    if(!(currentValue.length >= 8)){
      setPasswordErrormsg('비밀번호는 8자 이상이어야 합니다.');
    } else{
      setPasswordErrormsg('');
    }
  }

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    navigate('/todo');
  }

  const handleGoSignup = (e) => {
    e.preventDefault();
    navigate('/signup');
  }

  return(
    <section className="container">
      <Divider />
      <h2 className="sectionTitle">로그인</h2>
      <Form>
        <fieldset>
          <legend>로그인 폼</legend>
          <FormInput className="a11yHidden" id="loginId" label="이메일" name="email" placeholder="mkk@email.com" testid="email-input" type="eamil" value={email} onChange={handleEmailChange} />
          <FormInput className="a11yHidden" id="loginPassword" label="비밀번호" name="password" placeholder="비밀번호" testid="password-input" type="password" value={password} onChange={handlePasswordChange} />
        <div className="buttonBox">
          <FormButton testid="signin-button" title="로그인" type="button" onClick={handleSubmitLogin} />
          <FormButton testud="signup-button" title="회원가입" type="button" pointColor onClick={handleGoSignup} />
        </div>
        <p>{emailErrormsg}</p>
        <p>{passwordErrormsg}</p>
        </fieldset>
      </Form>
    </section>
  )
}

const Form = styled.form`
  width: 280px;
  margin: 0 auto;
  
  fieldset{    
    display: flex;
    flex-flow: column;
    gap: 20px;
  }

  input{
    width: 100%;
  }
  
  p{
    text-align: center;
    color: red;
    height: 15px;
  }

  .buttonBox button:last-child{
    margin-top: 10px;
  }
`

export default SignIn;