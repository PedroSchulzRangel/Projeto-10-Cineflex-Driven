import seats from "../seats";
import styled from "styled-components";
import Seat from "./Seat"

export default function Seats (){
    return (
        <SeatsContainer>
              {seats.map((num) => <Seat key={num} num={num}/>)}
            </SeatsContainer>
    );
}

const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`