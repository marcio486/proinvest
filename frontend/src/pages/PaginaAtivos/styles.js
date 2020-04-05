import styled from 'styled-components';

export const Container = styled.div`
  width: 1020px;  
  display: flex;  
  flex-direction: column;
  align-items: center;
  margin: auto;
  min-height: 81vh;  
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const Contact = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);   
  width: 1720px;
  padding: 20px;
  font-size: 54px;
  margin-top: 20px;

  p {
    font-size: 32px;    
  }

  div {
    margin: 10px;
    display: flex;
    flex-direction: column;   
  }

  span {      
    
    font-size: 20px;
    color: #CCCCCC;

  }  
  li{
  list-style: none
}
  `;

