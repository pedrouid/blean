import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Home = () => (
  <StyledContainer>
    <h1>404 Page Not Found</h1>
  </StyledContainer>
);


export default Home;
