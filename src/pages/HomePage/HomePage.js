import styled from "styled-components";
import Movie from "../../components/Movie";
import { useState ,useEffect } from "react";
import axios from "axios";

export default function HomePage() {
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        promise.then((res) => {
            console.log(res.data);
            setMoviesList(res.data);
        });
        promise.catch((error) => {
            console.log(error.response.data);
            alert("Erro ao carregar lista de filmes do servidor! Tente novamente mais tarde.");
        });
    }, []);

    if(moviesList.length === 0){
        return (
            <LoadingGif>
                <img src="https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-4.gif"
                 alt="loading-gif" />
            </LoadingGif>
        );
    }

    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                {moviesList.map((m,index) => <Movie key={index} picture={m.posterURL} id={m.id}/>)}
            </ListContainer>

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
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
const LoadingGif = styled.div`
    display: flex;
    justify-content: center;
`;