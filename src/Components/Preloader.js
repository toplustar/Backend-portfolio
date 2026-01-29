import React from 'react';
import styled, { keyframes } from 'styled-components';

function Preloader() {
  return (
    <Wrapper className='preloader'>
      <LoaderContainer>
        <Circle className="circle1" />
        <Circle className="circle2" />
        <Circle className="circle3" />
        <CenterIcon>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(255,152,0,0.15)"/>
            <path d="M2 17L12 22L22 17" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </CenterIcon>
      </LoaderContainer>
      <LoadingText>
        <span className="loading-word">Loading</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </LoadingText>
    </Wrapper>
  )
}

export default Preloader;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const dotAnimation = keyframes`
  0%, 20% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 200;
  background: linear-gradient(to bottom right, #17171b 0%, #28282f 50%, #31313a 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,152,0,0.06) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: ${rotate} 60s linear infinite;
  }
`;

const LoaderContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Circle = styled.div`
  position: absolute;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: #ff9800;
  
  &.circle1 {
    width: 150px;
    height: 150px;
    animation: ${rotate} 2s linear infinite;
  }
  
  &.circle2 {
    width: 120px;
    height: 120px;
    border-top-color: rgba(255, 152, 0, 0.7);
    animation: ${rotate} 1.5s linear infinite reverse;
  }
  
  &.circle3 {
    width: 90px;
    height: 90px;
    border-top-color: rgba(255, 152, 0, 0.5);
    animation: ${rotate} 1s linear infinite;
  }
`;

const CenterIcon = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 152, 0, 0.12);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 152, 0, 0.4);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  animation: ${pulse} 2s ease-in-out infinite;
  
  svg {
    width: 35px;
    height: 35px;
  }
`;

const LoadingText = styled.div`
  margin-top: 40px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ff9800;
  display: flex;
  align-items: center;
  gap: 2px;
  animation: ${fadeIn} 0.5s ease-out 0.3s both;
  
  .loading-word {
    letter-spacing: 2px;
  }
  
  .dot {
    animation: ${dotAnimation} 1.5s ease-in-out infinite;
    font-weight: bold;
    
    &:nth-child(2) {
      animation-delay: 0s;
    }
    
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    
    &:nth-child(4) {
      animation-delay: 0.6s;
    }
  }
`;