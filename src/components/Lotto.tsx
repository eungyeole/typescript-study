import React, { useState } from "react"
import * as S from "./styles"
interface inputNum{
    first: number,
    second: number,
    third: number,
    fourth: number,
    fifth: number,
}
function Lotto(){
    const [Input, setInput] = useState<inputNum>({first: 0, second: 0, third: 0, fourth: 0, fifth: 0});
    function inputhandler(e : React.ChangeEvent<HTMLInputElement>){
        const { value, name } = e.target;
        if(parseInt(value)>9){
            setInput({...Input, [name]:9})
        }else{
            setInput({...Input, [name]:value})
        }
        console.log(e.target.value);
    }
    function onSubmit(){
        
    }
    return(
        <>
            <S.LottoInput max="9" name="first" type="number" onChange={inputhandler} value={Input.first} ></S.LottoInput>
            <S.LottoInput max="9" name="second" type="number" onChange={inputhandler} value={Input.second} ></S.LottoInput>
            <S.LottoInput max="9" name="third" type="number" onChange={inputhandler} value={Input.third} ></S.LottoInput>
            <S.LottoInput max="9" name="fourth" type="number" onChange={inputhandler} value={Input.fourth} ></S.LottoInput>
            <S.LottoInput max="9" name="fifth" type="number" onChange={inputhandler} value={Input.fifth} ></S.LottoInput>
            <S.LottoButton>제출</S.LottoButton>
        </>
    )
}
export default Lotto;