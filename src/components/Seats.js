import styled from "styled-components";
import Seat from "./Seat"

export default function Seats ({seatsMap, idList, seatsName, setSeatsName, setIdList}){
    return (
        <SeatsContainer>
              {seatsMap.map((s) => 
              <Seat 
              key={s.id}
              num={s.name}
              isAvailable ={s.isAvailable}
              id={s.id}
              idList={idList}
              setIdList={setIdList}
              seatsName={seatsName}
              setSeatsName={setSeatsName}
              /> )}
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