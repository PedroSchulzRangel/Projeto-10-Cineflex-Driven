import styled from "styled-components";

export default function FooterSessionPage({session}){
    return (
        <FooterContainer>
        <div>
            <img src="https://br.web.img3.acsta.net/pictures/19/12/05/16/00/0409486.jpg" alt="poster" />
        </div>
        <div>
            <p>Mulan</p>
            
        </div>
    </FooterContainer>
    );
}
const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`