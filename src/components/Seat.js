import styled from "styled-components";
import { backgroundSelectedSeats,
    borderSelectedSeats,
    backgroundAvailableSeats,
    borderAvailableSeats,
    backgroundUnavailableSeats,
    borderUnavailableSeats } from "../colors";
import { useState } from "react";

export default function Seat ({num, isAvailable, id, idList, setIdList, seatsName, setSeatsName}){

    const [clickedSeat, setClickedSeat] = useState(false);
    

    function selectSeat(){
        const copyOfSeatsName = [...seatsName];
        const copyOfIdList = [...idList];

        if(isAvailable){

            const notState = !clickedSeat
            setClickedSeat(notState);

            if(!seatsName.includes(num)){ 
                setIdList([...idList, id]);
                setSeatsName([...seatsName, num]);

                } else if(notState === false){
                    
                    copyOfIdList.splice(copyOfIdList.indexOf(id),1);
                    copyOfSeatsName.splice(copyOfSeatsName.indexOf(num),1);
                    setIdList(copyOfIdList);
                    setSeatsName(copyOfSeatsName);
                    }
        }else {
            alert("Esse assento não está disponível");
        }
    }

    return (
            <SeatItem data-test="seat" isAvailable={isAvailable}
            clickedSeat={clickedSeat}
            onClick={selectSeat}>
                {num}
            </SeatItem>
    );
}

const SeatItem = styled.div`
    border: 1px solid ${props => props.clickedSeat?
    borderSelectedSeats : (props.isAvailable?
    borderAvailableSeats: borderUnavailableSeats)};
    background-color: ${props => props.clickedSeat? 
    backgroundSelectedSeats:(props.isAvailable?
    backgroundAvailableSeats: backgroundUnavailableSeats)};   
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`