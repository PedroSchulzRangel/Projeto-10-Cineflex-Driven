import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Form ({name, setName, cpf, setCpf, idList}){

    const navigate = useNavigate();

    function submitOrder(event){

        event.preventDefault();

        console.log(idList);

        if(idList.length === 0){
            alert("Selecione pelo menos um assento para continuar sua reserva!");
            return;
        }
        const object = {ids: idList, name: name, cpf: cpf};
        const promise = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", object);
        promise.then((res) => {
            console.log(res.data);
            navigate("/sucesso");
        });
        promise.catch((error) => {
            console.log(error.response.data);
            alert("Erro ao enviar reserva para o servidor! Tente novamente mais tarde.");
            navigate("/");
        });
    }

    return (
        <FormContainer>
        <form onSubmit={submitOrder}>
        <label htmlFor="campoNome">Nome do Comprador:</label>
        <input
        value={name}
        onChange={e => setName(e.target.value)}
        type="text"
        id="campoNome"
        placeholder="Digite seu nome..."
        required/>

        <label htmlFor="campoCPF">CPF do Comprador:</label>
        <input
        value={cpf}
        onChange={e => setCpf(e.target.value)}
        type="number"
        id="campoCPF"
        placeholder="Digite seu CPF..."
        required/>

        <button type="submit">Reservar Assento(s)</button>
        </form>
    </FormContainer>
    );
}
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`