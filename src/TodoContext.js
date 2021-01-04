import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text: '아침에 일찍 일어나기',
    done: true
  },
  {
    id: 2,
    text: '리액트 공부하기',
    done: true
  },
  {
    id: 3,
    text: '점심식사 하기',
    done: false
  },
  {
    id: 4,
    text: '리액트 복습하기',
    done: false
  },
  {
    id: 5,
    text: '집밖에 나가지 말기',
    done: false
  }
];

function todoReducer(state, action){
  switch(action.type){
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
          );
          //todo.id와 action.id값이 같으면 todo값을 복사하고, done에 반대값을 넣어주고 아니면 냅둠
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
        //todo.id값이랑 action,id값이랑 서로 다른것들만 필터링해서 return시킴
        //삭제한것만 빼고 나머지 부분만 리턴시켜서 리스트에 보여줌
    default:
      throw new Error(`Error !! : ${action.type}`);
  }
}
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }){
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(6);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
//createContext
//state값과 dispatch를 context를 통해 다른 컴포넌트에서 바로 사용하게 해준다.
//현재 js각 파일에서 쓰던 값들을 서로 전달할때 굉장히 편하게 사용할 수 있게 해준다.

//context 하나를 만들어서 state값과 dispatch를 한꺼번에 넣어주고,  그 두개를 context를 만들어서 따로따로 만들어서 넣어줄 수 있게 사용 할 수 있다.

export function useTodoState(){
  const context = useContext(TodoStateContext);
  //에러 처리
  if(!context){
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
export function useTodoDispatch(){
  const context = useContext(TodoDispatchContext);
  if(!context){
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
export function useTodoNextId(){
  const context = useContext(TodoNextIdContext);
  if(!context){
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}
// 외부에서 함수를 사용할 수 있게 훅을 만들어준다.
// TodoContext가 내부에서 랜더링이 되어야 사용가능