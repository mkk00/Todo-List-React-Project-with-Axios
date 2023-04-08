import {useState} from 'react';

import styled from "styled-components";

import FormInput from "../component/formInput";
import FormButton from "../component/button";

function TodoItem({className, originContent, onChange, modifyTodo, modify, setModefy, submitModifiedTodo}){
  const [edit, setEdit] = useState(originContent);
  
  const oneditContent = (e)=>{
    setEdit(e.target.value);
  }

  const cancelModify = (e)=>{
    e.preventDefault();
    setModefy(0);
  }
  return(
    <List>
      <FormInput className={className} name="isCompleted" type="checkbox" onChange={onChange} />
      {
        modify ?
        <>
          <FormInput value={edit} onChange={oneditContent} />
          <FormButton title="제출" type="button" onClick={submitModifiedTodo} />
          <FormButton title="취소" type="button" onClick={cancelModify} />
        </>
        :
        <>
          <span>{edit?edit:originContent}</span>
          <FormButton title="수정" type="button" onClick={modifyTodo} />
          <FormButton title="삭제" type="button" />
        </>
      }
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
    height: 41px;
    line-height: 41px;
  }
  & button{
    width: 80px;
  }

  input[type="checkbox"]{
    width: 28px;
  }
  input{
    width: 100%;
    height: 39.4px;
  }
`

export default TodoItem;