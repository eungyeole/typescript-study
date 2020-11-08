import React, { useEffect, useState } from "react"
interface ButtonType{
    name():void;
    id: number;
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
            <p>현재 유저 아이디 : {id}</p>
        </>
    )
}
export default Button