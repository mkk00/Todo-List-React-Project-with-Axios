import styled from "styled-components";

function Divider(){
  return(
    <Hr/>
  )
}

const Hr = styled.hr`
  width: 30px;
  height: 3px;
  background: black;
`

export default Divider;