import styled, { keyframes } from 'styled-components'
import { shade, lighten } from 'polished'

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: auto;
  padding: 0.625rem;
  justify-content: space-between;
  transition: 0.2s;
  @media (max-width: 720px) {
    padding: 0.125rem;
  }
`

const pressH = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
`

const pressV = keyframes`
  0% {
    transform: scale(1) rotate(90deg);
  }
  50% {
    transform: scale(0.8) rotate(90deg);
  }
  to {
    transform: scale(1) rotate(90deg);
  }
`

export const Author = styled.span`
  float: left;
  color: var(--text);
  font-size: 0.875rem;
  font-weight: 400;
  svg {
    vertical-align: middle;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    animation: 1s ${pressH} infinite;
    @media (max-width: 1150px) {
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
      margin-right: 0;
      margin-left: 0;
      animation: 1s ${pressV} infinite;
    }
  }
  a {
    color: var(--purple);
  }
  @media (max-width: 1150px) {
    writing-mode: vertical-rl;
  }
`

export const FAB = styled.div`
  cursor: pointer;
  position: fixed;
  bottom: 0.625rem;
  right: 1.25rem;
  padding: 0.625rem;
  background: ${(props) =>
    props.theme.title === 'Dark'
      ? lighten(0.05, props.theme.colors.background)
      : shade(0.05, props.theme.colors.background)};
  border-radius: 0.375rem;
  box-shadow: 0 0.125rem 0.625rem 0 rgba(0, 0, 0, 0.2);
  z-index: 99;
  svg {
    vertical-align: middle;
  }
`
