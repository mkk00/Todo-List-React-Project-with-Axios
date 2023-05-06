import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import FormInput from '../component/formInput';
import FormButton from '../component/button';
import Divider from '../component/divider';
import todoApi from '../api/todo.api';

function Todo() {
  const navigate = useNavigate();
  const [createTodoArr, setCreateTodoArr] = useState([]);
  const [createTodo, setCreateTodo] = useState({
    todo: '',
    isCompleted: false,
    edit: false,
  });

  const inputNewItem = (e) => {
    setCreateTodo({
      ...createTodo,
      [e.target.name]: e.target.value,
    });
  };

  const addTodoItem = async (e) => {
    e.preventDefault();

    if (createTodo.todo === '') return;

    await todoApi
      .post('/todos', {
        todo: createTodo.todo,
        isCompleted: createTodo.isCompleted,
      })
      .then(setCreateTodoArr([...createTodoArr, createTodo]))
      .then(
        setCreateTodo({
          todo: '',
          isCompleted: false,
          edit: false,
        })
      )
      .catch((err) => console.log(err));
  };

  const editButton = async (e, index, id) => {
    e.preventDefault;

    setCreateTodoArr((prev) => {
      const isEdit = [...prev];
      isEdit[index].edit = true;
      return isEdit;
    });
  };

  const removeButton = async (e, index, id) => {
    e.preventDefault;

    await todoApi
      .delete(`/todos/${id}`, {
        todo: createTodo.todo,
        isCompleted: createTodo.isCompleted,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setCreateTodoArr((prev) => {
      const removeTodo = [...prev];
      removeTodo.splice(index, 1);
      return removeTodo;
    });
  };

  const cancelButton = (e, index) => {
    e.preventDefault;
    setCreateTodoArr((prev) => {
      const isEdit = [...prev];
      isEdit[index].edit = false;
      return isEdit;
    });
  };

  const submitButton = async (e, index, newValue, id) => {
    e.preventDefault;
    setCreateTodoArr((prev) => {
      const submitEdit = [...prev];
      submitEdit[index].edit = false;
      submitEdit[index].todo = newValue;
      return submitEdit;
    });
    await todoApi.put(`/todos/${id}`, {
      todo: createTodoArr[index].todo,
      isCompleted: createTodoArr[index].isCompleted,
    });
  };

  const isChecked = async (index, id) => {
    setCreateTodoArr((prev) => {
      const CompleteItem = [...prev];
      if (CompleteItem[index].isCompleted) {
        CompleteItem[index].isCompleted = false;
      } else {
        CompleteItem[index].isCompleted = true;
      }
      return CompleteItem;
    });
    await todoApi.put(`/todos/${id}`, {
      todo: createTodoArr[index].todo,
      isCompleted: !createTodoArr[index].isCompleted,
    });
    console.log(createTodoArr);
  };

  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      alert(`로그인이 필요한 서비스입니다.\n로그인 페이지로 이동합니다.`);
      navigate('/signin');
    }
    const getTodoItem = async () => {
      await todoApi.get('/todos').then((res) => setCreateTodoArr(res.data));
    };
    getTodoItem();
  }, []);

  return (
    <section className="container">
      <Divider />
      <h2 className="sectionTitle">Today Todo</h2>
      <Form>
        <fieldset>
          <legend>New Todo List</legend>
          <div className="newTodo">
            <FormInput
              className="a11yHidden"
              id="inputNewTodo"
              value={createTodo.todo}
              name="todo"
              placeholder="새 할일을 추가해보세요."
              onChange={inputNewItem}
            />
            <FormButton
              className="addButton"
              title="추가"
              onClick={addTodoItem}
              type="submit"
              pointColor
            />
          </div>
          <TodoList>
            {createTodoArr.map((arr, index, e) => (
              <li key={index + '번째 할일'}>
                <FormInput
                  checked={arr.isCompleted}
                  className="a11yHidden"
                  inputId="checkBox"
                  type="checkbox"
                  onChange={() => isChecked(index, arr.id)}
                />
                {arr.edit ? (
                  <FormInput
                    testid="modify-input"
                    value={arr.todo}
                    className="a11yHidden"
                    inputId="editInputBox"
                    onChange={(e) => {
                      setCreateTodoArr((prev) => {
                        const newEditTodo = [...prev];
                        newEditTodo[index].todo = e.target.value;
                        return newEditTodo;
                      });
                    }}
                  />
                ) : (
                  <>
                    <span
                      style={{
                        color: `${arr.isCompleted ? 'gray' : 'black'}`,
                        textDecoration: `${
                          arr.isCompleted ? 'line-through' : 'none'
                        }`,
                        fontStyle: `${arr.isCompleted ? 'italic' : 'normal'}`,
                      }}
                    >
                      {arr.todo}
                    </span>
                  </>
                )}
                {arr.edit ? (
                  <>
                    <FormButton
                      testid="submit-button"
                      title="제출"
                      type="button"
                      onClick={() => submitButton(e, index, arr.todo, arr.id)}
                    />
                    <FormButton
                      testid="cancel-button"
                      title="수정취소"
                      type="button"
                      onClick={() => cancelButton(e, index)}
                    />
                  </>
                ) : (
                  <>
                    <FormButton
                      testid="modify-button"
                      title="수정"
                      type="button"
                      onClick={() => editButton(e, index)}
                    />
                    <FormButton
                      testid="delete-button"
                      title="삭제"
                      type="button"
                      onClick={() => removeButton(e, index, arr.id)}
                    />
                  </>
                )}
              </li>
            ))}
          </TodoList>
        </fieldset>
      </Form>
    </section>
  );
}

const Form = styled.form`
  width: 500px;
  margin: 0 auto;

  .newTodo {
    width: 500px;
    display: flex;
    gap: 20px;

    .inputNewTodo {
      width: 400px;
    }
    input {
      width: 400px;
    }
  }

  button {
    width: 80px;
    height: 40px;
  }
`;

const TodoList = styled.ul`
  margin-top: 40px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    input[type='checkbox'] {
      display: inline-block;
      width: 28px;
      height: 28px;
    }

    #editInputBox,
    span {
      width: 252px;
      word-wrap: break-word;
    }
    span {
      color: ${(props) => (props.dataChecked ? '#000' : '#333')};
    }
  }
`;

export default Todo;
