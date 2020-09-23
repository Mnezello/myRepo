import styled from 'styled-components';

export const Title = styled.a`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: rgb(53, 51, 51);
  :hover {
    color: rgb(223, 46, 48);
  }
`;

export const Container = styled.div`
  margin-left: 4rem;
  margin-right: 4rem;
  padding: 1.5rem;
  background-color: rgb(255, 255, 255);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  ${(props) => {
    return !!props.elevation && `
      -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

      :hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }
    `
  }}

  .header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-wrap: break-word;
    justify-content: space-between;
  }

  div.tags {
    margin-top: 1rem;
  }

  div.tags > span + span {
    margin-left: 5px;
  }
`;

export const Description = styled.div`
  font-size: 1.5rem;
`;

export const Tag = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  background: ${props => props.highlight ? 'rgba(0,178,51,0.9)' : 'none'}
`;