import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  /* Alterar parametros de todos os elementos da aplicação */
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background:linear-gradient(-70deg, #546 20%, rgba(0, 0, 0, 0) 30%)	 ;    
    -webkit-font-smoothing: antialiased;
        
    background-size: cover;      
    
    height: 100%;
    position: relative;

    padding-bottom: 128px;    
  }
  
  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {    
    margin: auto;    
    /* padding: 0 20px 50px; */
  }

  button {
    cursor: pointer;
  }
`;