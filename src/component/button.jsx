import styled from "styled-components";

function FormButton({title, type, className, pointColor, onClick, testid}){
  return(
    <Submit className={className} data-testid={testid} pointColor={pointColor} title={title} type={type} onClick={onClick}>
      {title}
    </Submit>
  )
}

const Submit = styled.button`
  background: ${props=>props.pointColor? "#44628E" : "#fff" };
  color: ${props=>props.pointColor? "#fff" : "#000" };
  border: 1px solid ${props=>props.pointColor? "#fff":"#44628E"};
  width: 100%;
  border-radius: 5px;
  padding: 10px 0;
  display: block;
  transition: all 0.5s;
  :hover{
    border: 1px solid #44628E;
    background: #44628E;
    color: #fff;
  }
`

export default FormButton;