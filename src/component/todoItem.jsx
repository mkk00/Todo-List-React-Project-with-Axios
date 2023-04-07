import styled from "styled-components";

import FormInput from "../component/formInput";
import FormButton from "../component/button";

function TodoItem({content, onChange}){
  return(
    <List>
      <FormInput name="isCompleted" type="checkbox" onChange={onChange} />
      <span>{content}</span>
      <FormButton title="수정" type="button" />
      <FormButton title="삭제" type="button" />
    </List>
  )
}

const List = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  & span{
    display: inline-block;
    width: 100%;
    padding: 5px;
  }
  & button{
    width: 80px;
  }
`

export default TodoItem;