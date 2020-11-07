import React from "react"
interface ButtonType{
    name():void;
    id: number;
}
const Button: React.FC<ButtonType> = ({name,id})=>{
    name();
    return(
        <>
            {id}
        </>
    )
}
export default Button