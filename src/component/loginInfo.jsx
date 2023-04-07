import styled from "styled-components";

function LoginInfo(){
  const userInfo = localStorage.getItem('accessToken');
  const handleLogout = (e)=>{
    e.preventDefault();
    localStorage.removeItem('accessToken');
  }
  return (
    <UserLoginInfo className="wrapper">
      {userInfo ?
        <>
          <div className="userInformation">
            반갑습니다.
          </div>
          <button type="button" onClick={handleLogout}>
            로그아웃
          </button>
        </> :
        <span>
          로그인해주세요.
        </span>
      }
    </UserLoginInfo>
  )
}

const UserLoginInfo = styled.div`
  width: 120px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
    font-weight: bold;

  .userInformation{
    width: 100px;
    text-align: right;
  }

  button{
    width: 80px;
  }
`

export default LoginInfo;