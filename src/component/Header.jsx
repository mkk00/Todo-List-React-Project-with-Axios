import { Link } from 'react-router-dom';

import styled from "styled-components";

import LoginInfo from './loginInfo.jsx';

import logo from '../assets/logo.png';

function Header() {  
  return(
    <NavBar>
      <div className="navWrapper">
        <Link to="/">
          <img src={logo} alt="mkk 로고" />
        </Link>        
        <NavList>
          <Link to="/">홈</Link>
          <Link to="/signin">로그인</Link>
          <Link to="/signup">회원가입</Link>
          <Link to="/todo">할일</Link>
        </NavList>
        <LoginInfo />
      </div>
    </NavBar>
  )
}

const NavBar = styled.nav`
  width: 100%;
  border-bottom: 4px double #bdcfe9;
  position: fixed;
  top: 0;
  left: 0;
  
  img{
    width: 90px;
    margin-top: 24px;
  }

  .navWrapper{
    width: 820px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  `

const NavList = styled.div`
  width: 480px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  & a{
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
    padding: 10px 0;
    border: 1px solid #44628E;
    border-radius: 20px;
    text-align: center;
    background-color: #fff;
  }

  & a:hover{
    background-color: #44628E;
    color: #fff;
    transition: 0.5s;
  }

  & a:first-child{
    background-color: #44628E;
    color: #fff;    
  }
`

export default Header;