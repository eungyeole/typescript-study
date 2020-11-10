import React from "react"
import useInputs from "./useInputs"
function InputTest(){
    const [state,onChange]=useInputs({
        name: '',
        nickname: ''
    })
    const {name, nickname} = state;
    return(
        <>
            <input name="name" onChange={onChange} value={name}></input>
        </>
    )
}
export default InputTest;