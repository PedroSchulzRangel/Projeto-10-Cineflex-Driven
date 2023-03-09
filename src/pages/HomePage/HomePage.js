import styled from "styled-components"
import movies from "../../movies"
import Movie from "../../components/Movie"

export default function HomePage() {
    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                {movies.map((url,index) => <Movie key={index} picture={url}/>)}
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