import React, { useEffect, useState } from "react"
interface ButtonType{
    name():void;
    id: String;
}
function merge<A, B>(a: A, b: B): A | B {
    return {
      ...a,
      ...b
    };
  }
const Button: React.FC<ButtonType> = ({name,id})=>{
    name();
    const [merged,setmerged]= useState(merge<Object,Object>({ foo: 1 }, { bar: 1 }));
    useEffect(()=>{

    },[])
    return(
        <>
            <p>부모로부터 받은 아이디 값 : {id}</p>
        </>
    )
}
export default Button