import styled from 'styled-components'
import { shade, lighten } from 'polished'

export const Header = styled.div`
  width: 100vw;
  padding: 1.25rem;
  justify-content: space-between;
`

export const Logo = styled.div`
  transition-property: all;
  vertical-align: middle;
  cursor: pointer;
  float: left;
  svg {
    transition-property: all;
    transition: 0.2s;
    vertical-align: middle;
    width: 1.375rem;
    height: 1.375rem;
    fill: var(--text);
    margin-right: 0.25rem;
  }
  p {
    transition-property: all;
    transition: 0.2s;
    vertical-align: middle;
    display: inline-block;
    font-family: 'alata';
    font-size: 1.5rem;
    line-height: 2.063rem;
    color: var(--text);
    @media (max-width: 428px) {
      display: none;
    }
  }
  &:hover p,
  &:focus p {
    color: ${(props) =>
      props.theme.title === 'Dark' ? shade(0.2, props.theme.colors.text) : lighten(0.2, props.theme.colors.text)};
  }
`

export const Menu = styled.div`
  float: right;
  vertical-align: middle;
  svg {
    cursor: pointer;
    transition: 0.2s;
    color: var(--text);
    vertical-align: middle;
    width: 1.375rem;
    height: 1.375rem;
    &:hover,
    &:focus {
      color: ${(props) =>
        props.theme.title === 'Dark' ? shade(0.2, props.theme.colors.text) : lighten(0.2, props.theme.colors.text)};
    }
  }
`

export const NavLang = styled.div`
  float: left;
  vertical-align: middle;
  display: inline;
  margin-right: 0.625rem;
  div[class*='short'] {
    display: none;
  }
  @media (max-width: 728px) {
    div[class*='long'] {
      display: none;
    }
    div[class*='short'] {
      display: block;
    }
  }
  div[class*='NavLang'] span {
    cursor: pointer;
    color: var(--text);
    text-transform: uppercase;
    margin-right: 0.625rem;
    text-decoration: none;
    display: inline-block;
    position: relative;
    &:hover,
    &:focus {
      color: ${(props) =>
        props.theme.title === 'Dark' ? shade(0.2, props.theme.colors.text) : lighten(0.2, props.theme.colors.text)};
    }
    &:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: '';
      display: block;
      height: 0.125rem;
      position: absolute;
      background: ${(props) =>
        props.theme.title === 'Dark' ? shade(0.2, props.theme.colors.text) : lighten(0.2, props.theme.colors.text)};
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0%;
      left: 0;
    }
    &:hover:after {
      width: 100%;
      left: 0;
    }
  }
  div[class*='NavLang'] .active {
    color: ${(props) =>
      props.theme.title === 'Dark' ? shade(0.2, props.theme.colors.text) : lighten(0.2, props.theme.colors.text)};
    &:after {
      content: ' ';
      width: 100%;
      height: 0.125rem;
      position: absolute;
      left: 0;
      bottom: 0;
      background: ${(props) =>
        props.theme.title === 'Dark' ? shade(0.2, props.theme.colors.text) : lighten(0.2, props.theme.colors.text)};
    }
  }
`
