import React, {useEffect, useReducer} from 'react';

interface CounterProps {}
interface Action {
  type: String;
  payload?: String;
}
function reducer(state: any, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, value: state.value + 1 }
    case 'DECREMENT':
      return {...state, value: state.value - 1 }
    case 'SAVE':
      return {...state, succes : action.payload}
    default:
      return state
  }
}
const Counter: React.FC<CounterProps> = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0, succes: 0 })
  useEffect(()=>{
    console.log(state);
  },[state])
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <p>
        저장된 카운터 <b>{state.succes}</b>
      </p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({type: 'SAVE', payload: state.value})}>저장</button>
    </div>
  )
}

export default Counter;
