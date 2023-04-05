import styled from "styled-components";

function FormInput({inputId, type, label, onChange, name, required, value, className, placeholder, disabled, testid}){
  return(
    <Input className={inputId}>
      <label className={className} htmlFor={inputId}>{label}</label>
      <input data-testid={testid} disabled={disabled} id={inputId} name={name} placeholder={placeholder} required={required} type={type} value={value} onChange={onChange} />
    </Input>
  )
}

const Input = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input{
    height: 40px;
    border: 1px solid #999;
    border-radius: 5px;
    padding: 0 15px;
  }
  input::placeholder{
    color: #999;
  }
  input:focus{
    outline: none;
  }
`

export default FormInput;