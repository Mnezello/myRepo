import styled from 'styled-components';

export const Container = styled.button`
  color: rgb(53, 51, 51);
  background-color: rgb(255, 255, 255);
  padding: 5px 10px;
  font-size: 1.5rem;
  border-width:${props => props.border ? `1px 3px 3px 1px` : 0};
  border-color:  rgba(53, 51, 51, 0.8);
  border-radius: 15px;
 
  svg {
    font-size: 1.5rem;
  }
`;