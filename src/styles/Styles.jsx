import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-inline: 10%;
    padding-block: 2%;

h2{
    text-align: center;
    margin-bottom: 25px;
}


`
export const PostDescription = styled.div`
 
   
      display: grid;
        grid-template-columns: repeat(4, 1fr);
      gap: 35px;


      .post{
        width: 300px;
        height: 350px;
        box-shadow: 1px 0 5px 0px #00000010;
        background-color: #f5f5f5;
        border-radius: 10px 10px 10px 10px;

  
        
      }

      img{
        width: 300px;
        height: 175px;
        border-radius: 10px 10px 0px 0px;


      }

      .contentpost{
        width: 100%;
        padding: 10px;
      
      }

      .title{
        margin-bottom: 15px;
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis; /* Adiciona reticências (...) se o texto ultrapassar as 3 linhas */
        white-space: nowrap; /* Impede que o texto quebre para a próxima linha */
        max-height: 3em; /* Define a altura máxima equivalente a 3 linhas */

      }

      .description{
        margin-bottom: 15px;
        font-size: 16px;
        width: 100%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; /* Número de linhas desejado */
        line-height: 1%.5; /* Altura da linha, ajuste conforme necessário */
        overflow: hidden;
        text-overflow: ellipsis; /* Adiciona reticências (...) se o texto ultrapassar as 3 linhas */
      }

      .username{
        font-size: 16px;
        font-weight: 600;
        color: #00000080
      }
    `