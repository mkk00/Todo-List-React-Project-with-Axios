import { useState, useEffect } from "react"; 'react';
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";

import FormInput from "../component/formInput";
import FormButton from "../component/button";
import Divider from "../component/divider";

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errormsg, setErrormsg] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const currentValue = e.target.value;
    setEmail(currentValue);
    if(!currentValue){
      setErrormsg('이메일을 입력해주세요.');
    } else if(currentValue.trim() === ''){
      setErrormsg('공백문자는 사용할 수 없습니다.');      
    } else if(!currentValue.includes('@')){
      setErrormsg('@는 반드시 포함되어야 합니다.');
    } else if(currentValue.split('@').length > 2){
      setErrormsg('@는 한번만 사용 가능합니다.');
    } else{
      setErrormsg('');
    }
  }

  useEffect(()=>{

  }, [email,password, errormsg])
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  const handleBackPage = (e) => {
    e.preventDefault();
    navigate(-1);
  }

  return(
    <section className="container">
      <Divider />
      <h2 className="sectionTitle">회원가입</h2>
      <Form>
        <fieldset>
          <legend>회원가입 폼</legend>
          <FormInput label="이메일" name="email" placeholder="mkk@email.com" testid="email-input" type="eamil" value={email} onChange={handleEmailChange} />
          <FormInput label="비밀번호" name="password" placeholder="비밀번호" testid="password-input" type="password" value={password} onChange={handlePasswordChange} />
          <p>{errormsg}</p>
          <ButtonBox>
            <FormButton title="취소" type="button" onClick={handleBackPage} />
            <FormButton testid="signup-button" title="회원가입" type="button" pointColor onClick={handleSubmit} />
          </ButtonBox>
        </fieldset>
      </Form>
    </section>
  )
}

const Form = styled.form`
  width: 350px;
  margin: 0 auto;

  fieldset{
    display: flex;
    flex-flow: column;
    gap: 20px;
  }

  p{
    text-align: center;
    color: red;
    margin-top: 20px;
    height: 10px;
  }
`

const ButtonBox = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
`

export default SignUp;