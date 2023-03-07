import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
    }
    body{
        font-family: "Montserrat", sans-serif;
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
    }
    h2{
        font-size: 3rem;
        font-family: "Abril Fatface", cursive;
        font-weight: lighter;
        color: #333;
    }
    h3 {
    min-height: 3rem;
    margin: 1rem 0.5rem 0.1rem 0.5rem;
    padding: 0;
    font-size: 1.3rem;
    color: #333;
  }
  p {
    margin: 0 0 0.4rem 0;
    padding: 0;
    color: #696969;
  }
  a{
    text-decoration: none;
  }
  input{
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }
`;

export default GlobalStyles;
