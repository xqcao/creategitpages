import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const blinkingEffect = () => {
  return keyframes`
   0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    color: black;
  }
  100% {
    opacity: 0;
  }
  `;
};

const AnimatedComponent = styled.div`
  animation: ${blinkingEffect} 1s linear infinite;
`;
const Blanking = () => {
  return <AnimatedComponent>_</AnimatedComponent>;
};

export default Blanking;
