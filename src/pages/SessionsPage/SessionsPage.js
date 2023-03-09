import styled from "styled-components";
import sessions from "../../sessions";
import Session from "../../components/Session";
import Footer from "../../components/Footer";

export default function SessionsPage() {

    return (
        <PageContainer>
            Selecione o horário
            <div>
               {sessions.map((s,index) => 
               <Session
               key={index}
               dayOfWeek={s.dayOfWeek}
               dayOfMonth={s.dayOfMonth}
               firstTime={s.firstTime}
               secondTime={s.secondTime}/>)}
            </div>

            <Footer/>

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