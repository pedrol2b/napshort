import styled, { keyframes } from 'styled-components'
import { fadeIn, fadeInDown } from 'react-animations'
import { shade, lighten } from 'polished'

export const Position = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  display: grid;
  place-items: center;
  top: 20%;
  @media (max-width: 428px) {
    top: 15%;
  }
`

export const Container = styled.div`
  max-width: 90vw;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  flex-grow: 1;
  display: grid;
  place-items: center;
`

const fadeInAnimation = keyframes`${fadeIn}`
export const Title = styled.div`
  animation: 1s ${fadeInAnimation};
  color: var(--text);
  h2,
  h3 {
    white-space: pre-wrap;
    word-wrap: normal;
  }
  h3 {
    display: inline-block;
    position: relative;
    &::after {
      content: '|';
      position: absolute;
      right: 0;
      width: 100%;
      color: var(--text);
      background: var(--background);
      animation: typing 1s steps(21) forwards, caret 1s infinite;
    }
  }
  @keyframes typing {
    to {
      width: 0;
    }
  }
  @keyframes caret {
    50% {
      color: transparent;
    }
  }
`

export const Boxed = styled.div`
  animation: 1s ${fadeInAnimation};
  margin-top: 0.625rem;
  width: 49rem;
  max-width: 90vw;
  padding: 2rem;
  background: ${(props) =>
    props.theme.title === 'Dark'
      ? lighten(0.05, props.theme.colors.background)
      : shade(0.05, props.theme.colors.background)};
  border-radius: 0.375rem;
  box-shadow: 0 0.125rem 0.625rem 0 rgba(0, 0, 0, 0.2);
  form {
    position: relative;
    width: 100%;
    height: auto;
    background: var(--black);
    border-radius: 0.375rem;
  }
  input,
  button {
    padding: 0.625rem;
    height: auto;
    border: 0;
    font-family: 'alata', montserrat;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.375rem;
    color: var(--text);
    outline: none;
  }
  input {
    text-align: left;
    width: 100%;
    z-index: 1;
    position: relative;
    appearance: none;
    transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
    transition-property: width, border-radius;
    background: ${(props) =>
      props.theme.title === 'Dark'
        ? lighten(0.1, props.theme.colors.background)
        : shade(0.1, props.theme.colors.background)};
  }
  button {
    cursor: pointer;
    color: var(--white);
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 6rem;
    font-weight: bold;
    background: rgba(0, 0, 0, 0);
  }
  input:not(:placeholder-shown) {
    width: calc(100% - 6rem);
    + button {
      display: block;
    }
  }
  .error {
    color: var(--red);
    display: none;
    white-space: pre-wrap;
    word-wrap: normal;
    word-break: break-word;
    margin-top: 0.375rem;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.375rem;
    &:before {
      content: '*';
    }
  }
`

export const BoxedData = styled.div`
  animation: 1s ${fadeInAnimation};
  margin-top: 0.625rem;
  width: 49rem;
  max-width: 90vw;
  padding: 2rem;
  background: ${(props) =>
    props.theme.title === 'Dark'
      ? lighten(0.05, props.theme.colors.background)
      : shade(0.05, props.theme.colors.background)};
  border-radius: 0.375rem;
  box-shadow: 0 0.125rem 0.625rem 0 rgba(0, 0, 0, 0.2);
  h3 {
    white-space: pre-wrap;
    word-wrap: normal;
    vertical-align: middle;
    display: inline-block;
    position: relative;
    svg {
      vertical-align: top;
      margin-right: 0.25rem;
    }
  }
`

export const DataWrapper = styled.div`
  display: grid;
`

const fadeInDownAnimation = keyframes`${fadeInDown}`
export const LinkWrapper = styled.div`
  margin-top: 0.313rem;
  animation: 1s ${fadeInDownAnimation};
  transition: 0.2s;
  border-radius: 0.313rem;
  padding: 0.375rem;
  background: ${(props) =>
    props.theme.title === 'Dark'
      ? lighten(0.1, props.theme.colors.background)
      : shade(0.1, props.theme.colors.background)};
  &:hover,
  &:focus {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border-radius: 0.375rem;
    background: ${(props) =>
      props.theme.title === 'Dark'
        ? lighten(0.2, props.theme.colors.background)
        : shade(0.2, props.theme.colors.background)};
  }
`

const press = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.92);
  }
  to {
    transform: scale(1);
  }
`

export const Link = styled.div`
  float: left;
  span#shorturl {
    cursor: pointer;
    color: var(--text);
    display: inline-block;
    white-space: pre-wrap;
    word-wrap: normal;
    word-break: break-word;
    vertical-align: middle;
    font-family: 'alata', montserrat;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.125rem;
    height: auto;
    &:active {
      animation: ${press} 0.2s 1 linear;
    }
    svg {
      margin-left: 0.25rem;
    }
  }
  span#url {
    color: ${(props) =>
      props.theme.title === 'Dark' ? shade(0.2, props.theme.colors.text) : lighten(0.2, props.theme.colors.text)};
    text-overflow: ellipsis;
    display: inline-block;
    white-space: pre-wrap;
    word-wrap: normal;
    word-break: break-word;
    word-wrap: break-word;
    vertical-align: middle;
    font-family: 'alata', montserrat;
    font-size: 0.688rem;
    font-weight: 400;
    line-height: 0.75rem;
    height: auto;
    max-height: 0.75rem;
    overflow: hidden;
  }
`
