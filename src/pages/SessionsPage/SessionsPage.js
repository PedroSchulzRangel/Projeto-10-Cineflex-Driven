import styled from "styled-components";
import Session from "../../components/Session";
import FooterSessionPage from "../../components/FooterSessionPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SessionsPage() {

const {idFilme} = useParams();
const [sessionData, setSessionData] = useState([]);
const [session, setSession] = useState({});

useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);
    promise.then((res) => {
        console.log(res.data);
        setSessionData(res.data.days);
        setSession(res.data);
    });
    promise.catch((error) => {
        console.log(error.response.data);
        alert("Erro ao carregar as sessões deste filme! Tente novamente mais tarde.");
    });
},[]);

if(sessionData.length === 0){
    return (
        <LoadingGif>
            <img src="https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-4.gif"
             alt="loading-gif" />
        </LoadingGif>
    );
}

    return (
        <PageContainer>
            Selecione o horário
            <div>
               {sessionData.map((s,index) => 
               <Session
               key={index}
               dayOfWeek={s.weekday}
               dayOfMonth={s.date}
               times={s.showtimes}/>)}
            </div>

            <FooterSessionPage session={session}/>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`
const LoadingGif = styled.div`
    display: flex;
    justify-content: center;
`;