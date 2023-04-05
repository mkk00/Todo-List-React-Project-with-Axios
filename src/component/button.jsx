import styled from "styled-components";

function FormButton({title, type, className, pointColor, onClick, testid, disabled}){
  return(
    <Submit className={className} data-testid={testid} disabled={disabled} pointColor={pointColor} title={title} type={type} onClick={onClick}>
      {title}
    </Submit>
  )
}

const Submit = styled.button`
  background: ${props=>props.pointColor? (props.disabled? "#999":"#44628E") : "#fff" };
  color: ${props=>props.pointColor? "#fff" : "#000" };
  border: 1px solid ${props=>props.pointColor? "#fff":"#44628E"};
  width: 100%;
  border-radius: 5px;
  padding: 10px 0;
  display: block;
  transition: all 0.5s;
  cursor: ${props=>props.disabled? "not-allowed": "pointer"};
  :hover{
    border: 1px solid ${props=>props.disabled? "#fff":"#44628E"};
    background: ${props=>props.disabled? "#999":"#44628E"};
    color: #fff;
  }
`

export default FormButton;