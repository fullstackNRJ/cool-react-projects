import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/Wavey-Fingerprint.svg';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .main_row{
    display : flex;
  }
  .score {
    color: #d38558;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #555, #333);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #d38558);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next, .category {
    cursor: pointer;
    background: linear-gradient(180deg, #222, #333);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 30px 10px;
    padding: 0 40px;
    color: #d38558;
  }
  .start {
    max-width: 200px;
  }

  .category {
    max-width:150px;
    background: #333;
  }

  .loader{
    color:#c7894c;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
  }

  .spinner {
    border: 5px solid #333; /* Light grey */
    border-top: 5px solid #d38558; /* Blue */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
    -webkit-animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    50% {transform: rotate(-200deg)}
    100% { transform: rotate(360deg); }
  }

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
 
`;