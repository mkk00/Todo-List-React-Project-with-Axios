import styled from "styled-components";

import FormInput from "../component/formInput";
import FormButton from "../component/button";
import Divider from "../component/divider";
import TodoItem from "../component/todoItem";

function Todo() {
  return(
    <section className="container">
      <Divider />
      <h2 className="sectionTitle">Today Todo</h2>
      <Form>
        <fieldset>
          <legend>To do List</legend>
          <div className="newTodo">
            <FormInput className="a11yHidden" placeholder="새 할일을 추가해보세요." id="newTodoInput" label="새 할일" testid="new-todo-input" />
            <FormButton className="addNewTodo" testid="new-todo-add-button" title="추가" pointColor />
          </div>
          <TodoList>
            <TodoItem content="첫번째 내용" />
            <TodoItem content="두번째 내용" />
            <TodoItem content="세번째 내용" />
          </TodoList>
        </fieldset>
      </Form>
    </section>
  )
}

const Form = styled.form`
  width: 400px;
  margin: 0 auto;

  .newTodo{
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  input{
    width: 300px;
  }

  .addNewTodo{
    width: 80px;
  }
`

const TodoList = styled.ul`
  margin-top: 40px;
  & input{
    width: 40px;
    cursor: pointer;
  }
`

export default Todo;