import styled from 'styled-components';

import background from '../assets/museum.jpg';

function Main() {
  return (
    <Div className="container">
      <span>Simple TodoList</span>
    </Div>
  );
}

const Div = styled.div`
  width: 800px;
  span {
    margin: 50px auto;
    -webkit-text-fill-color: transparent;
    color: transparent;
    display: inline-block;
    font-size: 140px;
    font-weight: bold;
    text-align: center;
    background: url(${background}) no-repeat center center;
    background-size: 600px auto;
    -webkit-background-clip: text;
    background-clip: text;
    animation: moveTitle 4s infinite;
    cursor: pointer;
  }

  @keyframes moveTitle {
    0% {
      transform: rotate(1deg);
    }
    3% {
      transform: rotate(-1deg);
    }
    6% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export default Main;
