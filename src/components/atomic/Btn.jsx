import { styled, css } from 'styled-components';

export const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.3s;

  &:hover {
    cursor: pointer;
  }

  ${(props) => props.bgcolor && `background-color: ${props.bgcolor}`};
  & div {
    ${(props) => props.color && `color: ${props.color}`};
  }

  ${(props) =>
    props.size === 'large'
      ? css`
          width: 62.6rem;
          border-radius: 3rem;
        `
      : props.size === 'medium'
      ? css`
          padding: 2rem 0;
          width: 25.6rem;
          border-radius: 4rem;
        `
      : props.size === 'small'
      ? css`
          width: max-content;
          min-width: 10rem;
          padding: 1.3rem 2rem;
          border-radius: 2.5rem;
        `
      : null}
`;
