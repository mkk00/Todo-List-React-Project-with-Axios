import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import styled from "styled-components";

import FormInput from "../component/formInput";
import FormButton from "../component/button";
import Divider from "../component/divider";

function Todo() {
  const navigate = useNavigate();
  const [createTodoArr, setCreateTodoArr] = useState([]);
  const [createTodo, setCreateTodo] = useState({
    todo: "",
    isCompleted: false,
    edit: false
  });

  const inputNewItem = (e)=>{
    setCreateTodo({
      ...createTodo,
      [e.target.name]: e.target.value
    });
  }
  
  const addTodoItem = (e)=>{
    e.preventDefault();
    if(createTodo.todo==="") return;
    setCreateTodoArr([
      ...createTodoArr,
      createTodo
    ])
    setCreateTodo({
      todo: "",
      isCompleted: false,
      edit: false
    })
  }

  const editButton = (e, index)=>{
    e.preventDefault;
    setCreateTodoArr((prev)=>{
      const isEdit = [...prev]
      isEdit[index].edit = true;
      return isEdit;
    })
  }

  const removeButton = (e, index)=>{
    e.preventDefault;
    setCreateTodoArr((prev)=>{
      const removeTodo = [...prev]
      removeTodo.splice(index, 1);
      return removeTodo;
    })
  }

  const cancelButton = (e, index)=>{
    e.preventDefault;
    setCreateTodoArr((prev)=>{
      const isEdit = [...prev]
      isEdit[index].edit = false;
      return isEdit;
    })
  }

  const submitButton = (e, index, newValue)=>{
    e.preventDefault;
    setCreateTodoArr((prev)=>{
      const submitEdit = [...prev]
      submitEdit[index].edit = false;
      submitEdit[index].todo = newValue;
      return submitEdit;
    })
  }

  const isChecked = (index)=>{
    setCreateTodoArr((prev)=>{
      const CompleteItem = [...prev];
      if(CompleteItem[index].isCompleted){
        CompleteItem[index].isCompleted = false;
      } else{
        CompleteItem[index].isCompleted = true;
      }
      return CompleteItem;
    })
  }

  useEffect(()=>{
    if(!localStorage.getItem('accessToken')){
      alert(`로그인이 필요한 서비스입니다.\n로그인 페이지로 이동합니다.`);
      navigate('/signin');
    }
  }, [createTodoArr])

  return(
    <section className="container">
      <Divider />
      <h2 className="sectionTitle">Today Todo</h2>
      <Form>
        <fieldset>
          <legend>To do List</legend>
        <div className="newTodo">
          <FormInput className="a11yHidden" id="inputNewTodo" value={createTodo.todo} name="todo" placeholder="새 할일을 추가해보세요." onChange={inputNewItem} />
          <FormButton className="addButton" title="추가" onClick={addTodoItem} pointColor/>
        </div>
        <TodoList>
          {
            createTodoArr.map((arr, index, e)=>(
              <li key={index+'번째 할일'}>
                <FormInput checked={arr.isCompleted} className="a11yHidden" id="checkBox" type="checkbox" onChange={()=>isChecked(index)} />
                {
                  arr.edit ?
                    <FormInput value={arr.todo} className="a11yHidden" inputId="editInputBox" onChange={(e)=>{
                      setCreateTodoArr(prev=>{
                        const newEditTodo = [...prev];
                        newEditTodo[index].todo = e.target.value
                        return newEditTodo;
                      })
                    }}/>
                  :
                  <>
                    <span>{arr.todo}</span>
                  </>
                }
                {
                  arr.edit ?
                  <>
                    <FormButton title="제출" type="button" onClick={()=>submitButton(e, index, arr.todo)} />
                    <FormButton title="수정취소" type="button" onClick={()=>cancelButton(e, index)} />
                  </>
                  :
                  <>
                    <FormButton title="수정" type="button" onClick={()=>editButton(e, index)} />
                    <FormButton title="삭제" type="button" onClick={()=>removeButton(e, index)}/>
                  </>
                }
              </li>
            ))
          }
        </TodoList>
        </fieldset>
      </Form>
    </section>
  )
}

const Form = styled.form`
  width: 500px;
  margin: 0 auto;

  .newTodo{
    width: 500px;
    display: flex;
    gap: 20px;

    .inputNewTodo{
      width: 400px;
    }
    input{
      width: 400px;
    }
  }
  input{
    display: inline-block;
  }
  button {
    width: 80px;
    height: 40px;
  }
`

const TodoList = styled.ul`  
  margin-top: 40px;

  li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    input[type="checkbox"]{
      display: inline-block;
      width: 28px;
      height: 28px;
    }

    #editInputBox, span{
      width: 252px;
    }
  }
  
`

export default Todo;