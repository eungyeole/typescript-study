import { stat } from "fs";
import React, { useEffect, useState } from "react"
import axios, { AxiosError, AxiosResponse } from "axios"
import * as S from "./styles"
interface response{
    value: string,
    message : string
}
function Rsp(){
    const [state, setState]= useState<string>("가위");
    const [AIstate,setAIstate] = useState<response>({value: "잘몰라요", message: "그런거나는잘몰라요"});
    const [Progress,setProgress] = useState<number>(200);
    function onSubmit(e : React.ChangeEvent<HTMLInputElement>){
        setState(e.currentTarget.value);
    }
    useEffect(()=>{
        setTimeout(()=>{
            if(Progress>0){
                setProgress(Progress-1);
            }else{
                axios.post("http://10.156.147.146:8000/whoIsWinner",{value: state},{timeout: 2000})
                .then((response : AxiosResponse<response>)=> {
                    setAIstate(response.data);
                    setProgress(200);
                })
                .catch((error : AxiosError)=> {
                    alert(error);
                    window.location.href="/"
                });
            }
        },10)
    },[Progress])
    
    return(
        <div> 
            <S.TimeProgress value={Progress} max="200"></S.TimeProgress>
            <p>  {Progress/100}s</p>
            <br></br>
            <S.Rspbt>
                <input type="radio" onChange={onSubmit} name="state" value="가위"></input>
                <i className="fas fa-hand-peace"></i>
            </S.Rspbt>
            <S.Rspbt>
                <input type="radio" onChange={onSubmit} name="state" value="바위"></input>
                <i className="fas fa-hand-rock"></i>
            </S.Rspbt>
            <S.Rspbt>
                <input type="radio" onChange={onSubmit} name="state" value="보"></input>
                <i className="fas fa-hand-paper"></i>
            </S.Rspbt>
            <S.Rspstate>
                {
                    AIstate.message=="이겼다"?
                        <b style={{color:"#0075ff"}}>{AIstate.message}</b>
                    :AIstate.message=="졌다"?
                        <b style={{color:"red"}}>{AIstate.message}</b>
                    :AIstate.message=="비겼다"?
                        <b>{AIstate.message}</b>
                    :null
                }
            </S.Rspstate>
            <S.Rspai>이전 상대 패 : 
            {
                AIstate.value=="가위"? <i className="fas fa-hand-peace"></i>
                :AIstate.value=="바위"? <i className="fas fa-hand-rock"></i>
                :AIstate.value=="보"? <i className="fas fa-hand-paper"></i>
                :AIstate.value
            }
            </S.Rspai>
        </div>
    )
}
export default Rsp;