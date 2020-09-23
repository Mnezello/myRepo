import styled from 'styled-components';

export const Container = styled.label`
  border: 1px solid rgb(53, 51, 51);
  padding: 3px;
  display: flex;
	flex-wrap: nowrap;
  align-items: center;
  background-color: #FFF;
  border-radius: 5px;
  :hover {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  }

  svg {
    font-size: 1.5rem;
  }
`;

export const Input = styled.input`
  border: none;
  flex: 1;
  padding-left: 5px;
`;