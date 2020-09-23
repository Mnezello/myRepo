import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans&family=Questrial&display=swap);
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
    font-size: 63%;
  }
  body {
    background-color: rgb(225, 224, 224);
    color: rgb(53, 51, 51);
    display: flex;
    justify-content: center;
    font-family: 'Questrial', sans-serif;
    font-size: 1.6rem;
  }
  input {
    font-family: 'Questrial', sans-serif;
    font-size: 1.6rem;
  }
  button {
    font-family: 'Bebas Neue', cursive;
    cursor: pointer;
  }
  h1 {
    font-family: 'Open Sans', sans-serif;
  }
  
  @media only screen and (max-width: 600px) {
    html {
      width: 100%;
      font-size: 48%;
    }
  }
  @media only screen and (min-width: 600px) {
    html {
      width: 100%;
      font-size: 52%;
    }
  }
  @media only screen and (min-width: 768px) {
    html {
      width: 100%;
      font-size: 56%;
    }
  }
  @media only screen and (min-width: 992px) {
    html {
      width: 100%;
      font-size: 58%;
    }
  }
    @media only screen and (min-width: 1200px) {
    html {
      width: 100%;
      font-size: 63%;
    }
  }
`;