import styled from "styled-components";

import FormInput from "../component/formInput";
import FormButton from "../component/button";
import Divider from "../component/divider";

function SignIn() {
  return(
    <section className="container">
      <Divider />
      <h2 className="sectionTitle">로그인</h2>
      <Form>
        <fieldset>
          <legend>로그인 폼</legend>
          <FormInput className="a11yHidden" id="loginId" placeholder="아이디" label="아이디" name="login" type="text" />
          <FormInput className="a11yHidden" id="loginPassword" placeholder="비밀번호" label="비밀번호" name="password" type="text" />
        </fieldset>
        <div className="buttonBox">
          <FormButton title="로그인" type="button" pointColor />
          <FormButton title="회원가입" type="button" pointColor />
        </div>
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

  .buttonBox{
    margin-top: 20px;
  }

  .buttonBox button:last-child{
    margin-top: 10px;
  }
`

export default SignIn;