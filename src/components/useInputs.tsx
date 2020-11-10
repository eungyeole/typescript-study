import { useReducer } from "react"
interface action{
    name : string;
    value : number | string;
}
function reducer(state: any, action: action){
    return {
        ...state,
        [action.name] : action.value
    }
}
export default function useInputs(initialForm: Object){
    const [state,dispatch] = useReducer(reducer, initialForm);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(e.target);
    }
    return[state,onChange];
}