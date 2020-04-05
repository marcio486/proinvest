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

export const SearchParams = styled.div`  
  display: flex;    
  background: #fff;
  padding: 10px 15px;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 5px;    
  align-items: center;

`;

export const AllCodes = styled.div`  
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  align-content: space-between;
  span {      
    
    font-size: 20px;
    color: #000;

  }  
  li {
    list-style: none
  }
`;

