import React, { useState } from "react"
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import * as S from "./styles" 
interface inputNum{
    first: number,
    second: number,
    third: number,
    fourth: number,
    fifth: number,
}   
interface response{
    message: string,
    prizeLottoNumbers : number[]
}
function Lotto(){
    const [Input, setInput] = useState<inputNum>({first: 0, second: 0, third: 0, fourth: 0, fifth: 0});
    const [Lotto, setLotto] = useState<number[] | null>(null);
    function inputhandler(e : React.ChangeEvent<HTMLInputElement>){
        const { value, name } = e.target;
        if(parseInt(value)>9){
            setInput({...Input, [name]:9});
        }else if(parseInt(value) < 0){
            setInput({...Input, [name]:0});
        }
        else{
            setInput({...Input, [name]:parseInt(value)})
        }
        console.log(e.target.value);
    }
    function onSubmit(){  
        console.log(Input);
            axios.post("http://10.156.147.146:3000/lotto",Input,{timeout: 1000})
            .then((response : AxiosResponse<response>)=> {
                console.log(response);
                alert(response.data.message);
                setLotto(response.data.prizeLottoNumbers);
            })
            .catch((error : AxiosError)=> {
                alert(error);
            });
          
    }
    return(
        <div>
            <S.LottoInput max="9" name="first" type="number" onChange={inputhandler} value={Input.first} ></S.LottoInput>
            <S.LottoInput max="9" name="second" type="number" onChange={inputhandler} value={Input.second} ></S.LottoInput>
            <S.LottoInput max="9" name="third" type="number" onChange={inputhandler} value={Input.third} ></S.LottoInput>
            <S.LottoInput max="9" name="fourth" type="number" onChange={inputhandler} value={Input.fourth} ></S.LottoInput>
            <S.LottoInput max="9" name="fifth" type="number" onChange={inputhandler} value={Input.fifth} ></S.LottoInput>
            <S.LottoButton onClick={onSubmit}>제출</S.LottoButton>
            <p>이번 당첨 코드 : {Lotto}</p>
        </div>
    )
}
export default Lotto;