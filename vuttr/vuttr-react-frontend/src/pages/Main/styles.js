import styled from 'styled-components';

export const Container = styled.div`
  margin: 5rem auto;
  padding-bottom: 3rem;
  background-color: rgb(225, 224, 224);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);

  div.list section {
    margin-top: 2rem;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    width: 768px;
  }

  @media only screen and (min-width: 992px) {
    width: 992px;
  }
  
  @media only screen and (min-width: 1200px) {
    width: 992px;
  }
}
`;

export const Heading = styled.div`
  margin: 0;
  padding: 2rem 0;
  background-color: rgb(223, 46, 48);

  h1, h2 {
    margin-top: 1rem;
    margin-left: 4rem;
  }
`;

export const ToolsContainer = styled.div`
  margin-top: 1rem;
  margin-left: 4rem;
  margin-right: 4rem;
`;

export const Tools = styled.div`
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
  align-items: center;
`;

export const Tool = styled.div`
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;

  label + label {
    padding-left: 10px;
  }
`;