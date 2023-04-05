import styled from "styled-components";

function FormButton({title, type, pointColor, onClick}){
  return(
    <Submit pointColor={pointColor} title={title} type={type} onClick={onClick}>
      {title}
    </Submit>
  )
}

const Submit = styled.button`
  background: ${props=>props.pointColor? "#44628E" : "#fff" };
  color: ${props=>props.pointColor? "#fff" : "#44628E" };
  border: 1px solid ${props=>props.pointColor? "#fff":"#44628E"};
  width: 100%;
  border-radius: 5px;
  padding: 10px 45px;
  display: block;
  transition: all 0.5s;
  :hover{
    border: 1px solid ${props=>props.pointColor? "#44628E":"#fff"};
    background: ${props=>props.pointColor? "#fff" : "#44628E" };
    color: ${props=>props.pointColor? "#44628E" : "#fff" };
  }
`

export default FormButton;