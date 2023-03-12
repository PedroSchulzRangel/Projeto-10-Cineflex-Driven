import styled from "styled-components";
import { backgroundSelectedSeats,
    borderSelectedSeats,
    backgroundAvailableSeats,
    borderAvailableSeats,
    backgroundUnavailableSeats,
    borderUnavailableSeats } from "../colors";
import { useState } from "react";

export default function Seat ({num, isAvailable, id, idList}){

    const [clickedSeat, setClickedSeat] = useState(false);

    function selectSeat(){
        if(isAvailable){
            const notState = !clickedSeat
            setClickedSeat(notState);
                if(notState === true && !(idList || []).includes(id)){ 
                        idList.push(id);
                    } else if(notState === false && (idList || []).includes(id)){
                        idList.forEach((el,index) =>{
                            if(el === id){
                                idList.splice(index,1);
                            }
                        });
                }
                console.log(idList);
        }else {
            alert("Esse assento não está disponível");
        }
    }

    return (
            <SeatItem isAvailable={isAvailable}
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