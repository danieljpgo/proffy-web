import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  styleVariants: 'primary' | 'secundary',
  size: 'small' | 'large'
}

const variants = {
  primary: css`
    background-color: ${(props) => props.theme.colors.primary.lighter};
    :hover{
      background-color: ${(props) => props.theme.colors.primary.light};
    }
    :disabled{
      background-color: ${(props) => props.theme.colors.primary.disabled};
    }
  `,
  secundary: css`
    background-color: ${(props) => props.theme.colors.secundary.main};
    :hover{
      background-color: ${(props) => props.theme.colors.secundary.dark};
    }
    :disabled{
      background-color: ${(props) => props.theme.colors.secundary.disabled};
    }
  `,
};

const size = {
  small: css`
    font-size: 1rem;
    padding: ${(props) => props.theme.unit / 2}rem;
    grid-gap: ${(props) => props.theme.unit / 4}rem;
    height: ${(props) => props.theme.unit * 2}rem;
    img {
      width: 1.4rem;
      height: 1.4rem;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.small}px) {
      padding: ${(props) => props.theme.unit / 2}rem ${(props) => props.theme.unit}rem;
    }
  `,
  large: css`
    font-size: 1rem;
    padding: ${(props) => props.theme.unit / 2}rem;
    grid-gap: ${(props) => props.theme.unit / 2}rem;
    height: ${(props) => props.theme.unit * 3.5}rem;
    img {
      width: 2rem;
      height: 2rem;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.small}px) {
      padding: ${(props) => props.theme.unit}rem;
      font-size: 1.2rem;
    }
  `,
};

export const Container = styled(motion.button) <Props>`
  display: grid;
  grid-template-columns: min-content min-content;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${(props) => props.theme.shapes.borderRadius}rem;
  white-space: nowrap;
  font-weight: 700;
  font-family: Archivo;
  color: ${(props) => props.theme.colors.text.constrast};
  
  :disabled{
    pointer-events: none;
  }

  ${(props) => variants[props.styleVariants]}
  ${(props) => size[props.size]}
`;
