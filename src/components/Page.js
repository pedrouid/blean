import React, { PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledPage = styled.div`
  height: 100vh;
  text-align: center;
  will-change: transform, opacity;
  animation: 0.5s ease 0s normal 1 ${fadeIn};
`;
const Page = ({ children }) => (
  <StyledPage>
    {children}
  </StyledPage>
);

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
