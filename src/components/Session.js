import styled from "styled-components";

export default function Session({dayOfWeek, dayOfMonth, firstTime, secondTime}){
    return (
        <SessionContainer>
        {dayOfWeek} - {dayOfMonth}
        <ButtonsContainer>
            <button>{firstTime}</button>
            <button>{secondTime}</button>
        </ButtonsContainer>
    </SessionContainer>
    );
}
const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
`