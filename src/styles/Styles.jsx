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


    .header{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 25px;
        padding-bottom: 15px;
        border-bottom: 1px solid #00000020;

    }

    button{
        
        width: 150px;
        height: 40px;
        border: 1px solid transparent;
        border-radius: 10px;

    }
    h2{

        text-align: center;

    }

    .create-post-form{
        position: absolute;
        z-index: 10;
        display: flex;
        top: 300px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    .form{
        width: 600px;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        background-color: #00000070;
        backdrop-filter: blur(5px);
        padding: 20px;
        gap: 10px;
        border: 4px solid #ffffff80;
        border-radius: 10px;

    }

    input{
        font-size: 18px;
        width: 100%;
        margin-bottom: 5px;
        height: 50px;
        padding: 10px;
        border: 1px solid transparent;
        border-radius: 10px;

    }

    textarea{
        font-size: 18px;
        width: 100%;
        height: 160px;
        border: 1px solid transparent;
        padding: 10px;
        border-radius: 10px;



    }


`
export const PostDescription = styled.div`
 
   
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;


      .post{
        width: 300px;
        height: 350px;
        box-shadow: 2px 2px 5px 0px #00000010;
        background-color: #fff;
        border-radius: 20px;
        margin: 5px;

  
        
      }

      img{
        width: 300px;
        height: 175px;
        border-radius: 20px 20px 0px 0px;
        object-fit: cover;
        animation: all 0.5s ease;


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