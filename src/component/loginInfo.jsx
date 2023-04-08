import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";

function LoginInfo(){
  const navigate = useNavigate();
  const [token, setToken] = useState('')
  const userInfo = localStorage.getItem('accessToken');

  useEffect(()=>{
    const userInfo = localStorage.getItem('accessToken');
    if(userInfo){
      setToken(userInfo);
    } else {
      setToken('');
    }
  }, [userInfo])

  const handleLogout = (e)=>{
    e.preventDefault();
    localStorage.removeItem('accessToken');
    setToken('');
    if(!localStorage.getItem('accessToken')) navigate('/');
  }
  return (
    <UserLoginInfo className="wrapper">
      {token ?
        <>
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
    height: 30px;
    background: none;
    border: 1px solid #44628E;
  }
`

export default LoginInfo;