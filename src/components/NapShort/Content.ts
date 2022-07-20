import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  0%, 40%, 60%, 80%, 100% {
    height: 0.313rem;
  }
  20%  {
    height: calc(100vh + 3.125rem);
  }
`

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  span {
    width: 6.25rem;
    height: 0.313rem;
    display: block;
    background: #6272a4;
    position: absolute;
    opacity: 0.5;
    top: -3.125rem;
    -webkit-animation: ${loading} 3s ease-in-out infinite;
    -moz-animation: ${loading} 3s ease-in-out infinite;
    -o-animation: ${loading} 3s ease-in-out infinite;
    animation: ${loading} 3s ease-in-out infinite;
  }
  span:nth-of-type(2) {
    left: 6.25rem;
    background: #8be9fd;
    -webkit-animation-delay: 0.1s;
    -moz-animation-delay: 0.1s;
    -o-animation-delay: 0.1s;
    animation-delay: 0.1s;
  }
  span:nth-of-type(3) {
    left: 12.5rem;
    background: #50fa7b;
    -webkit-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    -o-animation-delay: 0.2s;
    animation-delay: 0.2s;
  }
  span:nth-of-type(4) {
    left: 18.75rem;
    background: #ffb86c;
    -webkit-animation-delay: 0.3s;
    -moz-animation-delay: 0.3s;
    -o-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  span:nth-of-type(5) {
    left: 25rem;
    background: #ff79c6;
    -webkit-animation-delay: 0.4s;
    -moz-animation-delay: 0.4s;
    -o-animation-delay: 0.4s;
    animation-delay: 0.4s;
  }
  span:nth-of-type(6) {
    left: 31.25rem;
    background: #bd93f9;
    -webkit-animation-delay: 0.5s;
    -moz-animation-delay: 0.5s;
    -o-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  span:nth-of-type(7) {
    left: 37.5rem;
    background: #ff5555;
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
    -o-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }
  span:nth-of-type(8) {
    left: 43.75rem;
    background: #f1fa8c;
    -webkit-animation-delay: 0.7s;
    -moz-animation-delay: 0.7s;
    -o-animation-delay: 0.7s;
    animation-delay: 0.7s;
  }
  span:nth-of-type(9) {
    left: 50rem;
    background: #6272a4;
    -webkit-animation-delay: 0.8s;
    -moz-animation-delay: 0.8s;
    -o-animation-delay: 0.8s;
    animation-delay: 0.8s;
  }
  span:nth-of-type(10) {
    left: 56.25rem;
    background: #8be9fd;
    -webkit-animation-delay: 0.9s;
    -moz-animation-delay: 0.9s;
    -o-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }
  span:nth-of-type(11) {
    left: 62.5rem;
    background: #50fa7b;
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    -o-animation-delay: 1s;
    animation-delay: 1s;
  }
  span:nth-of-type(12) {
    left: 68.75rem;
    background: #ffb86c;
    -webkit-animation-delay: 1.1s;
    -moz-animation-delay: 1.1s;
    -o-animation-delay: 1.1s;
    animation-delay: 1.1s;
  }
  span:nth-of-type(13) {
    left: 75rem;
    background: #ff79c6;
    -webkit-animation-delay: 1.2s;
    -moz-animation-delay: 1.2s;
    -o-animation-delay: 1.2s;
    animation-delay: 1.2s;
  }
  span:nth-of-type(14) {
    left: 81.25rem;
    background: #bd93f9;
    -webkit-animation-delay: 1.3s;
    -moz-animation-delay: 1.3s;
    -o-animation-delay: 1.3s;
    animation-delay: 1.3s;
  }
  span:nth-of-type(15) {
    left: 87.5rem;
    background: #ff5555;
    -webkit-animation-delay: 1.4s;
    -moz-animation-delay: 1.4s;
    -o-animation-delay: 1.4s;
    animation-delay: 1.4s;
  }
  span:last-of-type {
    left: 93.75rem;
    background: #f1fa8c;
    -webkit-animation-delay: 1.5s;
    -moz-animation-delay: 1.5s;
    -o-animation-delay: 1.5s;
    animation-delay: 1.5s;
  }
`
