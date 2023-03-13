import styled from "styled-components";
import Seats from "../../components/Seats";
import Form from "../../components/Form";
import FooterSeatsPage from "../../components/FooterSessionPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { backgroundSelectedSeats,
    borderSelectedSeats,
    backgroundAvailableSeats,
    borderAvailableSeats,
    backgroundUnavailableSeats,
    borderUnavailableSeats } from "../../colors";

export default function SeatsPage({name, setName, cpf, setCpf, seatsList, setSeatsList, seatsName, setSeatsName, idList, setIdList}) {

const {idSessao} = useParams();
const [seatsMap, setSeatsMap] = useState([]);
const navigate = useNavigate();

useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);
    promise.then((res) => {
        console.log(res.data);
        setSeatsMap(res.data.seats);
        setSeatsList(res.data);
    });
    promise.catch((error) => {
        console.log(error.response.data);
        alert("Erro ao carregar o mapa de assentos! Tente novamente mais tarde.");
        navigate("/");
    });
}, []);

    if(seatsMap.length === 0){
        return (
            <LoadingGif>
                <img src="https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-4.gif"
                 alt="loading-gif" />
            </LoadingGif>
        );
    }

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <Seats
            seatsMap ={seatsMap}
            idList ={idList}
            setIdList={setIdList}
            seatsName={seatsName}
            setSeatsName={setSeatsName}
            />

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle status="Selected"/>
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle status="Available" />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle status="Unavailable" />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

           <Form
           name={name}
           setName={setName}
           cpf={cpf}
           setCpf={setCpf}
           idList={idList}
           />

            <FooterSeatsPage seatsList={seatsList}/>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid ${props => 
    props.status === "Selected"?
    borderSelectedSeats:
    (props.status === "Available"? 
    borderAvailableSeats: 
    borderUnavailableSeats)};
    background-color: ${props => 
    props.status === "Selected"?
    backgroundSelectedSeats:
    (props.status === "Available"?
    backgroundAvailableSeats:
    backgroundUnavailableSeats)};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`
const LoadingGif = styled.div`
    display: flex;
    justify-content: center;
`;