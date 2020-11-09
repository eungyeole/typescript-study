import styled from 'styled-components';
export const LottoInput = styled.input`
    width: 30px;
    border: none;
    outline: none;
    border-bottom: 3px solid aquamarine;
    color: aquamarine;
    margin: 0 10px;
`
export const LottoButton = styled.button`
    outline: none;
    border: none;
    background-color: aquamarine;
    color: white;
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
`
export const TimeProgress = styled.progress`
    transition: 1s;
`
export const Rspbt = styled.label`
    border:none;
    background: transparent;
    margin: 0 10px;
    cursor: pointer;
    font-size: 30px;
    & input{
        display: none;
    }
    & input:checked + i{
        color: #0075ff !important;
    }
`
export const Rspme = styled.p`
    & i{
        color: #0075ff;
        margin-left: 10px;
    }
`
export const Rspai = styled.p`
    & i{
        color: red;
        font-size: 30px;
        margin-left: 10px;
    }
`
export const Rspstate = styled.p`
    text-align: center;
    margin: 20px 0;
`

export const Nav = styled.ul`
    background: aquamarine;
    height: 100vh;
    padding: 0 30px;
    list-style: none;
    text-align:center;
    box-shadow: 5px 1px 5px 5px #daf3ea;
    & h3{
        color: white;
        margin: 10px 0;
    }
    & li{
        border-bottom:3px solid white;
        border-radius: 10px;
        height: 40px;
        margin-bottom: 10px;
    }
    & li:hover{
        background: #7bceb2;
    }
    & li a{
        display: block;
        color: white;
        height: 100%;
        font-weight:bold;
        text-decoration: none;
    }
`
export const Wrapper = styled.div`
    display:flex;
`

export const NavWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`