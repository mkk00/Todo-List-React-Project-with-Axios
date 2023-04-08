import {useState, useEffect} from 'react';

import styled from "styled-components";

import FormInput from "../component/formInput";
import FormButton from "../component/button";

function TodoItem({originContent, onChange}){
  const [modify, setModefy] = useState(0);
  const [edit, setEdit] = useState(originContent);

  const submitModifiedTodo = (e)=>{
    e.preventDefault();
    setModefy(0);

  }
  const oneditContent = (e)=>{
    setEdit(e.target.value);
  }
  const modifyTodo = (e)=>{
    e.preventDefault();
    setModefy(1);
  }
  const cancelModify = (e)=>{
    e.preventDefault();
    setModefy(0);
  }
  return(
    <List>
      <FormInput name="isCompleted" type="checkbox" onChange={onChange} />
      {
        modify ?
        <FormInput value={edit} onChange={oneditContent} />
        :
        <span>{originContent}</span>
      }
      {
        modify ?
        <>
          <FormButton title="제출" type="button" onClick={submitModifiedTodo} />
          <FormButton title="취소" type="button" onClick={cancelModify} />
        </>
        :
        <>
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
    padding: 5px;
  }
  & button{
    width: 80px;
  }

  input{
    width: 100%;
  }
`

export default TodoItem;