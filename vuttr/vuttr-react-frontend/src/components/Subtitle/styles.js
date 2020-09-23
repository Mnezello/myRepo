import styled from 'styled-components';

export const Text = styled.h2`
  font-size: ${(props) => props.size || `2rem`};
  color: rgb(225, 224, 224);
  text-shadow: 1px 1px 2px black;
`;