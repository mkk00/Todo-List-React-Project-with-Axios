import { useState } from "react"; 'react';
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";

import FormInput from "../component/formInput";
import FormButton from "../component/button";
import Divider from "../component/divider";

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  
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
`

const ButtonBox = styled.div`
  width: 100%;
  margin: 20px auto 0 auto;
  display: flex;
  gap: 20px;
`

export default SignUp;