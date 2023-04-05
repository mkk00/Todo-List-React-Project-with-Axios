import styled from "styled-components";

import FormInput from "../component/formInput";
import FormButton from "../component/button";
import Divider from "../component/divider";

function SignUp() {
  return(
    <section className="container">
      <Divider />
      <h2 className="sectionTitle">회원가입</h2>
      <Form>
        <fieldset>
          <legend>회원가입 폼</legend>
          <FormInput label="이메일" placeholder="mkk@email.com" testid="email-input" />
          <FormInput label="비밀번호" placeholder="비밀번호" testid="password-input" />
          <FormInput label="비밀번호 확인" placeholder="비밀번호 확인" testid="re-password-input" />
          <ButtonBox>
            <FormButton title="취소" unActive type="button" />
            <FormButton testid="signup-button" title="회원가입" type="button" pointColor />
          </ButtonBox>
        </fieldset>
      </Form>
    </section>
  )
}

const Form = styled.form`
  width: 370px;
  margin: 0 auto;

  fieldset{    
    display: flex;
    flex-flow: column;
    gap: 20px;
  }
`

const ButtonBox = styled.div`
  width: 100%;
  margin: 40px auto 0 auto;
  display: flex;
  gap: 20px;
`

export default SignUp;