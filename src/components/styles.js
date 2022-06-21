import styled from "styled-components"

export const Container = styled.div`
    background: linear-gradient(to right bottom, rgba(255,255, 255, 0.7),rgba(255,255, 255, 0.4));
    width: 100%;
    max-width: 600px;
    margin: 30px auto;
    height: 30%;
    border-radius: 15px;
    padding: 2%; 
    box-shadow: 5px 7px rgb(215, 210, 210);

    h1{
        font-family: cursive;
        font-size: 26px;
        font-weight: 800;
        color: rgb(147, 126, 3);
    }
`

export const Card = styled.div`
    background: whitesmoke;
    width: 100%;
    max-width: 500px;
    margin: 40px auto;
    border: 3px solid black;
    border-left: 0;
    border-right: 0;
    border-radius: 15px;
    padding: 10px; 
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Heading = styled.h4`
    font-family: 'Handlee', cursive;
    font-size: 17px;
    font-style: italic;
    font-weight: 800;
    display: flex;
    justify-content: space-between;
 `;
export const Paragraph = styled.p`
    font-family: 'Handlee', cursive;
    font-size: 17px;
 `;

export const Form = styled.form`
    width: 100%;
    max-width: 400px;
    margin: auto;
    padding: 10px;

    button{
        width:100%;
        max-width: 300px;
        margin: 0px 60px;
        padding: 10px;
        background: rgb(147, 126, 3);
        color: white;
        font-weight: 700;
        border: none;
    }
    button:hover{
        cursor: pointer;
        background: rgb(63, 54, 2);
    }
`

export const InnerForm = styled.div`
    padding: 20px;

    label{
        color: grey;
        font-weight: 700;
    }
    input{
        border-radius: 7px;
        border: 2px solid grey;
        padding: 10px;
        width: 100%;
        margin-top: 10px;
    }
    input:focus{
        outline: none;
    }

    textarea{
            border-radius: 7px;
            border: 2px solid grey;
            padding: 10px;
            width: 100%;
            margin-top: 10px;
    }
    textarea:focus{
        outline: none;  
    }
`