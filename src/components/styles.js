import styled from "styled-components"

export const Container = styled.div`
    // background: whitesmoke;
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
    // height: 30%;
    border: 3px solid black;
    border-left: 0;
    border-right: 0;
    border-radius: 15px;
    padding: 10px; 
    // box-shadow: 4px 6px;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Paragraph = styled.p`
    display: flex;
    align-items: center;
    text-align: center;
    height: 10px;
    margin-top: 120px;
    font-family: 'Handlee', cursive;
    font-size: 17px;
    font-style: italic;
    font-weight: 600;
    font-family: 'Handlee', cursive;
 `;